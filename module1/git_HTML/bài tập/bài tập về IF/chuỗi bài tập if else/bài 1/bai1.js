function result(){
    let check = +document.getElementById("inputA").value;
    let check2 = +document.getElementById("inputB").value;
    let sum = check / check2;
    if(sum == 0){
        document.getElementById("text").innerText = sum + " :chia hết cho nhau"
    }else{
        document.getElementById("text").innerText = sum + " :Hai giá trị không chia hết cho nhau"
    } 
}