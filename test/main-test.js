describe('lcd-digits', function () {
    describe('Integration Testing', function() {

        it('should print correct text', function() {
            var num = 100;
            var text = thousands_separators(num);

            var expectText = "100";

            expect(text).toEqual(expectText);
        });

    });

    describe('Integration Testing', function() {

        it('should print correct text', function() {
            var num = 100;
            var numArray = buildNumArray(num);

            var expectText = ["1","0","0"];

            expect(numArray).toEqual(expectText);
        });

    });

    describe('Integration Testing', function() {

        it('should print correct text', function() {

            var numArray = ["1","0","0"];
            var apartNum = buildApartNum(numArray);

            var expectText = {Front:["1","0","0"],Behind:[]};

            expect(apartNum).toEqual(expectText);
        });

    });

    describe('Integration Testing', function() {

        it('should print correct text', function() {

            var apartNum = {Front:["1","0","0"],Behind:[]};
            var accountNum = buildAccountNum(apartNum);

            var expectText = {Front:["1","0","0"],Behind:[]};

            expect(accountNum).toEqual(expectText);
        });

    });
});
