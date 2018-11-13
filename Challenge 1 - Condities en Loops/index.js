//  Create 1000 random numbers
for (var i = 0; i < 1000; i++) {
  num = Math.floor(Math.random() * 1000);

  //  If the remainder === 0, log the number
  if (num % 3 === 0) {
    console.log(`${num}`);
  }
}
