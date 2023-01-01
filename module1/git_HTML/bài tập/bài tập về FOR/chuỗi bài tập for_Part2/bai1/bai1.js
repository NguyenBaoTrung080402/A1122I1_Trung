function myFunction() {
  const array = +prompt("Enter value ");
  let n1 = 0,
    n2 = 1,
    temp;
  document.write("Fibonacci Series:");
  for (let i = 1; i < array; i++) {
    document.write(" " + n1);
    temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }
}
