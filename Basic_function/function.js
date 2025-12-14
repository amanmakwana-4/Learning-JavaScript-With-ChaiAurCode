function addTwoNumbers(num1,num2){
    return num1+num2
}
console.log(addTwoNumbers(7,2))

function calculateCartPrice(...num){
    return num
}
function calCartPrice(val1,val2,...num){
    return num
}
const returnValue = calculateCartPrice(200,300,100,400)
console.log(returnValue)

const returnValue2 = calCartPrice(200,300,400,500)
console.log(returnValue2)

const user={
    name:'Aman',
    price:200
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}
handleObject(user)

const myNewArray=[10,20,30,40,50]
function handleArray(getArray){
    return getArray[2]
}
console.log(handleArray(myNewArray))