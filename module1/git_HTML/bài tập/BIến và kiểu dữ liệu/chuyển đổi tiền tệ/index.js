function result(){
    let fromCurr = document.getElementById("fromCur").value;
    let toCurr = document.getElementById("toCur").value;
    let RE = parseInt(document.getElementById("Amount").value);
    let Current;

    if(fromCurr == "USD" && toCurr == "USD"){
        Current = RE;
    }else if(fromCurr=="VND" && toCurr =="VND"){
       Current = RE; 
    }
    else if(fromCurr=="USD" && toCurr =="VND"){
        Current = RE*23545;   
    }else if(fromCurr=="VND" && toCurr =="USD"){
        Current = RE*0.000042;  
    }
    document.getElementById("Current").innerText = "Result: "+Current +"VND";
}