const pattern = 'cache_category_add_1_abc_123'

const [prefix, entity, action, id, ...other] = pattern.split('_')

const [num, str] = other

console.log(prefix)
console.log(entity)
console.log(action)
console.log(id)
console.log(other)

console.log(num)
console.log(str)
