function bai2(){
    let mangSo = [];
    let a = new Array();
    a = +Number(prompt("Nhập giá trị của mảng"))
    for (let i = 0; i < a; i++) {
        mangSo[i] = prompt("Nhập vào "+a+" giá trị của mảng")
    }
    document.write("Giá trị của mảng: [" + mangSo + "]<br>");
    mangSo.reverse();
    document.write("Giá trị sau khi nối: " +mangSo.join(""))
}