
//myPaintArea.context
myPaintArea.start();


function startPaint() {

  //myPaintArea.canvas.addEventListener('click', mouseClicked, false);
  //myPaintArea.canvas.addEventListener('mousemove', mouseMoved, false);
  //myPaintArea.canvas.addEventListener('mousemove', mouseMoved, false);

  /*                            function               */
  function fillRect (startPosX,startPosY,endPosX,endPosY,color){
    myPaintArea.context.fillStyle = color;
    myPaintArea.context.fillRect(startPosX,startPosY,endPosX,endPosY);
    myPaintArea.context.rect(20, 20, 150, 100);
  }
  fillRect(200,0,150,200,"blue");
  /*                            function               */
  function line(startPosX,startPosY,endPosX,endPosY,color){
    myPaintArea.context.moveTo(startPosX,startPosY);
    myPaintArea.context.lineTo(endPosX,endPosY);
    myPaintArea.context.stroke();
  }

  line(0,0,400,600);

  /*                            function               */

  myPaintArea.context.beginPath();
  myPaintArea.context.arc(100,500,40,0,2*Math.PI);
  myPaintArea.context.stroke();

  /*                            function               */
  myPaintArea.context.font = "30px Arial";
  myPaintArea.context.fillText("Hola Mari :D",10,50);

  /*                            function   Draw line with mouse             */

  function draw(xPos, yPos) {
   myPaintArea.context.beginPath();
   myPaintArea.context.fillStyle = "blue";
   myPaintArea.context.arc(xPos - $('#myCanvas').offset().left, yPos - $('#myCanvas').offset().top, $('input[type=range]').val(), 0, 2 * Math.PI);
   myPaintArea.context.fill();
   myPaintArea.context.closePath();

   console.log(" heeeeeey tuuuuuuuuuuu, ");
  }
  /*function draw(xPos, yPos){
    canvas.beginPath();
    canvas.fillStyle = $('input[type=color]').val();
    canvas.arc(xPos - $('canvas').offset().left, yPos - $('canvas').offset().top, $('input[type=range]').val(), 0, 2 * Math.PI);
    canvas.fill();
    canvas.closePath();
  }*/





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




  /*function mouseClicked(e) {
    var x= e.offsetX;
    var y= e.offsetY;
    draw(e.pageX, e.pageY);
    console.log(x+ " heeeeeey, "+ y);
    draw(x,y);
  }

  function mouseup(e) {
    var x= e.offsetX;
    var y= e.offsetY;
    draw(e.pageX, e.pageY);
    console.log(x+ " heeeeeey, "+ y);
    draw(x,y);
  }




  $('canvas').mousemove(function(e){
   if(click === true){
     draw(e.pageX, e.pageY);
   }
 });*/



/*  $('canvas').mousedown(function(e){
   draw(e.pageX, e.pageY);
   console.log("mousedown");
  });

  $('canvas').mouseup(function(e){
   draw(e.pageX, e.pageY);
   console.log("mouseup");
 });*/

 /*                            function               */



  /*function mouseMoved(e) {
      mouseX = e.offsetX;
      mouseY = e.offsetY;
      console.log(x+ " , "+ y);

  }*/

}




function updatePaintArea() {
myPaintArea.clear();


}




/*$('myCanvas').mousedown(function(e){
 draw(e.pageX, e.pageY);
 console.log("mousedown");
});

$('myCanvas').mouseup(function(e){
 draw(e.pageX, e.pageY);
 console.log("mouseup");
});

$('myCanvas').mousemove(function(e){
 if(click === true){
   draw(e.pageX, e.pageY);
   console.log("mousemove");
 }
});*/
