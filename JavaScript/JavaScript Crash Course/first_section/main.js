// var (mutable, global scope, don't use), let (mutable, block level scope), const (immutable, block level scope)
// primative data types are directly assigned to memory, not a resource, types: String, Number, Boolean, null, undefined, Symbol
/*
const name = 'John';
const age = 30;

console.log('My name is ' + name + ' and I am ' + age);
// Template Strings use back ticks
console.log(`My name is ${name} and I am ${age}`);
*/

const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

//use && for and, || for or
if (todos[1].id === 1 || todos[2].id === 3){
    console.log('this worked!')
}

const x = 10;

// ? is the ternary operator "then", structured as (true):(false)
const color = x > 10 ? 'red' : 'blue';

switch(color){
    case 'red':
        console.log('color is red');
    break;
    case 'blue':
        console.log('color is blue ');
    break;
    default:
        console.log('color is NOT red or blue');
    break;
}

function addNums(num1 = 1, num2 = 1){
    return(num1 + num2);
}
console.log(`Regular function: ${addNums(3, 5)}`);

// Arrow functions, they have a lexical this keyword
const arrowAddNums = (num1 = 1, num2 = 1) => {
    return(num1 + num2);
}
console.log(`Arrow function: ${arrowAddNums(4, 7)}`);

const arrowAddNumsSimple = (num1 = 1, num2 = 1) => num1 + num2;

console.log(`Simplified arrow function: ${arrowAddNumsSimple(6, 7)}`);

todos.forEach((todo) => console.log(todo));

//class person and the below code operate in the same way, class person is syntactic sugar to make it clearer what is going on
//constructor function
/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    /*
    this.getLastName = function(){
        return `${this.lastName}`;
    }
    this.getBirthYear = () => this.dob.getFullYear();
    this.getFullName = () => `${this.firstName} ${this.lastName}`;
    END OF COMMENT GOES HERE!!!!!!!!!!!!!!!!!!!!!!!!!
}

//code below didn't work while in prototype but the listed out function did?
//Person.prototype.getBirthYear = () => this.dob.getFullYear();
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = () => `${this.firstName} ${this.lastName}`;
*/

class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    // these add methods to the prototype object
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '4-3-1980');

console.log(person2.getBirthYear(), person2.getFullName());
console.log(person1);
//console.log(person1.getLastName());

//const todoJSON = JSON.stringify(todos);
/*
for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

let i = 0;
while(i < 10){
    console.log(`While Loop Number ${i}`);
    i++;
}

for (let todo of todos){
    console.log(todo.id);
}
*/
/*
// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.id);
});

const todoMap = todos.map(function(todo){
    return todo.text;
});

const todoFilter = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoFilter);
*/