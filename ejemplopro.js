var cantidad=0;
var j=1000;


cantidad=parseFloat(prompt("Ingrese la cantidad "));
while (cantidad<1000 || cantidad>100000)
{
    cantidad=parseFloat(prompt("Ingrese la cantidad de dolares arriba de 1000"));
}

document.write("_________________________________________________________ <br> <br>");
document.write("DOLARES_________________ BTC ______________________ETH <br>");
document.write("____________________________________________________________ <br>");

while(j<=cantidad)
{
    document.write("$"+j+"------------------"+j/57810+"-----------------"+j/3062);
    document.write("<br>")
    document.write("<br>")
    j++;
}
document.write("________________________________________________________________________")