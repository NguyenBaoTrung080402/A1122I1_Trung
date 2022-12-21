



function clickME() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let c = parseInt(document.getElementById("num3").value);
//   if(a > b && a > c){
//     document.getElementById("text").innerText = "giá trị max: " + a;
//   }else if(b > a && b > c){
//     document.getElementById("text").innerText = "giá trị max: " + b;
//   }else if(c > a && c > b){
//     document.getElementById("text").innerText = "giá trị max: " + c;
//   }else{
//     document.getElementById("text").innerText = " Vui lòng nhập giá trị" ;
//   }
   let MAX = a;
   if( MAX <b ){
        MAX = b;
        document.getElementById("text").innerText = "giá trị max: " + MAX;
   }else if (c > MAX){
        MAX = c;
        document.getElementById("text").innerText = "Giá trị max: " + MAX;
   }else{
        document.getElementById("text").innerText = "Giá trị max: " + MAX;
   }
}

