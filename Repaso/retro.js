var si,i,d,sf,n,em,r,descuentu;
var gerente=0, empleado=0;
var r=new Array(n);
function tabla (si,i,d,sf,n){
    document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
			document.write('<table border=2>');
			document.write('<tr><td>Número obrero</td><td>Nombre Obrero</td><td>Cargo</td><td>Salario inicial</td><td>Descuento</td><td>Uniforme</td><td>Salario Final</td></tr>');
            
                n = parseInt(prompt("Ingrese la cantidad de empleados"));
                while(n<=0)
                {
                    n = parseInt(prompt("La cantidad de empleados no puede ser negativa \nIngrese correctamente la cantidad de empleados"));
                }

			for (i=1;i<=n;i++)
				{
					em=prompt('Digite el nombre del obrero número '+i+'');
                     r=prompt('Digite su cargo \n 1-Gerente  \n 2-Empleado')                 
                     if(r==1)
                     {
                        r='Gerente'
                        descuentu=50;
                        gerente++;
                     }
                     else
                     {
                        r='Empleado'
                        descuentu=25;
                        empleado++;
                    }

					si=prompt('Digite el salario inicial','');
                    while(si<=365)
                    {
                        si=prompt('Digite un salario mayor a 365','');
                    }
					d=si*0.05;
					sf=(si-d)-descuentu;
                    sf=sf+n;
                    var total=sf/n;
                    var descuent1=si/d;
                    var descuni=si/descuentu;

					document.write('<tr><td>'+i+'</td><td>'+em+'</td><td>'+r+'</td><td>$'+si+'</td><td>$'+d+'</td><td>$'+descuentu+'</td><td>$'+sf+'</td></tr>');
				}
			document.write('</table>');
            
            document.write('Los monto total de los salarios es '+total.toFixed(2))
            document.write("<br>")
            document.write('Los monto total del descuento1  es '+descuent1.toFixed(2))
            document.write("<br>")
            document.write('Los monto total del descuento por uniforme  es '+descuni.toFixed(2))
            document.write("<br>")
            document.write('El total de Gerentes son '+gerente)
            document.write("<br>")
            document.write('El total de empleados son '+empleado)
}
			