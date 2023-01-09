function bai6() {
  let mang = new Array(prompt("Nhập vào một chuỗi"));
  let mangFix = [];

  document.write("Mảng gồm [" + mang + "]<br>");
  for (let i = 0; i < mang.length; i++) {
    for (let j = 0; j < mang[i].length; j++) {
      if (mang[i][j] == "-") {
        mang[i][j] = "_";
        mangFix.push("_");
      } else {
        mangFix.push(mang[i][j]);
      }
    }
  }
  document.write("Mảng sửa gồm [" + mangFix.join("") + "]<br>");
}
