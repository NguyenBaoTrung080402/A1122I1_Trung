function pointAVG() {
  let point1 = +document.getElementById("test").value;
  let point2 = +document.getElementById("test2").value;
  let point3 = +document.getElementById("finalEX").value;
  let avg = (point1 + point2 + point3) / 3;

  if (avg > 6 && avg < 7.5 ) {
    document.getElementById("text").innerText = "Học lực trung bình: " + avg;
  } else if (avg >= 7.5 && avg < 8.5) {
    document.getElementById("text").innerText = "Học lực khá " + avg ;
  } else if (avg >= 8.5 && avg <= 10) {
    document.getElementById("text").innerText = "Học lực gioi " + avg;
  } else if(avg > 0 && avg < 6){
    document.getElementById("text").innerText =
      "chúc mừng bạn đã quay trúng vào vé học lại từ codeGym, bây giờ bạn có thể lên văn phòng kí giấy xác nhận đóng học phí và có thể ra về";
  }else{
    document.getElementById("text").innerText = "Vui lòng nhập lại giá trị từ 0 -> 10"
  }
}

