/**
 * Created by chou6 on 2018-06-28.
 */
let play, list;
let mode = 0;
let shouldStop = false;
let stopped = false;
let mediaRecorder;
let downLink;
window.addEventListener('load', function () {
    // Not showing vendor prefixes.
    $("#intro").addClass("dofade");
    $("#intro").css("opacity","0");
    play = $("#play");
    list = $("#list");
    document.getElementById('menubtn').addEventListener('click',switchmode);
    document.getElementById('selection').addEventListener('click',invokeSelection);
    document.getElementById('record').addEventListener('click',recordData);
    document.getElementById('myFile').addEventListener('change',uploadFile);
    document.getElementById('stop').addEventListener('click',function () {
        setTimeout(() => {
            // this will trigger one final 'ondataavailable' event and set recorder state to 'inactive'
            mediaRecorder.stop();
        }, 1000);

    });

    downLink = document.getElementById('download');
});
var errorCallback = function(e) {
    console.log('Reeeejected!', e);
};
function handleSuccess(stream) {
    const options = {mimeType: 'video/webm;codecs=vp9'};
    const recordedChunks = [];
    mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.addEventListener('dataavailable', function(e) {
        console.log('data available ' + e.data.size);
        if (e.data.size > 0) {
            recordedChunks.push(e.data);
        }
    });
    mediaRecorder.addEventListener('stop', function() {
        let data = new Blob(recordedChunks,{type : "audio/mpeg"});
        data.name = "audioFile.mp3"
        data.size = recordedChunks.length;
        console.log(data);
        console.log(mediaRecorder.state);
        downLink.href = URL.createObjectURL(data);
        downLink.download = 'audioFile.mp3';
    });
    mediaRecorder.start();
};
function switchmode() {
    if(mode == 0){
        mode = 1;
        play.css('display','none');
        list.css('display','block');

    }else{
        mode = 0;
        list.css('display','none');
        play.css('display','flex');
    }
}
function invokeSelection() {
    console.log('clicked');
    $('#myFile').click();
}
function uploadFile(){
    var file = document.getElementById('myFile');
    var filedata = new FormData(); // FormData 인스턴스 생성
    if (!file.value) return; // 파일이 없는 경우 빠져나오기
    filedata.append('uploadfile', file.files[0]);
    $.ajax({
        url: "/",
        type: 'POST',
        data: filedata,
        cache: false,
        processData: false, // essential
        contentType: false, // essential, application/pdf doesn't work.
        enctype: 'multipart/form-data',

        // If sucess, download file
        success: function(data, status, xhr) {
            console.log("success");
        }
    });

}
function recordData(){
    navigator.mediaDevices.getUserMedia({ audio: true})
        .then(handleSuccess)
}
function findBPM(){
    console.log('findBPM');
    var file = this.files[0];
    var reader = new FileReader();
    var context = new(window.AudioContext || window.webkitAudioContext)();
    reader.onload = function() {
        context.decodeAudioData(reader.result, function(buffer) {
            prepare(buffer);
        });
    };
    reader.readAsArrayBuffer(file);
}

function prepare(buffer) {
    var offlineContext = new OfflineAudioContext(1, buffer.length, buffer.sampleRate);
    var source = offlineContext.createBufferSource();
    source.buffer = buffer;
    var filter = offlineContext.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 440;
    source.connect(filter);
    filter.connect(offlineContext.destination);
    source.start(0);
    offlineContext.startRendering();
    offlineContext.oncomplete = function(e) {
        process(e);
    };
}

function process(e) {
    var filteredBuffer = e.renderedBuffer;
    //If you want to analyze both channels, use the other channel later
    var data = filteredBuffer.getChannelData(0);
    var max = arrayMax(data);
    var min = arrayMin(data);
    var threshold = min + (max - min) * 0.98;
    var peaks = getPeaksAtThreshold(data, threshold);
    var intervalCounts = countIntervalsBetweenNearbyPeaks(peaks);
    var tempoCounts = groupNeighborsByTempo(intervalCounts);
    tempoCounts.sort(function(a, b) {
        return b.count - a.count;
    });
    if (tempoCounts.length) {
        let output = document.getElementById('output');
        output.innerHTML = tempoCounts[0].tempo;
    }
}


function getPeaksAtThreshold(data, threshold) {
    var peaksArray = [];
    var length = data.length;
    for (var i = 0; i < length;) {
        if (data[i] > threshold) {
            peaksArray.push(i);
            // Skip forward ~ 1/4s to get past this peak.
            i += 10000;
        }
        i++;
    }
    return peaksArray;
}

function countIntervalsBetweenNearbyPeaks(peaks) {
    var intervalCounts = [];
    peaks.forEach(function(peak, index) {
        for (var i = 0; i < 10; i++) {
            var interval = peaks[index + i] - peak;
            var foundInterval = intervalCounts.some(function(intervalCount) {
                if (intervalCount.interval === interval) return intervalCount.count++;
            });
            //Additional checks to avoid infinite loops in later processing
            if (!isNaN(interval) && interval !== 0 && !foundInterval) {
                intervalCounts.push({
                    interval: interval,
                    count: 1
                });
            }
        }
    });
    return intervalCounts;
}

function groupNeighborsByTempo(intervalCounts) {
    var tempoCounts = [];
    intervalCounts.forEach(function(intervalCount) {
        //Convert an interval to tempo
        var theoreticalTempo = 60 / (intervalCount.interval / 44100);
        theoreticalTempo = Math.round(theoreticalTempo);
        if (theoreticalTempo === 0) {
            return;
        }
        // Adjust the tempo to fit within the 90-180 BPM range
        while (theoreticalTempo < 90) theoreticalTempo *= 2;
        while (theoreticalTempo > 180) theoreticalTempo /= 2;

        var foundTempo = tempoCounts.some(function(tempoCount) {
            if (tempoCount.tempo === theoreticalTempo) return tempoCount.count += intervalCount.count;
        });
        if (!foundTempo) {
            tempoCounts.push({
                tempo: theoreticalTempo,
                count: intervalCount.count
            });
        }
    });
    return tempoCounts;
}

// http://stackoverflow.com/questions/1669190/javascript-min-max-array-values
function arrayMin(arr) {
    var len = arr.length,
        min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

function arrayMax(arr) {
    var len = arr.length,
        max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}