function itYour(){
    let result = document.getElementById("hehe").ariaValueMax;
    switch (result) {
        case 'Edge':
            document.getElementById("sadBoy").innerText = "You've got the Edge!"
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            document.getElementById("sadBoy").innerText = 'Okay we support these browsers too';
            break;
        default:
            document.getElementById("sadBoy").innerText = 'We hope that this page looks ok!';
    }
}
