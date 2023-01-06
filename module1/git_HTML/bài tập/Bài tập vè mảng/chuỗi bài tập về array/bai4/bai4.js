function bai4() {
  let mangSo = [];
  let a = new Array();
  a = Number(prompt("Nhập vào số lượng phần tử của mảng"));
  for (let i = 0; i < a; i++) {
    mangSo[i] = Number(prompt("Nhập vào giá trị của mảng"));
  }
  document.write("mảng số chưa đảo ngược : [" + mangSo + "]<br>");
  document.write("mảng sổ đã đảo ngược : [" + mangSo.reverse() + "]<br>");
}
