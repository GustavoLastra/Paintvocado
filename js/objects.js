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
    myPaintArea.context.fillRect(xPos- $('#myCanvas').offset().left,yPos- $('#myCanvas').offset().top,$('input[id=width]').val(), $('input[id=height]').val());
    myPaintArea.context.lineWidth=$('input[type=range]').val();
    console.log($('input[type=range]').val());
    myPaintArea.context.strokeStyle=$('input[id=strichfarbe]').val();
    myPaintArea.context.rect(xPos- $('#myCanvas').offset().left,yPos- $('#myCanvas').offset().top,$('input[id=width]').val(), $('input[id=height]').val());
    myPaintArea.context.stroke();
    myPaintArea.context.closePath();
   console.log(" Bin am rectangles malen!!! ");
 }
}

var circle = {
  draw : function(xPos, yPos) {
    myPaintArea.context.beginPath();
    myPaintArea.context.arc(xPos- $('#myCanvas').offset().left, yPos- $('#myCanvas').offset().top, 75, 50, 0, 2 * Math.PI, false);
    myPaintArea.context.fillStyle = $('input[id=fuelfarbe]').val();
    myPaintArea.context.fill();
    myPaintArea.context.lineWidth=$('input[type=range]').val();
    myPaintArea.context.strokeStyle = $('input[id=strichfarbe]').val();
    myPaintArea.context.stroke();
   console.log(" Bin am circles malen!!! ");
 }
}

var line = {
  x1: "",
  y1: "",
  x2: "",
  y2: "",
  draw : function() {
    myPaintArea.context.beginPath();

    myPaintArea.context.moveTo(this.x1, this.y1);
    myPaintArea.context.lineTo(this.x2, this.y2);
    myPaintArea.context.strokeStyle = $('input[id=strichfarbe]').val();
    myPaintArea.context.lineWidth=$('input[type=range]').val();
    myPaintArea.context.stroke();
  console.log(" Bin am lines malen!!! ");
  }
}
