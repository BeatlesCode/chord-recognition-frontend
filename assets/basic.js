/**
 * Created by chou6 on 2018-06-28.
 */
let shouldStop = false;
let stopped = false;
let mediaRecorder;
let downLink;
window.addEventListener('load', function () {
    // Not showing vendor prefixes.
    document.getElementById('upload').addEventListener('click',uploadFile);
    document.getElementById('record').addEventListener('click',recordData);
    document.getElementById('stop').addEventListener('click',function () {
        setTimeout(() => {
            // this will trigger one final 'ondataavailable' event and set recorder state to 'inactive'
            mediaRecorder.stop();
        }, 3000);

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
        console.log(data);
        console.log(mediaRecorder.state);
        downLink.href = URL.createObjectURL(data);
        downLink.download = 'audioFile.mp3';
    });
    mediaRecorder.start();
};


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