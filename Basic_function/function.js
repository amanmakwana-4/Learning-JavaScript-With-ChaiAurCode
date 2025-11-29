function addTwoNumbers(num1,num2){
    return num1+num2
}
console.log(addTwoNumbers(7,2))

function calculateCartPrice(...num){
    return num
}
const returnValue = calculateCartPrice(200,300,100,400)
console.log(returnValue)