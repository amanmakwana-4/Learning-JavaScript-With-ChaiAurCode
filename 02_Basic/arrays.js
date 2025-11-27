const myArr=['Aman','Makwana',18,true]
// console.log(myArr[0])
// console.log(myArr[1])
// console.log(myArr[2])
// console.log(myArr[3])
console.log(myArr.length)
myArr.push(1)
myArr.push(2)
// console.log(myArr)
myArr.pop()
// console.log(myArr)
myArr.unshift(9)
// console.log(myArr)
myArr.shift()
// console.log(myArr)
const newArr=[1,2,3,4,5]
// console.log(newArr)
const newArraySlice=newArr.slice(0,3)
const newArraySplice=newArr.splice(0,3)
// console.log(`Slice ${newArraySlice}`)
// console.log(`Splice ${newArraySplice}`)
// console.log(`Original Array: ${newArr}`)

const bollyMovie=['Shiddat','Pathan','Jawan']
const newBollyMovie=['K.G.F','Dangal']
// bollyMovie.push(newBollyMovie)
// console.log(bollyMovie)
bollyMovie.push(...newBollyMovie)
console.log(bollyMovie)