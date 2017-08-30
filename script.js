//test that files are properly connected
console.log('sourced')

const MOVES = 
["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", 
 "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];
function danceConvert(pin){
    //take each digit and split them into separate items 
    //in an array called pinArray
    var pinArray = ("" + pin).split("");

    //test the array function 
    console.log('pinArray ->', pinArray)
//convert each pinArray item into an integer
    for (var i = 0; i < pinArray.length; i++);
    parseInt(pinArray[i]);
//store each integer into a new array called arrayInt
    var arrayInt = [];
    arrayInt.push[i];
    console.log ('arrayInt ->', arrayInt);
//add the integer to its index number from pinArray, 
//store this sum in a variable called pinSum

//create an empty array called newDancePin

//if the pin contains NaN, return "Invalid Input"

//else if the variable pinSum is larger than the last index number 
//of the MOVES array, push the item at index 0 to the newDancePin array
// then move MOVES[0] to the end of the MOVES array

//else, match the value of the variable pinSum to the corresponding 
//index number of the MOVES array and push that value to the end of 
//the newDancePin array

//return newDancePin

}