// objects and arrays are reference  types
// SecondPerson is SameObject as person 
// so if we change person secondPerson will change automatically
// same as in python
const person = {
    name: "max"
}

const secondPerson = person;
person.name = "Manu"
console.log(secondPerson)

// avoid same objects

const p = {
    name: "george"
}
// if we use spread operator now p and p2 won't be same object again
const p2 = {...p}

p.name = "Ss"

console.log(p)
console.log(p2)
