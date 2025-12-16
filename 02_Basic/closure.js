function createCounter(){
    let count=0;
    console.log(`main function ${count}`)
    function increment(){
        count++;
        console.log(count);
    }
    return increment;
}
const counter= createCounter();
counter();
counter();
console.log(counter)