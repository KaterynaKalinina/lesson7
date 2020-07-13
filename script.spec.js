describe('function', () => {

    describe('sum', () => {
        it('should sum two values', () => {
            expect(sum(5, 2)).to.equal(7);
        });
    });

    describe('Object length', () => {
        it('should calculate the object length', () => {
            expect(objectLength(anotherCar)).to.equal(6);
        });
    });


    describe('copy', () => {
        it('should create a new object', () => {
            const obj = {
                a: 2,
                b: 3,
            };
            expect(copy(obj)).not.equal(obj);
        });

        it('should create a copy of object', () => {
            const obj = {
                a: 2,
                b: 3,
            };
            expect(copy(obj)).to.deep.equal(obj);
        });
    });

    describe('deep copy', () => {
   
    it('should create a deep copy obj', () => {
        const obj = {
            a: {
                a: 2,
            },
            b: 3,
        };
        const objectCopy = deepCopy(obj);

        expect(objectCopy.a).not.equal(obj.a);
    });

    it('should create a deep copy of object', () => {
        const obj = {
            a: {
                a: 2,
            },
            b: 3,
        };
        expect(copy(obj)).to.deep.equal(obj);
    });
}); 


});

