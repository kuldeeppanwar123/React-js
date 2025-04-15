function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generatorObj = myGenerator();
console.log(generatorObj.next());
console.log(generatorObj.return(10))
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());

// -------------------------------------

function* generateId() {
  let id = 1;
  while(true) {
    yield id;
    id++;
  }
}

const generateIdObj = generateId();

console.log(generateIdObj.next())
console.log(generateIdObj.next())
console.log(generateIdObj.return(200))
console.log(generateIdObj.next())
console.log(generateIdObj.next())

// ------------------------------------------

function* counterGenerator() {
  let count = 1;
  while(true) {
    const increment = yield count;
    console.log({increment})
    if(increment) count+=increment;
    else count++;
  }
}

const counterGenObj = counterGenerator();
console.log(counterGenObj.next());
console.log(counterGenObj.next(10));
console.log(counterGenObj.next(10));