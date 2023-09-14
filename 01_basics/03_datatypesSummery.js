// premitive
// 7 types > string , number, boolean , null , undefined, bigInt, symbol

//Non premitives or reference type
// Array , Objects , Functions

// memory

// 1. stack 2. heap  
/*(all types of primitive data type state in stack)
(all types of non premitive data stay in heap but refarence stay in stack)
*/

let Newname = "sanjoy";
let anothername = Newname; //anothername takes the copy of name 
console.log(anothername)
anothername = "rai"

console.log(anothername) // change to rai
console.log(Newname); // no chnage because it give the copy and premitive cant change

// non premitives
let userOne ={
    name : "Sanjoy",
    email: "sanjoy@email"
}

let usertwo = userOne; // takes the actuall value not copy
usertwo.name = "rai"

console.log(userOne.name); // change to rai becasue not giving the copy gives the actually value because non premitive
console.log(usertwo.name); // change to rai  because takes the actuall value not copy

