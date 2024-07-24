//Using foreach 
let numbers = [1,2,3,4,5];
function printNumbers(array){
    array.forEach(number => {
        console.log(number);
    });
}

printNumbers(numbers);

//using Map

let arr1 = [1,2,3,4,5];

function doubleNumbers(arr){
    return arr.map(number => number * 2);
}

let doubledNumbers = doubleNumbers(arr1);

console.log(doubledNumbers);

//Using Filter

let numArray = [1,2,3,4,5,6,7,8,9,10];

function getEvenNumbers(array){
    return array.filter(num => num % 2 === 0);
}

let evenNums = getEvenNumbers(numArray);

console.log(evenNums);

//Using reduce

let arr2 = [1,2,3,4,5];

function sumofNumbers(array){
    return array.reduce((total,number) => total + number, 0);
}

let sumResult = sumofNumbers(arr2);

console.log(sumResult);

// Using Find
let people = [
    {name:"Rohit",age: 22},
    {name: "Ravi",age: 28},
    {name:"Ram",age: 17},
];

let age = people.find(person => person.age>25);
console.log(age);

//Using Findindex

let index = people.findIndex((person)=> person.age<18);
console.log(index);