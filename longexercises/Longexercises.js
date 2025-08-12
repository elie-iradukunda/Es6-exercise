function oddSquares(arr){
    return arr.map((arra)=>arra*arra)
}

console.log(oddSquares([1,2,3,5,4,5,6,7]))
// sort product

function sortProduct(arr){
    return arr.sort((a,b)=>a-b)
    .filter((items)=>items%2===0)// for even number
     .reduce((acc,curr)=>acc+curr,0)//add them
}
console.log (sortProduct([2,4,2,3,2,1,2,3,5,6,7]))


function pushtoArray(str){
    let newarray=[]
    const res=str.split('').filter((char,index)=> str.indexOf(char)%2!==0).join(' ')
  newarray.push(res)
  return newarray
    
}
console.log (pushtoArray("hello javascript here we go"))


// remove duplicate

function ValidatePhoneNumber(str){
const arr= str.split('')
arr.forEach((ele, ind)=>{
   if(ind % 3 == 0 && ind>0 && ele == '-'){
   console.log(true)
} else{
    console.log(false)
   }
})

    


}
console.log(ValidatePhoneNumber('923-567-609'))