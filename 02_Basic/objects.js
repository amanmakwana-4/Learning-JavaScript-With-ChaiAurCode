const mysym = Symbol('id')
const jsUser ={
    name:'Aman',
    age: 18,
    location:'Barnagar',
    [mysym]: 'kumar',
    email: 'some@gmail.com',
    lastLoginDays:['Monday','Saturday']
}
console.log(jsUser.age)
console.log(jsUser['name'])
console.log(jsUser[mysym])
console.log(mysym.description)
console.log(jsUser)
jsUser.greeting=function (){
    console.log(`Hello ${this.name}`)
}
console.log(jsUser.greeting())