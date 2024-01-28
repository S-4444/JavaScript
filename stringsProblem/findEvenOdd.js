let array = [2,4,7,6,9,10];
const value = array.map(element =>{
  if(element % 2 ===0 ) return console.log(`${element} is even`);
  else return console.log(`${element} is odd`);
});
