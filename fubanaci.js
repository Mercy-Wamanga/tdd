//Team
// -Pauline Nalwanga
//- Mercy Wamanga

function findNthFibonacci(n) {
    //if index is less the 0 , function to return 0
    if (n < 0) {
        return 0;
    }
    //if index =0 or 1, first and second number to be 1
    if (n === 0 || n === 1) {
        return 1;
    }

    //for any other value in the sequence of fibonacci
    return findNthFibonacci(n - 1) + findNthFibonacci(n - 2);

}


module.exports = findNthFibonacci;
