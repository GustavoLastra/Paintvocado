const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;
const CANVAS_FRAME = 25;
var myPaintArea = {
    canvas : document.getElementById('myCanvas'),
    create : function() {
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;
        this.context = this.canvas.getContext("2d");

      },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    save : function() {
        this.context.save();
    },

    restore : function() {
        this.context.restore();
    }
}
