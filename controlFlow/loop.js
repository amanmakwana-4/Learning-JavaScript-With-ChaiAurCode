for(let idx=0;idx<5;idx++){
    // console.log(idx)
}

// for of Loop
const arr=[1,2,3,4,5]
for(const num of arr){
    // console.log(num)
}
const greetings= "Hello World"
for(const greet of greetings){
    if(greet == ' '){
        continue
    }else{
        // console.log(`Each char is ${greet}`)
    }
}

const mapp = new Map()
mapp.set('IN','India')
mapp.set('USA','United States of America')
mapp.set('FR','France')
for(const [key,val] of mapp){
    console.log(key,':- ',val)
}