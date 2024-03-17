// finding factor of array of elements
let elementString = "22, 45,50,11,4";
const arrayElement = elementString.split(",").map(Number);
console.log("value ", arrayElement);

arrayElement.map(elemnt =>{
    const data = [];
    for(let i=1 ; i<= elemnt ; i++){
            if (elemnt%i ===0) data.push(i);
        }
    console.log(`factors of the ${elemnt} is ${data}`);
})
