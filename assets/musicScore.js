/**
 * Created by chou6 on 2018-06-29.
 */
window.addEventListener('load', function () {


    renderMusicScore();
});
function renderMusicScore() {
    let data = [{ "start" : "0.000000", "finish" : "0.175157", "code" : "N" },
        { "start" : "0.175157", "finish" : "1.852358", "code" : "C" },
        { "start" : "1.852358", "finish" : "3.454535", "code" : "G" },
        { "start" : "3.454535", "finish" : "4.720022", "code" : "A:min" },
        { "start" : "4.720022", "finish" : "5.126371", "code" : "A:min/b7" }];
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
    console.log(data);
    data[length-1].start = name;
    let i, starve;
    let VF = Vex.Flow;
    let NUM_OF_STAVE = 100;
// Create an SVG renderer and attach it to the DIV element named "boo".
    let div = document.getElementById("boo");
    let renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
// Configure the rendering context.
    renderer.resize(1000, 500);
    let context = renderer.getContext();
    context.setFont("Arial", 5, "").setBackgroundFillStyle("#eed");
    let notes = [
        // A quarter-note C.
        new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
        // A quarter-note D.
        new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
        // A quarter-note rest. Note that the key (b/4) specifies the vertical
        // position of the rest.
        new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "qr" }),
        // A C-Major chord.
        new VF.StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" })
    ];
    let voice = new VF.Voice({num_beats: 4,  beat_value: 4});
    for(i=0; i<NUM_OF_STAVE; i++){

    }
// Create a stave of width 400 at position 10, 40 on the canvas.
    let stave = new VF.Stave(10, 50, 500);
    let stave2 = new VF.Stave(10, 100, 500);

// Add a clef and time signature.
    stave.addClef("treble").addTimeSignature("4/4");
    stave2.addClef("treble").addTimeSignature("4/4");
// Connect it to the rendering context and draw!
    stave.setContext(context).draw();
    stave2.setContext(context).draw();
    voice.addTickables(notes);
    let formatter = new VF.Formatter().joinVoices([voice]).format([voice], 100);
    voice.draw(context, stave2);
}

