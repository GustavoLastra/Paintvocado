var $buttonStart = $('#buttonStart');
var $buttonReset = $('#buttonReset');
var $buttonSave = $('#buttonSave');
var $buttonRestore = $('#buttonRestore');
var $window = $(window);                //simplification of jquery selector
var $buttonPencil = $('#buttonPencil');
var $buttonDownload = $('btn-download');
var $canvas = $('#myCanvas');

/*                                              Event handlers                 */
$window.mousedown(function(){
  click = true;
});

$window.mouseup(function(){
  click = false;
});

$canvas.mousedown(function(e){
  console.log("state is " + state);
  if (state== "pencil"){
    pencil.draw(e.pageX, e.pageY);
  }
});

$canvas.mouseup(function(e){
  if (state== "pencil"){
    pencil.draw(e.pageX, e.pageY);
  }
});

$canvas.mousemove(function(e){
  if(click === true){
    if (state== "pencil"){
      pencil.draw(e.pageX, e.pageY);
    }
  }
});

$buttonPencil.click(function(e){
    state = "pencil";
});

$buttonSave.click(function(e){
  save();
});

$buttonRestore.click(function(e){
  restore();
});

$buttonStart.click(function(e){
  start();
});

$buttonReset.click(function(e){
  reset();
});

$buttonDownload.click(function(e){
  var dataURL = $canvas.toDataURL('image/png');
  $buttonDownload.href = dataURL;
});
