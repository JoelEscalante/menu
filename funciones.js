var diassemana =["lunes" ,"martes" ,"miercoles" ,"jueves" ,"viernes" ,"sabado" ,"domingo"];

function semana()
{
    for (let index = 0; index < diassemana.length; index++) {
        document.write(diassemana[index],"<br>");
    }

}

///LLamar la funcion



/*dias.length da el tamaño del arreglo en este caso 7

para imprimir el contenido del arreglo se tiene que llamar la variable en este caso diasemana y dentro de corchete index,
 para que comience en la posicion 0 hasta el final
*/


//crear una funcion que imprima 10 veces una frase
var frase="HEY BUENAS A TODOS GUAPISIMOS AQUI VEGETTA777"
var k=1; //inicializacndo
function diez()
{
while(k<=10)//comprobando
{
document.write(frase,"<br> <br>");
k++;
}
}


///Crear una funcion queimprima los valores de 10,000 hasta 100,000, en rangos de 1000
var inicio=10000;
var fin=1000000

function serie1()
{
    for (let index = inicio ; index <=fin; index=index+1000) {
        document.write(index,"<br>")
    }
}


///Crear una funcion queimprima los valores de 10,000 hasta 100,000, en rangos de 1000
var inicio=10000;
var fin=1000000

function serie()
{
    for (let index = fin ; index>inicio; index=index-1000) {
        document.write(index,"<br>")
    }
}


