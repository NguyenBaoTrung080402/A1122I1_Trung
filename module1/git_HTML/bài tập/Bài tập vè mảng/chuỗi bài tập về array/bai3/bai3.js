function bai3() {
  let mangSo = [];
  let max = 0,
    viTri = 0,
    tongTB = 0;
    let giaTri = new Array();
    giaTri = Number(prompt("Nhập số lượng phần tử của mảng: "))
    for (let i = 0; i < giaTri; i++) {
        mangSo[i] = Number(prompt("Nhập giá trị của mảng: "))
    }
    document.writeln("Mảng số = [" + mangSo + "]<br/>");
    for (let i = 0; i < mangSo.length; i++) {
        if(mangSo[i] > max){
            max = mangSo[i];
            viTri = i;
        }
        tongTB += mangSo[i]
    }
    tongTB = tongTB/mangSo.length;

    document.writeln("Phần tử lớn nhất trong mảng là "+ max + " tại vị trí thứ ["+viTri+"]<br/>")
    document.write("Tổng trung bình của các số là "+tongTB)
}
