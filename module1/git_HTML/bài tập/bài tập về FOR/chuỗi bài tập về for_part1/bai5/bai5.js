function Fun(){
    const number = parseInt(prompt("Nhập kích thước của dãy : "));
    let num1 = 0,
      num2 = 1,
      temp;
  let coust =0, sum = 0;
  
    document.write("FIBONACCI: \n");
    for (let i = 1; i <= number; i++) {
      document.write("\n "+ num2);
      temp = num1 + num2;
      num1 = num2;
      num2 = temp;
      
      coust++;
      sum += temp;
      if(coust == 20){
        break;
      }
    }
  document.write("Sum of 20 num: "+ sum);
  }