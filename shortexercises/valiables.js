// WHEN using var for declaring a variable THEN the scope of the variable is the surrounding function
if(true){
    var x=true
}
console.log(x)

// WHEN using let in a for loop THEN the variable is only "visible" inside this loop

let objects={x:1};
for(let key in objects){
    console.log(key)// this can work 
}
console.log(objects[key])// here will show you that is not defined
// but var can be accessed out side the scope 
// let is like const both is brock scoped

