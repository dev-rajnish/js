let checkNum = 34;


function showPrime(n) {
    nextprime: for (let i = 2; i < n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j / i == 0) continue nextprime;
        }

        console.log(i);
    }
}

showPrime(checkNum)