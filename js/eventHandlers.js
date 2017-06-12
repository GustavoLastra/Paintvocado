var $buttonStart = $('#buttonStart');
var $buttonReset = $('#buttonReset');
var $buttonSave = $('#buttonSave');
var $buttonRestore = $('#buttonRestore');
var $window = $(window);                //simplification of jquery selector
var $buttonPencil = $('#buttonPencil');
var $buttonRectangle = $('#buttonRectangle');
var $buttonCircle = $('#buttonCircle');
var $buttonLine = $('#buttonLine');
var $buttonAvocado = $('#buttonAvocado');
var $buttonDownload = $('#buttonDownload');
var $fileUpload = $('#fileUpload');
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
});

$canvas.mouseup(function(e) {
  if(click === true){
    if (state== "circle"){
      circle.draw(e.pageX, e.pageY);
    }
  }
});

$canvas.mouseup(function(e) {
  if(click === true){
    if (state== "avocado"){
      avocado.draw(e.pageX, e.pageY);
    }
  }
});

myPaintArea.canvas.onmousedown = function (e) {
  if(state=="line"){
    line.x1 = e.pageX - $('#myCanvas').offset().left;
    line.y1 = e.pageY - $('#myCanvas').offset().top;
  }
};

myPaintArea.canvas.onmouseup = function (e) {
    if (state=="line"){
      line.x2 = e.pageX- $('#myCanvas').offset().left;
      line.y2 = e.pageY- $('#myCanvas').offset().top;
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

$buttonAvocado.click(function(e){
    state = "avocado";
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

$buttonDownload.click(function() {
  this.href = $('#myCanvas')[0].toDataURL();
  this.download = 'Paintvocado.png';
});

var imageLoader = document.getElementById('fileUpload');
    imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {
  console.log("am hochladen!");
  var reader = new FileReader();
  reader.onload = function(event){
      var img = new Image();

      img.onload = function(){
          myPaintArea.canvas.width = img.width;
          myPaintArea.canvas.height = img.height;
          myPaintArea.context.drawImage(img,0,0);
      }
      img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);
}
