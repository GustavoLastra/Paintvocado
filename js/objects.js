var pencil = {

  draw : function(xPos, yPos) {
   myPaintArea.context.beginPath();
   myPaintArea.context.fillStyle = $('input[type=color]').val();
   myPaintArea.context.arc(xPos - $('#myCanvas').offset().left, yPos - $('#myCanvas').offset().top, $('input[type=range]').val(), 0, 2 * Math.PI);
   myPaintArea.context.fill();
   myPaintArea.context.closePath();
   console.log(" Bin am malen!!! ");
 }

}


var rectangle = {

  draw : function(xPos, yPos) {
    myPaintArea.context.beginPath();
    myPaintArea.context.fillStyle = $('input[id=fuelfarbe]').val();
    myPaintArea.context.fillRect(xPos,yPos,$('input[id=width]').val(), $('input[id=height]').val());
    myPaintArea.context.lineWidth=$('input[type=range]').val();
    console.log($('input[type=range]').val());
    myPaintArea.context.strokeStyle=$('input[id=strichfarbe]').val();
    myPaintArea.context.rect(xPos,yPos,$('input[id=width]').val(), $('input[id=height]').val());
    myPaintArea.context.stroke();
    myPaintArea.context.closePath();

   console.log(" Bin am rectangles malen!!! ");
 }
}

var circle = {

  draw : function(xPos, yPos) {
    myPaintArea.context.beginPath();
    myPaintArea.context.arc(xPos, yPos, 75, 50, 0, 2 * Math.PI, false);

    myPaintArea.context.fillStyle = $('input[id=fuelfarbe]').val();
    myPaintArea.context.fill();
    myPaintArea.context.lineWidth=$('input[type=range]').val();
    myPaintArea.context.strokeStyle = $('input[id=strichfarbe]').val();

    myPaintArea.context.stroke();




   console.log(" Bin am circles malen!!! ");
 }
}
