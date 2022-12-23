function myFunction() {
    let money = +document.getElementById("canhA").value;
    let month = +document.getElementById("canhB").value;
    let interest_M = +document.getElementById("canhC").value;
    let Sum = money * Math.pow(1+ interest_M,month);
    document.getElementById('display').innerText = "Tổng lãi ngân hàng là:: " + Sum;
}