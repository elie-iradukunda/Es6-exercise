//WHEN you write a string in backticks THEN it behaves just like a normal string

var str=`hello world`

console.log(str)// is same as ""
var str1="hello world"
console.log(str1)
// WHEN using ${x} inside a template string THEN the value of x is written out instead
let x=42
let y=50;
console.log(`${x+1}`)// output 43 because of backtiks
console.log(`${x}+${y}`) // this will concatenate them
console.log(`${x+y}`)// this wil add it


// Template string, can contain multiline content

let mystring=`hello
javascript this
is time to 
code
`

console.log(mystring)

//GIVEN expressions inside of a template string

let age=40
console.log(`${x} years old`)