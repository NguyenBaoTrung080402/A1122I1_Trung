function onCheck(){
    let a = parseInt(document.getElementById("input").value);
    if (a > 0){
        document.getElementById("text").innerText = a +" là số lớn hơn 0"
    }else if(a<0){
        document.getElementById("text").innerText = a +" là số bé hơn 0"
    }else{
        document.getElementById("text").innerText ="không có giá trị để check"
    }
}