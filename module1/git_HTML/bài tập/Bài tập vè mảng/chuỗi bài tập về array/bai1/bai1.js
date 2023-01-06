function bai1() {
    //khai báo mảng và nhập giá trị từ ngươi dùng 
  let mangso = [];
  let mangSoLonhon10 = [];
  let a = new Array();
  a = prompt("Nhập số lượng phần từ của mảng: ")
  for (let i = 0; i < a; i++) {
    mangso[i] = Number(prompt("Nhập vào mảng số: "));
  }
  document.writeln("Mảng số = [" + mangso + "]<br/>");
  for (let i = 0; i < mangso.length; i++) {
    if(mangso[i]>10){
        mangSoLonhon10.push(mangso[i]);
    }
  }
   document.write("Các phần tử >= 10 trong mangso["+mangSoLonhon10+"]<br>")
}
