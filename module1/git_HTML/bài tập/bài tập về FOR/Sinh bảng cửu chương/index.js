function bangcuuchuong()
{
document.write("<table border=1 width=100%>")
    for(let i=1;i<=9;i++) { 
	document.write("<tr>")
    for(let n=2;n<=9;n++)   
    document.write("<td>" +n + "x" + i +"="+ (n*i));
    document.write("</td>");
	document.write("</tr>")
    }
document.write("")
}