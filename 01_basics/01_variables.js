const empID = 1254241; // this is called constant we can't change the value of it.
let empEmail = "Sanjoy@google.com"; // this is variable we cant change the value outside any Scope;
var empName = "Sanjoy das" // this is also variable we can easily change the value of it. 
empAdd= "225, chakdah"; // this is also variable and its a var. not recomended

let empCity; 

//prefer not to use var.because of the issue of block scope and functional scope.

//console.log(typeof(empAdd));
empEmail = "Rai@google.com";
empName = "Rai Das";
empAdd = "4, no central park";

// {
//      ---> this is scope 
// }


console.table([empID, empEmail, empName , empAdd, empCity ]);

