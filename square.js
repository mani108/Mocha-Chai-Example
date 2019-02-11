class Square{
    constructor(side){
        this.side = side;
    }

    // getter for property perimeter
    get perimeter(){
        return 4 * this.side;
    }

    // method returns area of square
    area(){
        return this.side * this.side;
    }
}

module.exports = Square;