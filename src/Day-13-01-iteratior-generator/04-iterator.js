const arr = [11,22,33,44,55,66]

const arritr = arr[Symbol.iterator]();

while(true) {
  let res = arritr.next();
  if(res.done) break;
  console.log(res.value)
}



// ------------------------------------------

const str = 'Kuldeep'
const strItr = str[Symbol.iterator]()

while(true) {
  let res = strItr.next();
  if(res.done) break;
  console.log(res.value)
}