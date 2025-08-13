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

// using classes can help in inhertances


// call,apply,bind

//a area of rectangle using bind with fixed widith
function areaOfrectangle(widith,heigth){
    return widith*heigth

}
const areaWithfixedWidith=areaOfrectangle.bind(null,10)
console.log(areaWithfixedWidith(5))

// find max in array 

const numbers=[1,2,4,3,100,5,7,8,5,3,2,2,34,65]
const maxmum=Math.max.apply(null,numbers)
const min=Math.min.apply(null,numbers)
const exp=Math.exp.apply(null,numbers)
const ln=Math.LN2
console.log(ln)
console.log(exp)
console.log(min)
console.log(maxmum)

// function  capitalize

function capitalize(){
    return this.charAt(0).toUpperCase() + this.slice(1);
}
const names="hello world"
const capitalized=capitalize.call(names)
console.log(capitalized)


//counting zeroes function that counts how many zeros appear in all numbers from 1 to n, following that logic.


function countZeroes(num){
    let count =0;
    let divisors=10
    while(divisors<=num){
        count+=Math.floor(num/divisors)
        divisors*=10;
    }

    return count
}
console.log(countZeroes(50));   
console.log(countZeroes(100));  
console.log(countZeroes(200));  


// clases

class Animal {
    constructor(type,age){
        this.type=type;
        this.age=age
       
    }



    sounding(sound){
this.sound=sound
console.log(`this ${this.type} is having ${this.age}`)

    }
}

const animal1=new Animal('kangalo',90)

console.log(animal1)
animal1.sounding()


class Kangalo extends Animal{
    constructor(type,age,times){
        super(type,age);
        this.times=times
    }

    greet(){
        console.log(`hello ${this.type} here you have ${this.age} and you born ${this.times} times`)
    }
}

const kangalo1=new Kangalo('kana',80,60)
console.log(kangalo1)
kangalo1.greet()
kangalo1.sounding()