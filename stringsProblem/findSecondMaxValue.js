let string = "12 34 77 87 45 56 68 23 234";
let sortedArray = string.split(' ').map(Number).sort((a, b)=> { return a - b });
console.log("second duplicate values are :", sortedArray[sortedArray.length-2]);