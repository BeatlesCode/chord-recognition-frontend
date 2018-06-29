/**
 * Created by chou6 on 2018-06-29.
 */
window.addEventListener('load', function () {
    VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
    var div = document.getElementById("boo");
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
    renderer.resize(1000, 2000);
    var context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
    var stave = new VF.Stave(10, 40, 2000);
    var stave2 = new VF.Stave(10, 80, 400);
// Add a clef and time signature.
    stave.addClef("treble").addTimeSignature("4/4");
    stave2.addClef("treble").addTimeSignature("4/4");
// Connect it to the rendering context and draw!
    stave.setContext(context).draw();
    stave2.setContext(context).draw();
});

