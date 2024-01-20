//find min and max 
let string = "122 23 45 567 89 4 54 674 786 35 21";
let minvalue = string.split(' ').map(Number);
let value = minvalue.reduce((previous, current) => {
    return (previous<current?previous:current);
});
console.log("minimum value: ", value);
// find max

let maxvalue = string.split(' ').map(Number);
let valueMax = minvalue.reduce((previous, current) => {
    return (previous>current?previous:current);
});
console.log("maximum value: ", value);
