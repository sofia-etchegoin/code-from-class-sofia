function sumLogger(a, b) {
  setTimeout(() => {
    console.log(a + b)
  }, 2000)
}

// A
console.log(1)
// B
sumLogger(1, 1)
// C
console.log(3)
