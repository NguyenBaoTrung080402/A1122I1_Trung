function bai7() {
    let i;
  for (i = 1; i <= 100; i++) {
    alert(i);
    if ( i % 5 == 0) {
        alert("FizzBuzz");
    } 
    if (i % 3 == 0) {
        alert("Fizz");
    } 
    if ( i % 3 == 0 && i % 5 == 0) {
        alert("FizzBuzz");
    }
  }
}
