function myFunction(){
    let C = prompt("Nhập nhiệt độ vào đây")
    if(C < 100 && C >45){
        alert("Ơ người sao hoả nè ! Nếu bạn muốn làm người trái đất thì giảm nhiệt độ xuống đi nhá :DD")
    }else if (C > 0 && C < 20 ){
        alert("Ơ cậu ơi cậu chơi đồ ở đâu mà thâm thế, cai nghiện đi nhaa, người bth có 36,3 - 37,1°C thôi")
    }else{
        alert("Bạn có ổn với thân nhiệt đó " + C+"°C" + " không ?");
    }
}