/**
 * 
 * Question 1
 * 
 */
function numberRange(a, b){
    var rangeArr = [];
    for ( let i=a; i<=b; i++){
        rangeArr.push(i);
    }
    return rangeArr;
}
var test = numberRange(1,10);
function rangeSum(arr){
    let sum = 0;
    for (let num of arr){
        sum += num;
    }
    return sum;
}
console.log(rangeSum(test))
function numberStepRange(a, b, c){
    var rangeArr = [];
    if (c < 0){
        for ( let i=a; i>=b; i+=c){
            rangeArr.push(i);
        }
    }else{
        for ( let i=a; i<=b; i+=c){
            rangeArr.push(i);
        }
    }
    return rangeArr;
}
console.log(numberStepRange(10, 1, -2));
console.log('---------------------------------');
/**
 * 
 * Question 3
 * 
 */
var testArray = [1, 2, 3, 4];
testArray.reverse();
function arrToList (arr){
    let testObj = null;
    for (let item of arr){
        testObj = {value: item, rest:testObj};
    }
    return testObj;
}
console.log(arrToList(testArray));