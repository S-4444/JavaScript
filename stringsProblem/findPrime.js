let string = '23 11 45 67 22 11 1';
let array = string.split(' ').map(Number).map(element=>{
    if(element<=1){
        return `${element} is not prime`;
    }
    else {
        for(let i=2; i<element; i++){
            if (element % i==0) return `${element} is not prime`
            else  return `${element} is prime`
        }
    }
})

console.log(array);