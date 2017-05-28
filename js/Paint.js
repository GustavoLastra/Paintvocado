
//call to myPaintArea objects function to create the canvas
myPaintArea.start();
var $buttonSave = $('#buttonSave');
var $buttonRestore = $('#buttonRestore');
var $mirrorImage = $('#mirror');
var drawingSurfaceImageData;

function start() {

  var state;                              //indicates what is going to be made
  var $window = $(window);                //simplification of jquery selector
  var $buttonPencil = $('#buttonPencil');
  var $buttonDownload = $('btn-download');
  var $mirrorSaveButton = $('#mirrorSaveButton');
  var $canvas = $('#myCanvas');

  var click = false;                      //initial value of "click"

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
  $mirrorSaveButton.click(function(e){
    var dataURL = myPaintArea.canvas.toDataURL('image/png');
    $mirrorImage.src = dataURL;

    console.log("saviiiiing");
    console.log($mirrorImage.src);
  });

  $buttonSave.click(function(e){
    save();
  });

  $buttonRestore.click(function(e){
    restore();
  });

  $buttonDownload.click(function(e){
    var dataURL = $canvas.toDataURL('image/png');
    $buttonDownload.href = dataURL;
  });

  var pencil = {
    draw : function(xPos, yPos) {

     myPaintArea.context.beginPath();
     myPaintArea.context.fillStyle = "blue";
     myPaintArea.context.arc(xPos - $('#myCanvas').offset().left, yPos - $('#myCanvas').offset().top, $('input[type=range]').val(), 0, 2 * Math.PI);
     myPaintArea.context.fill();
     myPaintArea.context.closePath();

     console.log(" Bin am malen!!! ");
   }
  }
  pencil.draw();





  //function pencil () {


     /*function drawLineStart(startPosX,startPosY) {
       myPaintArea.context.moveTo(startPosX,startPosY);
       myPaintArea.context.lineTo(endPosX,endPosY);
       myPaintArea.context.stroke();

      myPaintArea.context.beginPath();
      myPaintArea.context.fillStyle = "blue";
      myPaintArea.context.arc(xPos - $('#myCanvas').offset().left, yPos - $('#myCanvas').offset().top, $('input[type=range]').val(), 0, 2 * Math.PI);
      myPaintArea.context.fill();
      myPaintArea.context.closePath();

      console.log(" Bin am line malen!!! ");


     } */
  //}


  /*                                                               function to print a rect filled with a color           */
  function fillRect (startPosX,startPosY,endPosX,endPosY,color){
    myPaintArea.context.fillStyle = color;
    myPaintArea.context.fillRect(startPosX,startPosY,endPosX,endPosY);
    myPaintArea.context.rect(20, 20, 150, 100);
  }
  fillRect(200,0,150,200,"blue");
  /*                                                                function to print a line              */
  function line(startPosX,startPosY,endPosX,endPosY){
    myPaintArea.context.moveTo(startPosX,startPosY);
    myPaintArea.context.lineTo(endPosX,endPosY);
    myPaintArea.context.stroke();
  }

  line(0,0,400,600);

  /*                                                               function  to print a circle             */

  function circle(posX,posY){
    myPaintArea.context.beginPath();
    myPaintArea.context.arc(posX,posY,40,0,2*Math.PI);
    myPaintArea.context.stroke();
  }
  circle(100,500);


  /*                                                             function to print a text               */

  function text(text,posX, posY){
    myPaintArea.context.font = "30px Arial";
    myPaintArea.context.fillText(text,posX, posY);
  }
  text("Hola Mari :D",10,50);
  /*                                                           function   Draw line with mouse             */

}

function restart() {
myPaintArea.clear();
}

function save() {
//myPaintArea.save;
//myPaintArea.context.fillStyle = 'green';
//myPaintArea.context.fillRect(10, 10, 100, 100);


drawingSurfaceImageData = myPaintArea.context.getImageData(0, 0,
                            myPaintArea.canvas.width,
                            myPaintArea.canvas.height);
console.log("I am saving");
}

function restore() {
//myPaintArea.restore; // restore to the default state
//myPaintArea.context.fillRect(150, 75, 100, 100);
myPaintArea.context.putImageData(drawingSurfaceImageData, 0, 0);

console.log("I am restoring");
}
