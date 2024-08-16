// CommonJS, every file is module (by default)
// Modules - Encapsulated Code(only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')

const data = require("./6-alternative-flavor")
console.log(data);

require('./7-mind_grenade')

console.log(names);

sayHi('Dev')
sayHi(names.john)
sayHi(names.peter)