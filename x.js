
function checkPrime (x){
    // let arrayOfPrimes = [];
    let i = 1;
    let counter = 0;
    while (i < x){
        if (x%i == 0){
            counter += 1;
            i += 1;
        } else {
            i += 1;
        };
        // console.log(counter);
        // console.log(i);
        // console.log(x);
    };
    return counter;
}

console.log(checkPrime(7));


