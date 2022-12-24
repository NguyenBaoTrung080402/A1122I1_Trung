let i = 0;
let sum = 0,
  count = 0;
  document.write("Dãy số chia hết cho 7: ")
while (count < 30) {
  if (i % 7 == 0) {
    document.write(" "+ i);
    count += 1;
    sum += i;
  }
  i +=1
  
}
document.write("</br>");
document.write("Tổng các số chia hết cho 7: " + sum);