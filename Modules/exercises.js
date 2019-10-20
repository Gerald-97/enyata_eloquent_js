/**
 * 
 * Example 1
 * 
 */

var dayOfWeek = function(){
    let weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return function dayName (day){
        return weekDay[day];
    }
}();
console.log(dayOfWeek(0));