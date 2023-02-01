function footToMeter(foot) {
    let meter;
   foot = +document.getElementById("feet").value;
  if (foot < 0) {
    alert("Enter again");
  } else {
    meter = 0.305 * foot;
    document.getElementById("text").innerText = "Giá trị sau khi đổi: " + meter;
  }
  
}
function meterToFoot(meter) {
  let foot ;
  meter = +document.getElementById("meter").value;
  if (meter < 0) {
    alert("Enter again");
  } else {
    foot = 3.279 * meter;
  }
  document.getElementById("text").innerText = "Giá trị sau khi đổi: " + foot;
}
