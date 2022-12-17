function submit(){
    let input = document.getElementById("answer").value;
    confirm("bạn có chắc chắn với câu trả lời của mình ?")
    if(input != 'ECMAScript'){
        document.getElementById("ID").innerText = "Didn’t know? ECMAScript!";
    }else {
        document.getElementById("ID").innerText = "ECMAScript! Right"
    }
}