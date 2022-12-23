function myFunction() {
  let a = +document.getElementById("canhA").value;
  let b = +document.getElementById("canhB").value;
  if(a > 0 && b > 0){
    document.getElementById("text").innerText = "Diện tích hình tam giác vuông: "+ (a*b)/2;
  }else{
    document.getElementById("text").innerText = "Nhập lại giá trị > 0";
  }
}
