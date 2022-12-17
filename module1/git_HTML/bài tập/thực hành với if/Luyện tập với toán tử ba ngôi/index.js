function itYour(){
    let numA = +document.getElementById("numA").value;
    let numB = +document.getElementById("numB").value;
    let Sum = numA+numB;
    Sum <4 ? 
    document.getElementById("sadBoy").innerText = "Below" : 
    document.getElementById("sadBoy").innerText = "Over";
    
}