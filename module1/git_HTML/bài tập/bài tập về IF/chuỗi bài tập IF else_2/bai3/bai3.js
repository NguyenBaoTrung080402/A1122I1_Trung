function myFunction(){
    let a = parseInt(document.getElementById("hehe").value);
    if(a > 0){
        document.getElementById("text").innerText = "Diện tích hình vuông: "+a*a;
    }else {
        document.getElementById("text").innerText = " Vui lòng nhập giá trị !"
    }
}