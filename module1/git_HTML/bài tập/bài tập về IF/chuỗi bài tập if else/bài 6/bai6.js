function myFunction(){
    let giaban = parseInt(document.getElementById("cost").value);
    if(giaban <= 2000000){
        document.getElementById("text").innerText = "Tổng trung bình hoa hồng: " + giaban*0.03;
    }else if(giaban >= 2000000 && giaban <= 5000000){
        document.getElementById("text").innerText = "Tông trung bình hoa hồng: " + giaban*0.05;
    }else{
        document.getElementById("text").innerText = " Vui lòng nhập giá trị của đơn hàng !"
    }
}