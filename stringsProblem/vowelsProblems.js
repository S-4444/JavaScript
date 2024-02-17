let vowel = "I am Sanjoy Das"
// finding is there any vowels or not 
// vowel = vowel.toLowerCase();
// let arrayString = [...vowel];
// arrayString.map(element=>{
//    if (element=='a' || element=='e' ||element=='i' || element=='o' ||element=='u' ){
//        return console.log("given string has vowel");
    
//     }
//     else console.log("not viewl is present inside the strings  ");

// })

//finding how much voewl is there 
let vowelArray = ['a','e','i','o','u'];
var count = 0;
for(let word of vowel.toLowerCase()){
    if(vowelArray.includes(word)) count++;
    
}
console.log(`volwel is ${count}`);



