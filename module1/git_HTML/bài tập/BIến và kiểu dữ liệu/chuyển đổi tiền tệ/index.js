function result(){
    let fromCurr = document.getElementById("fromCur").value;
    let toCurr = document.getElementById("toCur").value;
    let RE = parseInt(document.getElementById("Amount").value);
    let Current;

   if(fromCurr == "USD" && toCurr == "USD"){
        Current = RE;
        document.getElementById("Current").innerText = "Result: "+Current +" USD";
    }else if(fromCurr=="VND" && toCurr =="VND"){
       Current = RE; 
       document.getElementById("Current").innerText = "Result: "+Current +" VND";
    }
    else if(fromCurr=="USD" && toCurr =="VND"){
        Current = RE*23545;   
        document.getElementById("Current").innerText = "Result: "+Current +" VND";
    }else if(fromCurr=="VND" && toCurr =="USD"){
        Current = RE*0.000042;  
        document.getElementById("Current").innerText = "Result: "+Current +" USD";
    }
}
