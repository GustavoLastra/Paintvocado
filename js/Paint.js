var drawingSurfaceImageData;
var state;                              //indicates what is going to be made
var click = false;                      //initial value of "click"

myPaintArea.create(); //call to myPaintArea to create the canvas
//pencil.draw();
function reset() {
  myPaintArea.clear();
}

function save() {
  drawingSurfaceImageData = myPaintArea.context.getImageData(0, 0,
                              myPaintArea.canvas.width,
                              myPaintArea.canvas.height);
  console.log("I am saving");
}

function restore() {
  myPaintArea.context.putImageData(drawingSurfaceImageData, 0, 0);
  console.log("I am restoring");
}




  /*
  //                                                               function to print a rect filled with a color
  function fillRect (startPosX,startPosY,endPosX,endPosY,color){
    myPaintArea.context.fillStyle = color;
    myPaintArea.context.fillRect(startPosX,startPosY,endPosX,endPosY);
    myPaintArea.context.rect(20, 20, 150, 100);
  }
  fillRect(200,0,150,200,"blue");
  //                                                                function to print a line
  function line(startPosX,startPosY,endPosX,endPosY){
    myPaintArea.context.moveTo(startPosX,startPosY);
    myPaintArea.context.lineTo(endPosX,endPosY);
    myPaintArea.context.stroke();
  }

  line(0,0,400,600);

  //                                                              function  to print a circle

  function circle(posX,posY){
    myPaintArea.context.beginPath();
    myPaintArea.context.arc(posX,posY,40,0,2*Math.PI);
    myPaintArea.context.stroke();
  }
  circle(100,500);


  //                                                             function to print a text

  function text(text,posX, posY){
    myPaintArea.context.font = "30px Arial";
    myPaintArea.context.fillText(text,posX, posY);
  }
  text("Hola Mari :D",10,50);*/
  /*                                                           function   Draw line with mouse             */
