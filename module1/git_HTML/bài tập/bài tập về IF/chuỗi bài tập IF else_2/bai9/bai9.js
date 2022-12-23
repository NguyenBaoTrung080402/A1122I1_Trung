function myFunction() {
  let a = +document.getElementById("canhA").value;
  let b = +document.getElementById("canhB").value;
  let c = +document.getElementById("canhC").value;
  if (a < 0 || b < 0 || c < 0) {
    document.getElementById("text").innerText = "Ba cạnh tam giác phải lớn hơn 0";
  } else if (a + b > c && b + c > a && a + c > b) {
    document.getElementById("text").innerText = "Khá hơn rồi đấy, đây mới là 1 tam giác";
  }else {
    document.getElementById("text").innerText = "Nhập lại đi cậu ơi :DD"
  }
}
