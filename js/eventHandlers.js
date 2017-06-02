var $buttonStart = $('#buttonStart');
var $buttonReset = $('#buttonReset');
var $buttonSave = $('#buttonSave');
var $buttonRestore = $('#buttonRestore');
var $window = $(window);                //simplification of jquery selector
var $buttonPencil = $('#buttonPencil');
var $buttonRectangle = $('#buttonRectangle');
var $buttonCircle = $('#buttonCircle');
var $buttonLine = $('#buttonLine');
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

$canvas.mouseup(function(e) {
  if(click === true){
    if (state== "rectangle"){
      rectangle.draw(e.pageX, e.pageY);
    }
  }
        //alert(e.pageX+ ' , ' + e.pageY);
});

$canvas.mouseup(function(e) {
  if(click === true){
    if (state== "circle"){
      circle.draw(e.pageX, e.pageY);
    }
  }
        //alert(e.pageX+ ' , ' + e.pageY);
});

myPaintArea.canvas.onmousedown = function (e) {

  if(state=="line"){
    line.x1 = e.pageX;
    line.y1 = e.pageY;
  }
};

myPaintArea.canvas.onmouseup = function (e) {
    if (state=="line"){
      line.x2 = e.pageX;
      line.y2 = e.pageY;
      //line.getEndPoints(e.pageX, e.pageY);
      line.draw();

    }
};


$buttonPencil.click(function(e){
    state = "pencil";
});

$buttonRectangle.click(function(e){
    state = "rectangle";
});

$buttonCircle.click(function(e){
    state = "circle";
});

$buttonLine.click(function(e){
    state = "line";
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
