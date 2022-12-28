function myFunction1() {
  let n = +document.getElementById("input").value;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      document.writeln(" * ");
    }
    document.writeln("<br/>");
  }
}
function myFunction2() {
  let n = +document.getElementById("input").value;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      document.writeln(" * ");
    }
    document.writeln("<br/>");
  }
}
function myFunction3() {
    let n = +document.getElementById("input").value;
    for (let i = n; i >= 0; i--) {
        for(let j=0; j<=i; j++){
            document.write("&nbsp;&nbsp;&nbsp;");
        }
        for(let j=i; j < n; j++){
            document.write("* ");
        }
        document.write("<br/>");
    }
   
  }
  function myFunction4() {
    let n = +document.getElementById("input").value;
     for(let i = 0; i < n; i++) {
        for(let j=0; j<=i; j++){
            document.write("&nbsp;&nbsp;&nbsp;");
        }
        for(let j=i; j < n; j++){
            document.write("* ");
        }
        document.write("<br>");
    }

    document.write("<br>")
}