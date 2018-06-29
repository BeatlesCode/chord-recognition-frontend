/**
 * Created by chou6 on 2018-06-29.
 */
var lines = [];
var line_container;
var count = 0;
var data = [
    { "start" : "0.000000" , "finish" : "0.175157", "code" : "N" },
    { "start" : "0.175157" , "finish" : "1.852358", "code" : "C" },
    { "start" : "1.852358" , "finish" : "3.454535", "code" : "G" },
    { "start" : "3.454535" , "finish" : "4.720022", "code" : "A:min" },
    { "start" : "4.720022" , "finish" : "5.126371", "code" : "A:min/b7" },
    { "start" : "5.126371" , "finish" : "5.950680", "code" : "F:maj7" },
    { "start" : "5.950680" , "finish" : "6.774988", "code" : "F:maj6" },
    { "start" : "6.774988" , "finish" : "8.423605", "code" : "C" },
    { "start" : "8.423605" , "finish" : "10.014172", "code" : "G" },
    { "start" : "10.014172" , "finish" : "11.651179", "code" : "F" },
    { "start" : "11.651179" , "finish" : "13.392675", "code" : "C" },
    { "start" : "13.392675" , "finish" : "15.018072", "code" : "C" },
    { "start" : "15.018072" , "finish" : "16.527369", "code" : "G" },
    { "start" : "16.527369" , "finish" : "17.734807", "code" : "A:min" },
    { "start" : "17.734807" , "finish" : "18.129546", "code" : "A:min/b7" },
    { "start" : "18.129546" , "finish" : "18.919024", "code" : "F:maj7" },
    { "start" : "18.919024" , "finish" : "19.662063", "code" : "F:maj6" },
    { "start" : "19.662063" , "finish" : "21.264240", "code" : "C" },
    { "start" : "21.264240" , "finish" : "22.796757", "code" : "G" },
    { "start" : "22.796757" , "finish" : "24.398934", "code" : "F" },
    { "start" : "24.398934" , "finish" : "26.035941", "code" : "C" },
    { "start" : "26.035941" , "finish" : "27.591678", "code" : "C" },
    { "start" : "27.591678" , "finish" : "29.217074", "code" : "G" },
    { "start" : "29.217074" , "finish" : "30.424167", "code" : "A:min" },
    { "start" : "30.424167" , "finish" : "30.812726", "code" : "A:min/b7" },
    { "start" : "30.812726" , "finish" : "31.562290", "code" : "F:maj7" },
    { "start" : "31.562290" , "finish" : "32.293718", "code" : "F:maj6" },
    { "start" : "32.293718" , "finish" : "33.930725", "code" : "C" },
    { "start" : "33.930725" , "finish" : "35.590952", "code" : "G" },
    { "start" : "35.590952" , "finish" : "37.169909", "code" : "F" },
    { "start" : "37.169909" , "finish" : "37.982607", "code" : "C" },
    { "start" : "37.982607" , "finish" : "38.783696", "code" : "C/7" },
    { "start" : "38.783696" , "finish" : "40.490362", "code" : "A:min" },
    { "start" : "40.490362" , "finish" : "42.115759", "code" : "E:min/b3" },
    { "start" : "42.115759" , "finish" : "43.752766", "code" : "F" },
    { "start" : "43.752766" , "finish" : "45.424603", "code" : "C" },
    { "start" : "45.424603" , "finish" : "47.084829", "code" : "C" },
    { "start" : "47.084829" , "finish" : "48.721836", "code" : "G" },
    { "start" : "48.721836" , "finish" : "50.312403", "code" : "F" },
    { "start" : "50.312403" , "finish" : "52.007460", "code" : "C" },
    { "start" : "52.007460" , "finish" : "53.632857", "code" : "C" },
    { "start" : "53.632857" , "finish" : "55.223424", "code" : "G" },
    { "start" : "55.223424" , "finish" : "56.444666", "code" : "A:min" },
    { "start" : "56.444666" , "finish" : "56.820273", "code" : "A:min/b7" },
    { "start" : "56.820273" , "finish" : "57.603469", "code" : "F:maj7" },
    { "start" : "57.603469" , "finish" : "58.439387", "code" : "F:maj6" },
    { "start" : "58.439387" , "finish" : "60.064784", "code" : "C" },
    { "start" : "60.064784" , "finish" : "61.771451", "code" : "G" },
    { "start" : "61.771451" , "finish" : "63.373628", "code" : "F" },
    { "start" : "63.373628" , "finish" : "65.010634", "code" : "C" },
    { "start" : "65.010634" , "finish" : "66.659251", "code" : "C" },
    { "start" : "66.659251" , "finish" : "68.296258", "code" : "G" },
    { "start" : "68.296258" , "finish" : "69.526151", "code" : "A:min" },
    { "start" : "69.526151" , "finish" : "69.979705", "code" : "A:min/b7" },
    { "start" : "69.979705" , "finish" : "70.850453", "code" : "F:maj7" },
    { "start" : "70.850453" , "finish" : "71.628321", "code" : "F:maj6/5" },
    { "start" : "71.628321" , "finish" : "73.334988", "code" : "C" },
    { "start" : "73.334988" , "finish" : "75.030045", "code" : "G" },
    { "start" : "75.030045" , "finish" : "76.748321", "code" : "F" },
    { "start" : "76.748321" , "finish" : "78.385328", "code" : "C" },
    { "start" : "78.385328" , "finish" : "80.208095", "code" : "A:min" },
    { "start" : "80.208095" , "finish" : "81.891541", "code" : "E:min/b3" },
    { "start" : "81.891541" , "finish" : "83.528548", "code" : "F" },
    { "start" : "83.528548" , "finish" : "85.200385", "code" : "C" },
    { "start" : "85.200385" , "finish" : "86.918662", "code" : "C" },
    { "start" : "86.918662" , "finish" : "88.544058", "code" : "G" },
    { "start" : "88.544058" , "finish" : "90.215895", "code" : "F" },
    { "start" : "90.215895" , "finish" : "91.818072", "code" : "C" },
    { "start" : "91.818072" , "finish" : "93.513129", "code" : "A:min" },
    { "start" : "93.513129" , "finish" : "95.184965", "code" : "E:min/b3" },
    { "start" : "95.184965" , "finish" : "96.833582", "code" : "F" },
    { "start" : "96.833582" , "finish" : "98.540249", "code" : "C" },
    { "start" : "98.540249" , "finish" : "100.200476", "code" : "C" },
    { "start" : "100.200476" , "finish" : "101.849092", "code" : "G" },
    { "start" : "101.849092" , "finish" : "103.520929", "code" : "F" },
    { "start" : "103.520929" , "finish" : "105.192766", "code" : "C" },
    { "start" : "105.192766" , "finish" : "106.934263", "code" : "F" },
    { "start" : "106.934263" , "finish" : "108.664149", "code" : "C" },
    { "start" : "108.664149" , "finish" : "109.476848", "code" : "G" },
    { "start" : "109.476848" , "finish" : "110.382426", "code" : "F" },
    { "start" : "110.382426" , "finish" : "112.158752", "code" : "C" },
    { "start" : "112.158752" , "finish" : "113.969909", "code" : "F" },
    { "start" : "113.969909" , "finish" : "115.688185", "code" : "C" },
    { "start" : "115.688185" , "finish" : "116.489274", "code" : "G" },
    { "start" : "116.489274" , "finish" : "117.360022", "code" : "F" },
    { "start" : "117.360022" , "finish" : "119.147959", "code" : "C" },
    { "start" : "119.147959" , "finish" : "120.831405", "code" : "C" },
    { "start" : "120.831405" , "finish" : "122.584512", "code" : "G" },
    { "start" : "122.584512" , "finish" : "123.898502", "code" : "A:min" },
    { "start" : "123.898502" , "finish" : "124.291179", "code" : "A:min/b7" },
    { "start" : "124.291179" , "finish" : "126.079115", "code" : "F" },
    { "start" : "126.079115" , "finish" : "127.739342", "code" : "C" },
    { "start" : "127.739342" , "finish" : "129.446009", "code" : "G" },
    { "start" : "129.446009" , "finish" : "131.141065", "code" : "F" },
    { "start" : "131.141065" , "finish" : "132.917392", "code" : "C" },
    { "start" : "132.917392" , "finish" : "134.658888", "code" : "C" },
    { "start" : "134.658888" , "finish" : "136.365555", "code" : "G" },
    { "start" : "136.365555" , "finish" : "138.118662", "code" : "A:min" },
    { "start" : "138.118662" , "finish" : "139.848548", "code" : "F" },
    { "start" : "139.848548" , "finish" : "141.531995", "code" : "C" },
    { "start" : "141.531995" , "finish" : "143.215442", "code" : "G" },
    { "start" : "143.215442" , "finish" : "144.945328", "code" : "F" },
    { "start" : "144.945328" , "finish" : "146.651995", "code" : "C" },
    { "start" : "146.651995" , "finish" : "148.439931", "code" : "A:min" },
    { "start" : "148.439931" , "finish" : "150.216258", "code" : "E:min/b3" },
    { "start" : "150.216258" , "finish" : "151.980975", "code" : "F" },
    { "start" : "151.980975" , "finish" : "153.792131", "code" : "C" },
    { "start" : "153.792131" , "finish" : "155.545238", "code" : "C" },
    { "start" : "155.545238" , "finish" : "157.333174", "code" : "G" },
    { "start" : "157.333174" , "finish" : "159.086281", "code" : "F" },
    { "start" : "159.086281" , "finish" : "160.874217", "code" : "C" },
    { "start" : "160.874217" , "finish" : "162.650544", "code" : "C" },
    { "start" : "162.650544" , "finish" : "164.380430", "code" : "G" },
    { "start" : "164.380430" , "finish" : "165.720399", "code" : "A:min" },
    { "start" : "165.720399" , "finish" : "166.133537", "code" : "A:min/b7" },
    { "start" : "166.133537" , "finish" : "166.985094", "code" : "F:maj7" },
    { "start" : "166.985094" , "finish" : "167.898253", "code" : "F:maj6" },
    { "start" : "167.898253" , "finish" : "169.593310", "code" : "C" },
    { "start" : "169.593310" , "finish" : "171.311587", "code" : "G" },
    { "start" : "171.311587" , "finish" : "173.041473", "code" : "F" },
    { "start" : "173.041473" , "finish" : "174.794580", "code" : "C" },
    { "start" : "174.794580" , "finish" : "176.582517", "code" : "C" },
    { "start" : "176.582517" , "finish" : "178.296758", "code" : "G" },
    { "start" : "178.296758" , "finish" : "179.579002", "code" : "A:min" },
    { "start" : "179.579002" , "finish" : "180.042290", "code" : "A:min/b7" },
    { "start" : "180.042290" , "finish" : "180.913038", "code" : "F:maj7" },
    { "start" : "180.913038" , "finish" : "181.725736", "code" : "F:maj6" },
    { "start" : "181.725736" , "finish" : "183.467233", "code" : "C" },
    { "start" : "183.467233" , "finish" : "185.220340", "code" : "G" },
    { "start" : "185.220340" , "finish" : "186.961836", "code" : "F" },
    { "start" : "186.961836" , "finish" : "188.645283", "code" : "C" },
    { "start" : "188.645283" , "finish" : "190.363560", "code" : "A:min" },
    { "start" : "190.363560" , "finish" : "192.151496", "code" : "E:min/b3" },
    { "start" : "192.151496" , "finish" : "193.869773", "code" : "F" },
    { "start" : "193.869773" , "finish" : "195.680929", "code" : "C" },
    { "start" : "195.680929" , "finish" : "197.410816", "code" : "C" },
    { "start" : "197.410816" , "finish" : "199.082653", "code" : "G" },
    { "start" : "199.082653" , "finish" : "200.847369", "code" : "F" },
    { "start" : "200.847369" , "finish" : "202.554036", "code" : "C" },
    { "start" : "202.554036" , "finish" : "204.272312", "code" : "A:min" },
    { "start" : "204.272312" , "finish" : "206.048639", "code" : "E:min/b3" },
    { "start" : "206.048639" , "finish" : "207.790136", "code" : "F" },
    { "start" : "207.790136" , "finish" : "209.531632", "code" : "C" },
    { "start" : "209.531632" , "finish" : "211.273129", "code" : "C" },
    { "start" : "211.273129" , "finish" : "213.014625", "code" : "G" },
    { "start" : "213.014625" , "finish" : "214.744512", "code" : "F" },
    { "start" : "214.744512" , "finish" : "216.497619", "code" : "C" },
    { "start" : "216.497619" , "finish" : "218.181065", "code" : "A:min" },
    { "start" : "218.181065" , "finish" : "219.969002", "code" : "E:min/b3" },
    { "start" : "219.969002" , "finish" : "221.733718", "code" : "F" },
    { "start" : "221.733718" , "finish" : "223.475215", "code" : "C" },
    { "start" : "223.475215" , "finish" : "225.193492", "code" : "C" },
    { "start" : "225.193492" , "finish" : "226.969818", "code" : "G" },
    { "start" : "226.969818" , "finish" : "228.711315", "code" : "F" },
    { "start" : "228.711315" , "finish" : "230.534081", "code" : "C" },
    { "start" : "230.534081" , "finish" : "232.380068", "code" : "F" },
    { "start" : "232.380068" , "finish" : "234.226054", "code" : "C" },
    { "start" : "234.226054" , "finish" : "235.154852", "code" : "G" },
    { "start" : "235.154852" , "finish" : "236.339070", "code" : "F" },
    { "start" : "236.339070" , "finish" : "241.007282", "code" : "C" },
    { "start" : "241.007282" , "finish" : "243.330612", "code" : "N" }
];
var line_container_width;
var duration;
let colors = ['red','blue','yellow','green'];
window.addEventListener('load', function () {
    duration = $('#duration');
    document.getElementById('start').addEventListener('click',start);
    renderMusicScore();
});

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
    line_container.css('height','60px');
    let width = line_container.width();

    for(i = 0; i < 3; i++) {
        let obj = data[i];
        let line = $('<div></div>');
        let start = obj.start;
        let finish = obj.finish;
        let code = obj.code;
        let width = ((finish-start)/6)*100;
        line.css('width',width + "%");
        line.css('height',"54px");
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
    duration.text(data[count-2].finish*1000);
    line_container_width = line_container.width();
    line_container.css('width', line_container_width + "px");
    count++;
}
function changeline() {
    setTimeout(changeline, (data[count-2].finish-data[count-2].start)*1000);
    duration.text((data[count-2].finish-data[count-2].start)*1000);
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
        let width = ((finish-start)/6)*100;

        line.css('width',width + "%");
        line.css('height',"54px");
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