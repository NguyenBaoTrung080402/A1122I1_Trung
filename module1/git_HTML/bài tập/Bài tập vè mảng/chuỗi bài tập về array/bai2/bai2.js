function bai2(){
    let giaTri = [];
    let MAX = 0, viTri = 0;
    for (let i = 0; i < 10; i++) {
        giaTri[i] = Number(prompt("Nhập phần tử trong mảng"));
    }
    document.writeln("Mảng số = [" + giaTri + "]<br/>");
    for (let i = 0; i < giaTri.length; i++) {
        if(giaTri[i] > MAX){
        MAX = giaTri[i];
        viTri = i;
        }
    }
    document.write("Phần tử lớn nhất trong mảng là "+ MAX + " tại giaTri["+viTri+"]")
}