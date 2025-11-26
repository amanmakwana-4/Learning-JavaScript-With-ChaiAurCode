const num=10000.2391
console.log(num.toFixed(2))

const newNum=100.9
console.log(newNum.toPrecision(3))
console.log(num.toLocaleString('en-IN'))

// Maths

console.log('Maths Library')
console.log(Math.abs(-55))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.7))
console.log(Math.round(4.5))
console.log(Math.max(1,2,3,4,5,-10,100))
console.log(Math.min(1,2,3,4,5,-10,100))

console.log(Math.random()) // 0 to 0.999999
max=6
min=1
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
