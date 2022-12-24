function myFunction() {
  const number = parseInt(prompt("Nhập kích thước của dãy : "));
  let num1 = 0,
    num2 = 1,
    temp;

  document.write("FIBONACCI: \n");
  for (let i = 1; i < number; i++) {
    document.write("\n "+ num2);
    temp = num1 + num2;
    num1 = num2;
    num2 = temp;
    if(temp % 5 == 0){
        break;
    }
  }
document.write("Số chia hết cho 5: "+ temp);
}

