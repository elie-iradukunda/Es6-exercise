//extract value from array, e.g. extract 0 into x like so let [x] = [0];
let fruits=['banana','potatoes','sugar'];
let [one,two,three]=fruits// here one will take banana two:potatoes respectively

console.log(one)
console.log(two)
console.log(three)

// multiple object

const magic={first:23,second:43};
const {first,second}=magic
console.log(second)// 43
console.log(first)//23