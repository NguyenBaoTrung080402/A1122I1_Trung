function Search(){
    
    let word_EN = [
        "city",
        "value",
        "switch",
        "case"
    ]
    let word_VN = [
        "Thành phố",
        "giá trị",
        "Công tắc điện",
        "trường hợp"
    ]
    let word = document.getElementById("ecec").value;
    let position  = word_EN.indexOf(word);
    if(position !== -1){
        document.getElementById("text").innerText = "Result: " +word_VN[position];
    }else{
        document.getElementById("text").innerText = "The word you enter is not valid!"
    }
}