//find duplicate values froma a strings:::::

const givenString = "I am a software engineer and want to work in google";

const removedDuplicate = givenString.split('').filter((element , index, array)=>{
    return array.indexOf(element)!== index;
})
let singleDuplicateValue = new Set();
removedDuplicate.forEach((e)=>{
  singleDuplicateValue.add(e);
})
console.log("duplicate values are :",singleDuplicateValue);