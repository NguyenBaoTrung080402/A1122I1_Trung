function myFunction(){
    let age = +document.getElementById("canhA").value;
    if (age > 120 || age <0){
        document.getElementById("text").innerText = "What is this ?? This not age of people. Enter again "
    }else if(age < 120 && age > 0){
        document.getElementById("text").innerText = " Yes, that right! This is age of a people"
    }else{
        document.getElementById("text").innerText = "Enter value, please !"
    }

}