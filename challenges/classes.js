
// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboidmaker{
    constructor(length, width, height){
        this.long = length;
        this.width = width;
        this.height = height;
        }
        volume() {
            return this.long * this.width * this.height;
        }
        surfaceArea() {
            return 2 * (this.long * this.width + this.long * this.height + this.width * this.height)
        }
}

const cuboid = new Cuboidmaker(4, 5, 5);





// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
