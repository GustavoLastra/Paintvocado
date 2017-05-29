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
