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

