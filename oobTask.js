class Shape {
    constructor() {}
    area(height, width) {
        console.log("Area of shape is: ", Number(height * width));
    }
    perimeter(height, width) {
        console.log("Perimeter of shape is: ", Number(height + width + height + width));
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    print_rectangle() {
        for (let i = 0; i < this.height; i++) {
            console.log(" *".repeat(this.width));
        }
    }
}

class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    print_square() {
        for (let i = 0; i < this.height; i++) {
            console.log(" *".repeat(this.height));
        }
    }
}

var rect = new Rectangle(5, 10);
rect.print_rectangle();
rect.area(5, 10);
rect.perimeter(5, 10);

var square = new Square(6);
square.print_square();
square.area(6, 6);
square.perimeter(6, 6);
