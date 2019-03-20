/**
 * Created by chou6 on 2018-06-29.
 */
var lines = [];
var line_container;
var count = 0;

var data = [
    { "start" : "0.417959" , "finish" : "10.541859", "code" : "Dmin" },
    { "start" : "11.981497" , "finish" : "14.210612", "code" : "D" },
    { "start" : "14.442812" , "finish" : "15.139410", "code" : "Emin" },
    { "start" : "16.253968" , "finish" : "22.058957", "code" : "F" },
    { "start" : "22.569796" , "finish" : "22.941315", "code" : "D" },
    { "start" : "23.219955" , "finish" : "23.405714", "code" : "Dmin" },
    { "start" : "24.891791" , "finish" : "26.192109", "code" : "F" },
    { "start" : "27.120907" , "finish" : "30.882540", "code" : "Gmin" },
    { "start" : "31.161179" , "finish" : "31.300499", "code" : "Emin" },
    { "start" : "31.811338" , "finish" : "33.576054", "code" : "D" },
    { "start" : "33.854694" , "finish" : "35.480091", "code" : "Dmin" },
    { "start" : "36.966168" , "finish" : "39.148844", "code" : "Dmin" },
    { "start" : "40.124082" , "finish" : "41.006440", "code" : "Eb" },
    { "start" : "43.374875" , "finish" : "46.532789", "code" : "Dmin" },
    { "start" : "47.972426" , "finish" : "52.059138", "code" : "Eb" },
    { "start" : "53.963175" , "finish" : "54.845533", "code" : "F" },
    { "start" : "56.099410" , "finish" : "56.935329", "code" : "Dmin" },
    { "start" : "57.213968" , "finish" : "59.350204", "code" : "Eb" },
    { "start" : "59.768163" , "finish" : "60.325442", "code" : "Dmin" },
    { "start" : "62.740317" , "finish" : "63.483356", "code" : "D" },
    { "start" : "63.808435" , "finish" : "64.040635", "code" : "Dmin" },
    { "start" : "64.830113" , "finish" : "66.827029", "code" : "F" },
    { "start" : "67.198549" , "finish" : "67.570068", "code" : "D" },
    { "start" : "67.802268" , "finish" : "68.591746", "code" : "Eb" },
    { "start" : "70.170703" , "finish" : "71.471020", "code" : "Gmin" },
    { "start" : "72.167619" , "finish" : "74.257415", "code" : "D" },
    { "start" : "74.396735" , "finish" : "74.675374", "code" : "G" },
    { "start" : "75.000454" , "finish" : "75.418413", "code" : "Dmin" },
    { "start" : "75.697052" , "finish" : "76.997370", "code" : "Eb" },
    { "start" : "78.251247" , "finish" : "79.272925", "code" : "F" },
    { "start" : "79.876644" , "finish" : "80.619683", "code" : "Dmin" },
    { "start" : "82.105760" , "finish" : "87.167710", "code" : "F" },
    { "start" : "87.446349" , "finish" : "88.050068", "code" : "Gmin" },
    { "start" : "88.282268" , "finish" : "88.932426", "code" : "Emin" },
    { "start" : "89.489705" , "finish" : "90.790023", "code" : "D" },
    { "start" : "91.068662" , "finish" : "91.765261", "code" : "Gmin" },
    { "start" : "92.276100" , "finish" : "93.576417", "code" : "Eb" },
    { "start" : "94.226576" , "finish" : "96.362812", "code" : "Dmin" },
    { "start" : "98.127528" , "finish" : "103.793197", "code" : "Dmin" },
    { "start" : "105.743673" , "finish" : "107.461950", "code" : "Dmin" },
    { "start" : "109.180227" , "finish" : "111.177143", "code" : "Dmin" },
    { "start" : "111.780862" , "finish" : "112.988299", "code" : "Eb" },
    { "start" : "115.356735" , "finish" : "116.703492", "code" : "Eb" },
    { "start" : "117.771610" , "finish" : "118.561088", "code" : "Dmin" },
    { "start" : "119.489887" , "finish" : "120.372245", "code" : "Eb" },
    { "start" : "121.997642" , "finish" : "124.087438", "code" : "Eb" },
    { "start" : "125.341315" , "finish" : "125.945034", "code" : "Dmin" },
    { "start" : "127.338231" , "finish" : "127.756190", "code" : "Eb" },
    { "start" : "129.242268" , "finish" : "131.471383", "code" : "Eb" },
    { "start" : "132.864580" , "finish" : "133.282540", "code" : "Dmin" },
    { "start" : "133.793379" , "finish" : "138.855329", "code" : "Eb" },
    { "start" : "140.062766" , "finish" : "140.805805", "code" : "F" }
];
var line_container_width;
var duration;
var isPlaying = false;
var myAudio;
let colors = ['#F97E58','#A7AEF9','#F9CB70','#9DF975'];
window.addEventListener('load', function () {
    //duration = $('#duration');
    document.getElementById('btnLoad').addEventListener('click',renderMusicScore);
    document.getElementById('start').addEventListener('click',start);
    myAudio = document.getElementById("myAudio");
    myAudio.onplaying = function() {
        isPlaying = true;
    };
    myAudio.onpause = function() {
        isPlaying = false;
    };

});
function togglePlay() {
    if (isPlaying) {
        myAudio.pause()
    } else {
        myAudio.play();
    }
};
function invokeSelection() {
    $('#myFile').click();
}
function loadData() {
    var input, file, fr;

    if (typeof window.FileReader !== 'function') {
        alert("The file API isn't supported on this browser yet.");
        return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
        alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
        alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
        alert("Please select a file before clicking 'Load'");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);
    }

    function receivedText(e) {
        console.log("received!");
        let lines = e.target.result;
        console.log(lines);
        datalist = lines.split("\n");
        console.log(datalist);
        for(let i=0; i<datalist.length; i++){
            let res;
            if(datalist[i].charAt(datalist[i].length - 1) == ','){
                console.log(res)
                res = datalist[i].substr(0,datalist[i].length-1)

            }else{
                res = datalist[i];
                console.log(res)
            }
            data.push(JSON.parse(datalist[i]));
        }


    }

}
function renderMusicScore() {

    /*
    $.ajax({
        type: 'GET',
        url: '/',
        data: { get_param: 'value' },
        dataType: 'json',
        success: function (data) {
            $.each(data, function(index, element) {
                data.append(element);
            });
        }
    });
    */
    /*

    */
    let i, starve;
    let max;
    let endtime = data[data.length-1].finish;
    let madi = (60/143)*4;

    let NUM_OF_STAVE = Math.floor(endtime/madi)+1;
    console.log(NUM_OF_STAVE);
    let now = parseInt(data[data.length-1].start);
    let madiindex = Math.floor((now/madi));
    console.log(madiindex);

    line_container = $('#line_container');
    line_container.css('border-style','solid');
    line_container.css('height','240px');
    let width = line_container.width();

    for(i = 0; i < 3; i++) {
        let obj = data[i];
        let line = $('<div></div>');
        let start = obj.start;
        let finish = obj.finish;
        let code = obj.code;
        let width = ((finish-start)/25)*100;
        line.css('width',width + "%");
        line.css('height',"238px");
        line.css('text-align',"center");
        line.css('line-height',"40px");
        line.css('font-weight',"bold");
        line.text(code);
        if(code==="N"){
            line.css('background-color', 'grey');
        }else{
            line.css('background-color', colors[((count++)%4)]);

        }
        line_container.append(line);
        lines.push(line);
    }


}
function start(){
    setTimeout(changeline,data[count-2].finish*1000);
    //duration.text(data[count-2].finish*1000);
    line_container_width = line_container.width();
    line_container.css('width', line_container_width + "px");
    count++;
}
function changeline() {
    setTimeout(changeline, (data[count-2].finish-data[count-2].start)*1000);
    //duration.text((data[count-2].finish-data[count-2].start)*1000);
    if(count >= data.length){
        return;
    }else{
        let pop= lines.shift();
        pop.remove();
        let obj = data[count];
        let line = $('<div></div>');
        let start = obj.start;
        let finish = obj.finish;
        let code = obj.code;
        let width = ((finish-start)/25)*100;

        line.css('width',width + "%");
        line.css('height',"238px");
        line.css('text-align',"center");
        line.css('line-height',"40px");
        line.css('font-weight',"bold");
        line.text(code);
        if(code==="N"){
            line.css('background-color', 'grey');
        }else{
            line.css('background-color', colors[count%4]);
        }
        lines.push(line);
        line_container.append(line);
        count++;
    }




}
function findmax(){
    let max = 0;

}