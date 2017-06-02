/*jslint browser: true */
/*global G_vmlCanvasManager */
//myPaintArea.context
//myPaintArea.canvas

var line = {

   x1: "",
   y1: "",
   x2: "",
   y2: "",
   isDown: false, //flag we use to keep track


  draw : function() {
    myPaintArea.context.beginPath();
    myPaintArea.context.moveTo(this.x1, this.y1);
    myPaintArea.context.lineTo(this.x2, this.y2);
    myPaintArea.context.stroke();

  }
}
