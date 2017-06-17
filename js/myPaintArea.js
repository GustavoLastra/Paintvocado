
/**
 * @fileoverview This is a paint tool. You can create lines, circles, rectangles,
 * and avocados. You can also draw, save your last work and then restore it.
 * There is also the possibility to upload a picture.
 * @author Gustavo Lastra Colorado, Jessica Hempel and María Inés Aceña
 * @version 3.1.0
 */

/**
  * Holds the value of the width from the canvas element
  * @const width
  */

const CANVAS_WIDTH = 350;

/** Holds the value of the height from the canvas element
  * @const height
  */

const CANVAS_HEIGHT = 350;

/** Holds the frame value of the canvas element
  * @const frame
  */

const CANVAS_FRAME = 25;

/**
 * In this variable are declared the characteristic of the canvas
 * The functions that are store in the variable myPaintArea had been declared as attributes.
 */

var myPaintArea = {

/**
 * Searchs for an element by his id
 * @name document
 * @method getElementById
 * @param {string} myCanvas The name/id of the canvas element
 */

  canvas : document.getElementById('myCanvas'),

/**
  * Creates the canvas with the constant values and sets the context
  * @function create
  * @property width {number} Sets the width of the canvas element
  * @property height {number} Sets the height of the canvas element
  * @property context {string} Sets the context of the canvas element
  */

  create : function() {
      this.canvas.width = CANVAS_WIDTH;
      this.canvas.height = CANVAS_HEIGHT;
      this.context = this.canvas.getContext("2d");
    },

/**
 * Clears the canvas area
 * @function clear
 * @method clearRect
 * @param {number} x The x position of the canvas
 * @param {number} y the y position of the canvas
 * @param {number} width the width of the canvas
 * @param {number} height the height of the canvas
 */

  clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

/**
 * Saves the last painting
 * @function save
 */
  save : function() {
      this.context.save();
  },

/**
  * Restores the save painting
  * @function restore
  */

  restore : function() {
      this.context.restore();
  }
}
