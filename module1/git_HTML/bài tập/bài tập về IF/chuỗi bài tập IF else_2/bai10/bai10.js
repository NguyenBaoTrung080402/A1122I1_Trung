function myFunction() {
    let a = +document.getElementById("canhA").value;
    let b = +document.getElementById("canhB").value;
    let Sum = a*b;  
    if( 50 >= Sum > 0) {
        document.getElementById("text").innerText = "Tổng số điện đã sử dụng: " + Sum 
        + "\n Số điện bạn xài hiện đang ở bậc 1. Tổng tiền bạn cần trả: " + Sum*1678*0.1 ;
    }else if (100 >= Sum > 51){
        document.getElementById("text").innerText = "Tổng số điện đã sử dụng: " + Sum 
        + "\n Số điện bạn xài hiện đang ở bậc 2. Tổng tiền bạn cần trả: " + (Sum*1678 + Sum*1734)*0.1 ;
    }else if(200 >= Sum > 101){
        document.getElementById("text").innerText = "Tổng số điện đã sử dụng: " + Sum 
        + "\n Số điện bạn xài hiện đang ở bậc 3. Tổng tiền bạn cần trả: " + (Sum*1678 + Sum*1734 + Sum*2014)*0.1 ;
    }else if(300 >= Sum > 201){
        document.getElementById("text").innerText = "Tổng số điện đã sử dụng: " + Sum 
        + "\n Số điện bạn xài hiện đang ở bậc 4. Tổng tiền bạn cần trả: " + (Sum*1678 + Sum*1734 + Sum*2014 + Sum*2536)*0.1 ;
    }else if(301 >= Sum > 400){
        document.getElementById("text").innerText = "Tổng số điện đã sử dụng: " + Sum 
        + "\n Số điện bạn xài hiện đang ở bậc 5. Tổng tiền bạn cần trả: " + (Sum*1678 + Sum*1734 + Sum*2014 + Sum*2536+ Sum*2834)*0.1 ;
    }else if(Sum > 401){
        document.getElementById("text").innerText = "Tổng số điện đã sử dụng: " + Sum 
        + "\n Số điện bạn xài hiện đang ở bậc 6. Tổng tiền bạn cần trả: " + (Sum*1678 + Sum*1734 + Sum*2014 + Sum*2536 + Sum*2927)*0.1 ;
    }else {
        document.getElementById("text").innerText = "Nhập lại đi bro"
    }
}