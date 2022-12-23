function myFunction(){
    let a = +document.getElementById("canhA").value;
    let b = +document.getElementById("canhB").value;
    if(a > 0 && b > 0){
        document.getElementById("text").innerText = "Diện tích hình chữ nhật: "+ a*b;
    }else{
        document.getElementById("text").innerText = "Enter value"
    }
}