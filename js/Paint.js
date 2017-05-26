
//call to myPaintArea objects function to create the canvas
myPaintArea.start();

function startPaint() {

  /*                                                               function to print a rect filled with a color           */
  function fillRect (startPosX,startPosY,endPosX,endPosY,color){
    myPaintArea.context.fillStyle = color;
    myPaintArea.context.fillRect(startPosX,startPosY,endPosX,endPosY);
    myPaintArea.context.rect(20, 20, 150, 100);
  }
  fillRect(200,0,150,200,"blue");
  /*                                                                function to print a line              */
  function line(startPosX,startPosY,endPosX,endPosY,color){
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

  function draw(xPos, yPos) {
   myPaintArea.context.beginPath();
   myPaintArea.context.fillStyle = "blue";
   myPaintArea.context.arc(xPos - $('#myCanvas').offset().left, yPos - $('#myCanvas').offset().top, $('input[type=range]').val(), 0, 2 * Math.PI);
   myPaintArea.context.fill();
   myPaintArea.context.closePath();

   console.log(" Bin am malen!!! ");
 }

  click = false;

  $(window).mousedown(function(){
    click = true;
  });

  $(window).mouseup(function(){
    click = false;
  });

  $('#myCanvas').mousedown(function(e){
    draw(e.pageX, e.pageY);
  });

  $('#myCanvas').mouseup(function(e){
    draw(e.pageX, e.pageY);
  });

  $('#myCanvas').mousemove(function(e){
    if(click === true){
      draw(e.pageX, e.pageY);
    }
  });
}

function updatePaintArea() {
myPaintArea.clear();
}
