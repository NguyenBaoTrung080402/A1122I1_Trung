function bai8() {
  let mangSo = [];
  let temp;
  let a = new Array();
  a = Number(prompt("Nhập vào số lượng phần tử"));
  for (let i = 0; i < a; i++) {
    mangSo[i] = Number(prompt("Nhập vào " + a + " giá trị của mảng"));
  }

  document.write("Giá trị của mảng: [" + mangSo + "]<br>");

  for (let i = 0; i < mangSo.length - 1; i++) {
    for (let j = i + 1; j < mangSo.length; j++) {
      if (mangSo[i] < mangSo[j]) {
        temp = mangSo[j];
        mangSo[j] = mangSo[i];
        mangSo[i] = temp;
      }
    }
  }
  document.write("Giá trị của mảng sau khi sort: [" + mangSo + "]<br>");
}
