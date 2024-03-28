// пример подключения именованного модуля

const m1 = require('./example_module')

console.log(m1.randomInt())

// то же, только красиво
const {randomInt} = require('./example_module')

console.log(randomInt())