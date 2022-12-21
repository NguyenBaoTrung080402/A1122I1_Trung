function done(){
    let Weight = parseInt(document.getElementById("Weight").value);
    let Height = parseInt(document.getElementById("Height").value);
    let bmi = Weight / (Height*Height);
    if (bmi <18.5) {
        document.getElementById("text").innerText = "Underweight";
    }else if(bmi < 25.0){
        document.getElementById("text").innerText = "Normal";
    }else if(bmi < 30.0){
        document.getElementById("text").innerText = "OverWeight";
    }else{
        document.getElementById("text").innerText = "Obese";
    }
    
}