let status = 1;
let num = 3;
let n = +prompt("Nhập vào n số nguyên tố đầu tiên:");
if (n >= 1) {
  document.write(n + " Số nguyên tố đầu tiên là:");
  document.writeln(2);
}
for (let i = 2; i <= n; ) {
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j == 0) {
      status = 0;
      break;
    }
  }
  if (status != 0) {
    document.writeln(num);
    i++;
  }
  status = 1;
  num++;
}
