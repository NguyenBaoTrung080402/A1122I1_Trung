let imgOjb = null;
imgOjb = document.getElementById("myImage");

function init(){
    imgOjb = document.getElementById("myImage");
    imgOjb.style.position ='relative';
    imgOjb.style.left = '0px';

}
function clickMe(){
    imgOjb.style.left = parseInt(imgOjb.style.left) + 10 +'px';
}
window.onload = init;