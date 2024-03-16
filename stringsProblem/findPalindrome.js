
function findPalindrome (string){
    const reverseString = string.split('').reverse().join('');
    if(string === reverseString) return true;
    else return false;
}
let enterString = "1881";
const value = findPalindrome(enterString);
if (value===true) console.log('enterd value is palindrome');
else console.log("entered value is not palindrome");