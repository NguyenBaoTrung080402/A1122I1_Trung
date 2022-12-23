function myFunction() {
  let a = +document.getElementById("canhA").value;
  let b = +document.getElementById("canhB").value;
  let c = +document.getElementById("canhC").value;
  let delta;
  if (a == 0) {
    document.getElementById("text").innerText =
      "Phương trình có 1 nghiệm phân biệt";
  } else if (a != 0) {
    delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
      document.getElementById("text").innerText = "Phương trình vô nghiệm";
    }else if(delta==0){
        let x1;
        x1 = -b/(2*a);
        document.getElementById("text").innerText = "phuong trinh co 1 ngiem kep x1=x2: " + x1;
    }else{
        let x1, x2;
        x1 = (-b + Math.sqrt(delta)) / (2*a);
        x2 = (-b - Math.sqrt(delta)) / (2*a);
        document.getElementById("text").innerText = "Phương trình có 2 nghiệm x1 = " + x1 + " và x2 = " + x2;
    }
  }
}
