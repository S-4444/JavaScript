const string = "I am Sanjoy das. I am also want to do a job in google";

// usings set
const splitedvalue = string.split(" ");
const set = new Set();
splitedvalue.forEach(e => {
    set.add(e);
});
// console.log("removed Duplicate by set ==", set);

//using filter function
const string1 = "sAaanjjooyy";
const splitedArray = string1.toUpperCase().split('');
const arrayvalue = splitedArray.filter((element, index, array)=>{
      return array.indexOf(element)== index;
})
console.log("removed Duplicate by filter array ::",arrayvalue);
console.log("removed Duplicate by filter string ::",arrayvalue.join(''));




