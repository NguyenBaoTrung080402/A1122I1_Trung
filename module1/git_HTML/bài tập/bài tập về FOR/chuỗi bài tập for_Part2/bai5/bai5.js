function myFunction() {
  let money, month, interest_M, Sum;
  do {
    money = +document.getElementById("canhA").value;
    month = +document.getElementById("canhB").value;
    interest_M = +document.getElementById("canhC").value;
    if (money <= 0 || month <= 0 || interest_M <= 0) {
      alert("Enter again");
    }
    Sum = money * Math.pow(1 + interest_M, month);
    document.writeln ("Tổng lãi ngân hàng là: " + Sum) ;
  } while (money <= 0 || month <= 0 || interest_M <= 0);
  
}
