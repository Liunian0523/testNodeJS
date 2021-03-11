const person = {
    name: 'Max',
    age:29,
    greet(){
        console.log('Hi, I am '+this.name);
    }
};

const {name,age}=person;
console.log(name, age);

const hobbies = ['Sport','Cooking'];
const[hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2);
//destruct之后就不需要知道参数的index来操作参数了

//Literal
console.log(`My name is ${name} and I am ${age} years old.`);
