function myFunction() {
  let dai = +document.getElementById("width").value;
  let rong = +document.getElementById("height").value;
  for (let i = 0; i < dai; i++) {
    document.write(" * ");
  }
  for (let j = 0; j < rong - 2; j++) {
    document.write("</br>");
    document.write("*");
    for (let i = 1; i < dai - 1; i++) {
      document.write("&nbsp;&nbsp;&nbsp;");
    }
    document.write(" *");
  }
  document.write("</br>");
  for (let i = 0; i < dai; i++) {
    document.write(" * ");
  }
}
