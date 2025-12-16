(function chai(){
    //named IIFE
    console.log('IIFE 1')
})();
((name)=>{
    console.log(`Welcome ${name}`)
})('Aman');