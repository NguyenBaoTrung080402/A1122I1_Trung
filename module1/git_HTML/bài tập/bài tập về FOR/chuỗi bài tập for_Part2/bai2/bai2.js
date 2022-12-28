function myFunction(){
    const n = parseInt(document.getElementById("input").value);
    let  giaiThua = 1;
    for (let i = 1; i <= n; i++) {
        giaiThua = giaiThua *i;

    }
    document.getElementById("text").innerText = "Giai thừa của " + n + " là: "+ giaiThua;
}