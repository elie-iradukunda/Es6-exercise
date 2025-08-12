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


// create counter with closures

function createCounter(){
    let count=1

    return function counterfn(){
        count++
        return count
    }
}

const count1=createCounter()
const count2=createCounter()
console.log(count1())
console.log(count1())
console.log(count1())
console.log(count1())
console.log(count2())

// prototype inheritance

// using constractor function
function Person(name,age){
    this.name=name;
    this.age=age;

}

Person.prototype.greet=function(){
    console.log(`hello my name is ${this.name} and i have ${this.age} years old`)


}

const person1=new Person("mugisha",30)
const person2=new Person("karisa",90)

console.log(person1)
console.log(person2)

person1.greet()

//. Inheritance Using Prototypes
function Students(name,age,grade){
    Person.call(this,name,age)// here i used properties to inherit
    this.grade=grade
}
Students.prototype=Object.create(Person.prototype)
Students.prototype.study=function(){
    console.log(`${this.name} is studying in grade ${this.grade}.`);

}

const studedent1=new Students("rukundo",30,"A")
console.log(studedent1)
studedent1.greet()
studedent1.study()

// using object.create directly

const Animals={
    eat:function(){
        console.log(`${this.name} is eating .`)

    }
};

const dog=Object.create(Animals)
dog.name="China dog";
dog.eat()
