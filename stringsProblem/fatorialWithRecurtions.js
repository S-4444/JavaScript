let array= [1,2,5,34,9];
function factorial(element){
    if(element ===0) return 1; 
    else return element*factorial(element-1);
};

let data = array.map(element=>{
    return `fatorial of ${element} is ${factorial(element)}`;
})

console.log(data);