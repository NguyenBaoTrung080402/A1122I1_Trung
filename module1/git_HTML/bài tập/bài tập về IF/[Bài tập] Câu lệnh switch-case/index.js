function Day(){
    let month = parseInt(document.getElementById("month").value);
    switch (month) {
        case 1:
            document.getElementById("text").innerText = "January has 31 days" 
            break;
        case 2:
            document.getElementById("text").innerText = "February has 28 or 29 days" 
            break;
        case 3:
            document.getElementById("text").innerText = "March has 31 days" 
            break;
        case 4:
            document.getElementById("text").innerText = "April has 30 days" 
            break;
        case 5:
            document.getElementById("text").innerText = "May has 31 days" 
            break;
        case 6:
            document.getElementById("text").innerText = "June has 30 days" 
            break;
        case 7:
            document.getElementById("text").innerText = "July has 31 days" 
            break;
        case 8:
            document.getElementById("text").innerText = "August has 31 days" 
            break;
        case 9:
            document.getElementById("text").innerText = "September has 30 days" 
            break;
        case 10:
            document.getElementById("text").innerText = "October has 31 days" 
            break;
        case 11:
            document.getElementById("text").innerText = "November has 30 days" 
            break;
        case 12:   
            document.getElementById("text").innerText = "December has 31 days" 
            break;
        default:
            document.getElementById("text").innerText = "Enter again" 
            break;
    }
}