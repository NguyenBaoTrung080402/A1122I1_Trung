function bai5() {
    let chuoi1 = prompt("Nhập chuỗi 1")
    let chuoi2 = prompt("Nhập chuỗi 2")
    let sosanh = true
    document.write("Chuỗi 1 : "+chuoi1+" <br>"+ "Chuỗi 2 : "+chuoi2+" <br>")
    if (chuoi1.length != chuoi2.length) {
        document.write("2 chuỗi không giống nhau<br>")
    }else{
        for (let i=0; i<chuoi1.length ; i++){
            for (let j=0; j<chuoi2.length ; j++){
                if (chuoi1[i] == chuoi2[j]){
                    sosanh = true
                }else{
                    sosanh = false
                }
            }
        }
        if (sosanh == false){
            document.write("2 chuỗi không giống nhau<br>")
        }else{
            document.write("2 chuỗi giống nhau<br>")
        }
    }

}