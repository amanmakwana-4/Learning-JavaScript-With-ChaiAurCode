const instaUser = new Object()
instaUser.name="Aman Makwana"
instaUser.email='some@gmail.com'
console.log(instaUser)

const fbUser={
    email:'some@gmail.com',
    firstName:{
        username:{
            userFirstName:'Aman',
            userLastName:'Makwana'
        }
    }
}
console.log(fbUser.firstName.username.userFirstName)

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3= Object.assign([],obj1,obj2)
const obj4=Object.assign({},obj1,obj2)
console.log(obj3)
console.log(obj4)