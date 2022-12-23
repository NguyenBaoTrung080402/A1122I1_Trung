function myFunction() {
  let a = +document.getElementById("canhA").value;
  let b = +document.getElementById("canhB").value;
  let result = -b/a;
  if(a==0 && b != 0){
    document.getElementById("text").innerText = "phương trình vô nghiệm"
  }else if(a == 0 && b == 0){
    document.getElementById("text").innerText = " Phương trình có vô số nghiệm "
  }else {
    document.getElementById("text").innerText = "phương trình có 1 nghiệm duy nhất: " + result;
  }
}
