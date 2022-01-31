const fs = require("fs");
const file = fs.readFileSync("test.txt", {encoding:"utf8"});
// console.log(file);
const regexFindEmail = /@[a-zA-Z0-9.-]+/g;
// const regexFindEmail = /\b\S+@(\S+)\b/g;


let regexFindEmailFile = file.match(regexFindEmail);
console.log(regexFindEmailFile.sort());

const count = {};
  regexFindEmailFile.forEach(element => {
    count[element] = (count[element] || 0 ) + 1;
  });
console.log(count);


const sortedEmails = 
    Object.entries(count).sort(([,a],[,b]) => b-a);

console.log(sortedEmails.slice(0,10));

// const regexSoft = /@softwire\.com\b/g;
// const regexHot = /@hotmail\.com\b/g;
// let regexFile = file.match(regex);
// console.log(regexFile.length);
// function emailExtractor (regexp){
//    let regFile = file.match(regexp);
//    return regFile.length;
// }
// console.log(emailExtractor(regexSoft));
// console.log(emailExtractor(regexHot));
//Without Regex
// let counter = 0;

// for(let i = 0; i < file.length; i++) {
//   if ((file.substring(i, i+ 13) === '@softwire.com')) { 
    
//       counter++;
//      }
// }
 
// console.log(counter);
