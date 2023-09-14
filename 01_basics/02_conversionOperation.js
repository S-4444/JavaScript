let score = 33

console.log(typeof score);
console.log(typeof(score));

let score1 = "121"
// want to convert string to number we will use Number, similarly String , Boolean. Capital letter

let numberScore = Number(score);
console.log(typeof numberScore);

let a = "43asb";
let numberA = Number(a);
console.log(typeof numberA); // it will return number but actually its not convert to number
                             // it is NaN(Not a number)
let b = null 
let numberB = Number(b) // it will convert to 0      

let c = undefined;
let numberC = Number(c) // it will convert to undefind

let d = true;
let numberd = Number(d) // it will convert to 1
//anything to number
// "33" => 33;
// "33abc" => NaN; but type number
//  true => 1
/// null => 0; undefined => undefined

let e = 1;
let booleanE = Boolean(e)
console.log("booleanE", booleanE);
console.log(typeof booleanE);

// anything to boolean
// 1 => true , 0 => false
// "" => false, "Sanjoy"=> true

