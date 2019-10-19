/**
 * Examples
 */
function FindSolution (target){
    function find(start, history){
        if (start == target)
        return history;
        else if ( start > target)
        return null;
        else return find(start + 5, "(" + history + " + 5) ") ||
        find ( start * 3, "(" + history + " * 3) ");
    }
    return find(1, "1");
}
console.log(FindSolution(24));

/**
 * 
 * Question 1
 * 
 */
var num1 = 15   //Number(prompt("Input a number",""));
var num2 = 4    //Number(prompt("Input another number",""));
console.log(Math.min(num1, num2));
console.log('---------------------------------');
/**
 * 
 * Question 2
 * 
 */
function isEven(number){

    return (function isEvenImpl(number){
        if (number === 0) return true
        else if (number === 1) return false
        else return isEvenImpl(number - 2);
    })(Math.abs(number));
    
}
console.log(isEven(-4));
console.log('---------------------------------');
/**
 * 
 * Question 3
 * 
 */
var testBean = "BreadCrumBs";
// A test variable for the code to run on
function countBs(){     // The count function to count the "B"
    var numB = 0;       // This is to save the number of times we see a letter B 
    for (let i=0; i<testBean.length; i++){  // Looping thru the string 'testBean'
        if (testBean.charAt(i) == 'B'){
            numB += 1;      // When it sees a character 'B', it counts a number and adds to the variable.
        }
    }
    return numB;
}
countBs();



