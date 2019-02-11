let chai = require('chai');
chai.should();

let Square = require('./square.js');

describe('Square',()=>{
    let square;
    beforeEach(() => {
        // Create a new Sqaure Object beforeevery test
        square = new Square(20);
    });
    it('returns the circumference',() => {
        square.perimeter.should.equal(80);
    });

    it('returns the area',()=>{
        square.area().should.equal(400);
    });
});