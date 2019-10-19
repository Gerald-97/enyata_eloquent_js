/**
 * Question 1
 */
var hash = '';
for (let i=0; i<8; i++){
    hash +="#";
    console.log(hash);
};
console.log('--------------------------------------');
/**
 * Question 2
 */
for (let a=1; a<=100; a++){
    option = '';
    if ( a % 3 == 0 && a % 5 == 0){
        // console.log("FizzBuzz")
        option += 'FizzBuzz';
    }
    else if ( a % 3 == 0){
        option += 'Fizz';
        // console.log("Fizz");
    }else if( a % 5 == 0){
        option += 'Buzz';
        // console.log("Buzz");
    }
    console.log(option || a)
};
console.log('--------------------------------------');
/**
 * Question 3
 */
var chessSize = 8;
var chessString = '';
for ( i=0; i<=chessSize; i++){
    for (j=0; j<chessSize;j++){
        if ((i + j)% 2 ==0){
            chessString += ' '
        }else chessString += '#';
    }
    chessString += '\n';
}
console.log(chessString)