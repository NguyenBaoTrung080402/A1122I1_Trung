function bai7(){
    let mangSo = [], V;
    let a = new Array();
    a = +Number(prompt("nhập vào giá trị phần tử có trong mảng: "))
    for (let i = 0; i < a; i++) {
       mangSo[i] = Number(prompt("Nhập vào "+ a +" giá trị của mảng")) 
    }
    document.write("Giá trị của mảng: [" + mangSo + "]<br>")
    V = +Number(prompt("Nhập vào số nguyên V"))
    let position = mangSo.indexOf(V)
    if(position !== -1){
        document.write("V is in the array");
        mangSo.splice(position, 1);
        document.write("Giá trị của mảng sau khi xoá: [" + mangSo + "]<br>")
    }else{
        document.write("V is not in the array");
    }
}