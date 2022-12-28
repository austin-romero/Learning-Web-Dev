// var (mutable, global scope, don't use), let (mutable, block level scope), const (immutable, block level scope)
// primative data types are directly assigned to memory, not a resource, types: String, Number, Boolean, null, undefined, Symbol
/*
const name = 'John';
const age = 30;

console.log('My name is ' + name + ' and I am ' + age);
// Template Strings
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
// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.id);
});

const todoMap = todos.map(function(todo){
    return todo.text;
});
console.log(todoMap);