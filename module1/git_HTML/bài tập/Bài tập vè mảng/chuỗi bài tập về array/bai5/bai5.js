function bai5(){
    let mangSo = []
    mangSoAm = [];
    let a = new Array();
    a = Number(prompt("Nhập só lượng phần tử trong mảng "))
    for (let i = 0; i < a; i++) {
        mangSo[i] = Number(prompt("Nhập "+ a +" giá trị của mảng"))
    }
    document.write("Giá trị của mảng: [" + mangSo + "]<br>");
    for (let i = 0; i < mangSo.length; i++) {
        if(mangSo[i] < 0){
            mangSoAm.push(mangSo[i])
        }  
    }
    document.write("Mảng các số âm gồm "+mangSoAm.length +" phần tử mảng số âm: ["+mangSoAm+"]<br>")
}