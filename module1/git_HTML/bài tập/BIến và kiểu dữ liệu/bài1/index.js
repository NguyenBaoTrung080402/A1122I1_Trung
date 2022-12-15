function result(){
    let ly = parseInt(document.getElementById("ly").value) ;   
    let hoa = parseInt(document.getElementById("hoa").value);
    let Sinh = parseInt(document.getElementById("Sinh").value);
    let result1 = (ly+hoa+Sinh)/3; 
    document.write("Điểm trung bình: " + result1);
    document.write("</br>")
    let tb = ly+hoa+Sinh;
    document.write("Tổng điểm: "+ tb);
}