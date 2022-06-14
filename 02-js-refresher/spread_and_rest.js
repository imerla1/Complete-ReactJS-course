// Spread and rest Operators


// spread operator
const numbers = [1, 2, 3];
// create New array from numbers
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers)

const person = {
    name: "George"
}

const newPerson = {
    ...person, 
    age: 28
}

console.log(newPerson)

// rest Operator in functions is same as *args In python

function rest(...args) {
    return args

}
let x = rest(1,2,3,4)
console.log(x)