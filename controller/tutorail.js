class tutorail{
    getServerTime() {
        var time = {
            TIME : new Date()
        }
        return time;
    }

    sumAB(req) {
        var json = req;
        var a = json.numberA;
        var b = json.numberB;

        if(a == null || b == null) {
            return 'a or b is null';
        }
        else if (typeof(a) != 'number' || typeof(b) != 'number') {
            return 'a or b is not number';
        }
        else {
            var sum = a + b;
            return 'a + b : ' + sum;
        }
    }

    randomNumber(){
        // returns a random integer from 0 to N
        let N = 101; 
        let randomNumber = Math.floor(Math.random() * N);
        console.log('randomNumber : ' + randomNumber);
        return randomNumber
    }
}
module.exports = tutorail;