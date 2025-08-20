// ways to create objects

var object={
    name:"karisa",
    age:60,
};
console.log(object)


// using object constractor but this is not good plactice to use

const object1=new Object({
    name:"kamana",
    age:90
})
console.log(object1)
// using object create methods
// this used to create new object based on existing object

let vehicles={
    whele:"5",
    fueltype:"gase",
    color:"blue",
};

let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};
let carProps = {
  type: {
    value: "Volkswagen",
  },
  model: {
    value: "Golf",
  },
};

var car = Object.create(vehicle, carProps);
console.log(car.type);
console.log(car.model)
console.log(car.color)
// using function constractor

function Person(name,age){
    this.name=name;
    this.age=age
};

const object2=new Person("kamana",60);
console.log(object2)

// function constractor with prototype
function Person2(){}
    Person2.prototype.name="karisa";
    Person2.prototype.age=40;

    const object3=new Person2()

    console.log(`${object3.name} has ${object3.age}years old`)

    // buy using object . assign methods

    const campany={campanyName:"elieTech",location:"kigali"};

    const carHeown={carNmae:"toyota",type:"voxwagen"};

    const hisProparties=Object.assign({},campany,carHeown)
hisProparties.carNmae="kama"
    console.log(hisProparties)
    console.log(carHeown.carNmae)
    console.log(carHeown)

    const spreaded={...campany,...carHeown}
    spreaded.campanyName="kamama"
    console.log(spreaded)
    console.log(campany)


    // wou after nowing how to use object .assign and spread operator

    // lets use es6 classes

    class Person4{
        constructor(name,age){
            this.name=name;
            this.age=age
        };
    };

    const person4=new Person4("kaka",90);
    console.log(person4)


    // Quetion 2 Deal about prototype chaining in js

    console.log(Object.getPrototypeOf(person4)===Person4.prototype)

    // about call , apply and bind

    // in javascript call,apply and bind are methods that allows you to controll the  context of |(This values) in which function is executed)

    // call() methods imvokes functions immediately , allowing you to specify the value of this and arguments individually (comma - separated each other)


    //example function .call(thisArg,arg1,arg2,...);

var employer={firstName:"kamana",age:60};

function greetings(greet1,greet2){
    console.log(`${greet1} , ${this.firstName}  , ${this.age}  old ${greet2}`);



};


greetings.call(employer,'hello','how are you doing')// this will take greet1 as calling  hello as argument then take greet2 as how are you doing as argument2
// and will take that employer as object where this key word is going to be applied

// other example

var customer1={name:"mugisha",location:"kigali",age:50};
var customer2={name:"rukiundo",location:"kinyinya",age:80};

function inviteThem(invite1,invite2){
    console.log(`${this.name} who located at ${this.location} i woild like to invite you in our project it consider you to have ${this.age} ${invite1} ${invite2}`)
}

inviteThem.call(customer1,"hello","be prepared")

// using apply|() method
// this apply is similar to call but it takes the function arguments as an array (array like object) instead of individual arguments


// syntax  function.apply(this.arg,[arrgsArray]);

function inviteone(greet2,greet3,greet4){
    console.log(`${greet2} ${this.name}  who have ${this.age} in ${this.location} ${greet3} ${greet4}`)

}

inviteone.apply(customer1,["hello","how are you doing","are good"]);


    



