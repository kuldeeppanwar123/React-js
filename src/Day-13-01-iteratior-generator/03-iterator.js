let range = {
  from: 1,
  to: 5
}

range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
    next: function() {
      if(this.current <= this.last) {
        return {
          value: this.current++,
          done: false
        }
      }
      else {
        return {done: true}
      }
    }
  }
}

let rangeItr = range[Symbol.iterator]()
console.log(rangeItr.next())
console.log(rangeItr.next())
console.log(rangeItr.next())
console.log(rangeItr.next())
console.log(rangeItr.next())
console.log(rangeItr.next())

// for(let n of range){
//   console.log(n)
// }