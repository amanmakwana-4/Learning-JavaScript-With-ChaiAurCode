const num=123
const bigNum=12300000000000001120000101237721732176n
const name='Aman Makwana'
const isLoggedIn=true
const serverError = null
let numUndefine;
// console.table([typeof(num,bigNum,name,isLoggedIn,serverError,numUndefine)])

console.table([
  { variable: num, type: typeof num },
  { variable: bigNum, type: typeof bigNum },
  { variable: name, type: typeof name },
  { variable: isLoggedIn, type: typeof isLoggedIn },
  { variable: serverError, type: typeof serverError },
  { variable: numUndefine, type: typeof numUndefine }
]);