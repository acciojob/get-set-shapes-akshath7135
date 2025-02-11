class Rectangle {
    constructor(width, height) {
		if (width<0 || height<0) {
			throw new error("pls give me positive value ");
		}
        this._width = width;
        this._height = height;
    }
  
    get width() {
        return this._width;
    }
  
    get height() {
        return this._height;
    }
  
    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
  
    getPerimeter() {
        return 4 * this._width;
	}
}
	window.Rectangle = Rectangle;
window.Square = Square; 