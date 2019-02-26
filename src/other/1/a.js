//

class Rectangle {
	constructor(w, h) {
		console.log('Rectangle::constructor; w ', w, ' h ', h);
		this.w = w;
		this.h = h;
	}
}
/*
*  Write code that adds an 'area' method to the Rectangle class' prototype
*/

Rectangle.prototype.area = function area() {
	console.log('this.w ', this.w, ' this.h ', this.h);
	return this.w * this.h;
};

/*
* Create a Square class that inherits from Rectangle and implement its class constructor
*/
class Square extends Rectangle {
	constructor(w) {
		console.log('Square::constructor; w ', w);
		super(w, w);
	}
}

// Square.prototype.area = function() {
// 	return this.w * this.w;
// };

console.log(
	'JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) ',
	JSON.stringify(Object.getOwnPropertyNames(Square.prototype))
);
const rec = new Rectangle(3, 4);
const sqr = new Square(3);

console.log(rec.area());
console.log(sqr.area());
