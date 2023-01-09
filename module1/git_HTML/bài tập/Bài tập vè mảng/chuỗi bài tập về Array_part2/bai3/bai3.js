function bai3() {
  let mang = [4, "Hello", 9, "Bông zua", 18, 22, "avx", 1];
  let dem = 0;
  document.write("Mảng gồm = [" + mang + "]<br>");
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] % 2 == 0 || mang[i] % 2 == 1) {
      dem++;
    }
  }
  document.write("Các ký tự số trong mảng là " + dem + " số<br>");
}
