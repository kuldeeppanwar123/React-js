function Iterator(array) {
  let nextIndex = 0;
  return {
    next: function() {
      if(nextIndex < array.length){
        return {
          value: array[nextIndex++],
          done: false
        }
      }else {
        return {
          value: undefined,
          done : true
        }
      }
    }
  }
}

const array = [1,2,3,4,5];
const arrayItr = Iterator(array)

console.log(arrayItr.next());
console.log(arrayItr.next());
console.log(arrayItr.next());
console.log(arrayItr.next());
console.log(arrayItr.next());
console.log(arrayItr.next());
console.log(arrayItr.next());

