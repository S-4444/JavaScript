let string = "1,2,3,5,6,7,9,10";
let sortedArray = string.split(',').map(Number).sort((a, b)=> { return a - b });
// console.log(sortedArray);
// let missingValue = sortedArray.filter((element, index, array)=>{
//     return element !== array[index];
// })

// console.log("missingValue", missingValue);

const missingValue = [];
const missarray= (arr)=>{
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    for(let i=min; i<max ; i++){
        if(arr.indexOf(i)<0){
         missingValue.push(i);
        }
    }
    return missingValue;
}
console.log("missing values are",missarray(sortedArray));