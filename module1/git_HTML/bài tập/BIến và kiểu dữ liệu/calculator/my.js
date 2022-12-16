function add(){
    let sum1 = parseInt(document.getElementById("n1").value);
    let sum2 = parseInt(document.getElementById("n2").value);
    let Sum = sum1 + sum2;
    document.getElementById("result").innerText = "Result:"+ Sum
    if(sum1 == null || sum2 == null){
        document.getElementById("result").innerText = "Enter value"
    }
}
function sub(){
    let sum1 = parseInt(document.getElementById("n1").value);
    let sum2 = parseInt(document.getElementById("n2").value);
    let Sum = sum1 - sum2;
    document.getElementById("result").innerText = "Result:"+ Sum
}
function mul(){
    let sum1 = parseInt(document.getElementById("n1").value);
    let sum2 = parseInt(document.getElementById("n2").value);
    let Sum = sum1 * sum2;
    document.getElementById("result").innerText = "Result:"+ Sum
}
function div(){
    let sum1 = parseInt(document.getElementById("n1").value);
    let sum2 = parseInt(document.getElementById("n2").value);
    let Sum = sum1/sum2;
    if(sum1 == 0 || sum2 == 0){
        document.getElementById("result").innerText = "Enter number other than 0"
    }else{
        document.getElementById("result").innerText = "Result:"+ Sum
    }
}