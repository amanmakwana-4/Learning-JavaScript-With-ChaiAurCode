const user={
    username:'Aman',
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
    }
}
user.welcomeMessage()
user.username='Aman Makwana'
user.welcomeMessage()

function chai(){
    let username = "Aman"
    console.log(this.username);
}
chai()

const newChai = () =>{
    const username = 'Aman Makwana'
    console.log(this.username)
}
newChai()