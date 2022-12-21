function done(){
    let porn = +document.getElementById("index").value;
    (porn < 16) ? document.getElementById("text").innerText= "chưa đủ" : document.getElementById("text").innerText= "đủ"
}
function handle(e){
    //sử dụng bàn phím
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs
        let porn = +document.getElementById("index").value;
        (porn < 16) ? document.getElementById("text").innerText= "chưa đủ" : document.getElementById("text").innerText= "đủ"
    }
}