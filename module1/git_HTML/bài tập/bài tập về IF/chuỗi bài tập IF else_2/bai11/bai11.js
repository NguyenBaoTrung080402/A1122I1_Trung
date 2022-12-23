function myFunction() {
  let TN = +document.getElementById("canhA").value;
  if (0 < TN && TN <= 5000000) {
    document.getElementById("text").innerText =
      "Bậc 1: Số thuế cần đóng: " + TN * 0.05;
  } else if (5000000 < TN && TN <= 10000000) {
    document.getElementById("text").innerText =
      "Bậc 2: Số thuế cần đóng: " + TN * 0.1;
  } else if (10000000 < TN && TN <= 18000000) {
    document.getElementById("text").innerText =
      "Bậc 3: Số thuế cần đóng: " + TN * 0.15;
  } else if (18000000 < TN && TN <= 32000000) {
    document.getElementById("text").innerText =
      "Bậc 4: Số thuế cần đóng: " + TN * 0.2;
  } else if (32000000 < TN && TN <= 52000000) {
    document.getElementById("text").innerText =
      "Bậc 5: Số thuế cần đóng: " + TN * 0.25;
  } else if (52000000 < TN && TN <= 80000000) {
    document.getElementById("text").innerText =
      "Bậc 6: Số thuế cần đóng: " + TN * 0.3;
  } else if (TN > 80000000) {
    document.getElementById("text").innerText =
      "Bậc 7: Số thuế cần đóng: " + TN * 0.35;
  } else {
    document.getElementById("text").innerText = "Vui lòng nhập dữ liệu ";
  }
}
