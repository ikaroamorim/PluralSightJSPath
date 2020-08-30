
function printAll() {
    for (let i = 0; i < arguments.length; i++)
        console.log(arguments[i])
}
printAll(0, 1, 7, 6, 8, 4, 1, 6, 9, 7, 10);

//IIFE 
(function () { console.log('Hello') })();

//Arrow Functions
//Um argumento e uma linha de instruções
let greetings = name => 'Hello ' + name;
console.log(greetings('Carlos'))
/*
leg greetings = function(name){
    return `Hello ${name}`
}
*/

//Use of This com Arrow function
let message = {
    name: 'John',
    regularFunction: function () {
        console.log('Regular function')
        console.log(this)
        console.log('Hello ' + this.name)
    },
    arrowFunction: () => {
        console.log('Arrow function')
        console.log(this)
        console.log('Hello ' + this.name)
    }
}
message.regularFunction();
message.arrowFunction();

//Usando o call
let person1 = {name:'John', age:22}
let person2 = {name:'Mary', age:26}

let sayHi = function(){
    console.log('Hi, '+ this.name)
}

sayHi.call(person1)
sayHi.call(person2)

//Call vs Apply
function introduction(name, profession){
    console.log(`My name is ${name} and I am a ${profession}.`)
}
introduction('John', 'student')
introduction.apply(undefined, ['Mary', 'lawyer'])
introduction.call(undefined, 'James', 'artist')

let x = 1;
let y = 2;
console.log(eval('x + y + 1'));

console.log(parseInt('F',16))
console.log(parseFloat('3.99e-1'))


console.log(escape('abc&%  !'))
console.log(unescape('abc%26%25%20%20%21'))

//Default Parameters
function sayHi2(name = 'World'){
    console.log('Hello' + name)
}
sayHi2();
sayHi2('John');

//REst Parameter
let sayHi3 = function greet(message, ...names){
    names.forEach(name => console.log('Hi '+ name))
}

greet('Welcome', 'Mary', 'John', 'James')



//Operador Spread
function greet(person1, person2){
    console.log(`Hello ${person1} and ${person2}`);
};

let names =['John', 'Mary']
greet(...names)