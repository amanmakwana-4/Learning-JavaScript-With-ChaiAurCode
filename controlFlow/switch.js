const month = 4
switch(month){
    case 1:{
        console.log('Jan')
        break
    }
    case 2:{
        console.log('Feb')
        break
    }
    case 3:{
        console.log('March')
        break
    }default:{
        console.log('Wrong Number')
    }
}
const emptyArray=[]
if(emptyArray.length===0){
    console.log('Empty Array')
}else{
    console.log('Not empty')
}
console.log(`Length of Array is ${emptyArray.length}`)
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Empty")
}else {
    console.log('Not Empty')
}
let val;
val = null ?? undefined ?? 15
console.log(val)