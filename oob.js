class FourSideShape {
    constructor(side1, side2, side3, side4) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
      this.side4 = side4;
    }
  
    perimeter() {
      return this.side1 + this.side2 + this.side3 + this.side4;
    }
  }
  
  class Triangle extends FourSideShape {
    constructor(side1, side2, side3) {
        super(side1, side2, side3,0);
      }
  
    area() {
    
      return 0.5 * this.side1 * this.side2;
    }
  
    printTriangle() {
        let n = this.side2;

        let stars = '*';
        
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                process.stdout.write(stars);
            }
            console.log();
        }
    }
  }

  const triangle = new Triangle(3, 4,6); 
  console.log("Perimeter of the triangle:", triangle.perimeter());
  console.log("Area of the triangle:", triangle.area());
  triangle.printTriangle();
  