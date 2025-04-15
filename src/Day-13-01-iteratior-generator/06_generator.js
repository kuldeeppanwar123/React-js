function* fibbonacciGenerator() {
  let curr = 0;
  let next = 1;

  while(true) {
    yield curr;
    [curr, next] = [next, curr+next];
  }
}

const fibbonacciObj = fibbonacciGenerator()

for (let i = 0; i< 10; i++) {
  console.log(fibbonacciObj.next().value)
}