let name = 'Max';//never change the value
let age = 29;//replace var
let hasHobbies = true;

age = 30;
//arrow function
const summarizeUser = (userName, userAge, userHasHobby) => {

    return ('Name is '+userName+
    ', age is '+userAge+
    ', and the uer has hobbies: '+userHasHobby);
}

//another arrow func instance
const add = (a,b) => a+b;
console.log(add(2,3));

//object
//use arrow func will not get the name value
const person = {//reference type
    name: 'Nian',
    age: 29,
    greet() {
        console.log('Hi, I am '+this.name);
    }
};
person.greet();
//only pointer point to array
const hobbies = ['Sports','Cooking'];
for(let hobby of hobbies){
    console.log(hobby);
}
//transfer array to map
console.log(hobbies.map(hobby=>'Hobby:'+hobby));
hobbies.push('Programming');
console.log(hobbies);

//copy array
const copiedArray = hobbies.slice();
console.log(copiedArray);
const copiedArray1 = [...hobbies];//pull out all elements inside into new array
console.log(copiedArray1);
const copiedPerson = {...person};
console.log(copiedPerson);
//flexiable way to put many elements into an array
const toArray = (...args) => {
    return args;
}
console.log(summarizeUser(name,age,hasHobbies));

//destruct
const pringName = ({name})=>{
    console.log(name);
}
pringName(person);
const { name, age }=person;
console.log(namem,age);