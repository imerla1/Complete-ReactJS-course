import { baseData } from "./utils.js";
import { add } from "./utils.js";
import { b as hello} from "./utils.js" // import b as hello
import person from "./person.js" // this is default export


console.log(baseData)
console.log(person)

const a = add(5, 23)
console.log(a)
let j = hello("Georeg")
console.log(j)