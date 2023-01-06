function bai6() {
  let mangSo = [],
    Boo = true;
  for (let i = 0; i < 10; i++) {
    mangSo[i] = prompt("Nhập vào giá trị của mảng: ");
    if (mangSo[i] == "V") {
      Boo = false;
    }
  }
  document.write("Giá trị của mảng: [" + mangSo + "]<br>");
  if (Boo == false) {
    document.write("V is in the array");
  } else {
    document.write("V is not in the array");
  }
}
