        //Declarar variables
        let servicio,forma,costo,cliente;
        var  descuento=0.25;
        //captura de datos
        alert("los servicios disponibles son");
        servicio=parseInt(prompt("Ingrese  \n 1-Alisado \n 2-Uñas \n 3-Tintes \n 4-Pedicure \n 5-Maquillaje"));
        while(servicio<1 || servicio>5)
        {
            servicio=parseInt(prompt("Ingrese correctamente  \n 1-para alisado \n 2-Uñas \n 3-Tintes \n 4-Pedicure \n 5-Maquillaje"));
        }

        forma=parseInt(prompt("Ingrese la formad de pago \n 1-Credito \n 2-Efectivo"));
        while(forma<1 || forma>2)
        {
            forma=parseInt(prompt("Ingrese la forma de pago correctamente \n 1-Efectivo \n 2-Credito"));
        }
        
        cliente=parseInt(prompt("Posee tarjeta de cliente frecuente \n 1-Si \n 2-No"));
        while(cliente<1 || cliente>2)
            {
                forma=parseInt(prompt("Vuelva a elegir \n 1-Si \n 2-No"));
            }
        switch(servicio){
            case 1:
                {
                    costo=50;
                    break;
                }
            case 2:
                {
                    costo=25;
                    break;
                }
            case 3:
                {
                    costo=40;
                    break;
                }

             case 4:
                 {
                        costo=20;
                        break;
                  }
             case 5:
                 {
                     costo=30;
                     break;
                 }

        }
        //impresion 
        if(forma==1 && servicio==1 && cliente==1)
        {
            document.write("usted se hizo un alisado <br>")      
            document.write("usted ha cancelado con tarjeta de credito <br>")
            document.write("El costo inicial del servicioi es de "+costo+"<br>")
            document.write("Se le hara un cargo del 10%"+(costo*0.10)+"<br>");
            document.write(" El pago total sera de: "+(costo*1.20).toFixed(2)+"<br>");
            document.write("El descuento con tarjeta de cliente frecuente es : "+(costo*1.20)*0.75.toFixed(2))
        }
        else if(forma==1 && servicio==1 && cliente==2)
        {
            
            document.write("usted se hizo un alisado <br>")      
            document.write("usted ha cancelado con tarjeta de credito <br>")
            document.write("El costo inicial del servicioi es de "+costo+"<br>")
            document.write("Se le hara un cargo del 10%"+(costo*0.10).toFixed(2)+"<br>");
            document.write(" El pago total sera de: "+(costo*1.20).toFixed(2));
            
        }
        else if(forma==1 && servicio==2 && cliente==1){
            document.write("usted se hizo un uñas <br>")      
            document.write("usted ha cancelado con tarjeta de credito <br>")
            document.write("El costo inicial del servicioi es de "+costo+"<br>")
            document.write("Se le hara un cargo del 10%"+(costo*0.10)+"<br>");
            document.write(" El pago total sera de: "+(costo*1.20).toFixed(2)+"<br>");
            document.write("El descuento con tarjeta de cliente frecuente es : "+(costo*1.20)*0.75.toFixed(2))
        }
        else if(forma==1 && servicio==2 && cliente==2){
            document.write("usted se hizo un uñas <br>")      
            document.write("usted ha cancelado con tarjeta de credito <br>")
            document.write("El costo inicial del servicioi es de "+costo+"<br>")
            document.write("Se le hara un cargo del 10%"+(costo*0.10)+"<br>");
            document.write(" El pago total sera de: "+(costo*1.20).toFixed(2));

        }
        else if(forma==1 && servicio==3 && cliente==1){
            document.write("usted se hizo un tintes <br>")      
            document.write("usted ha cancelado con tarjeta de credito <br>")
            document.write("El costo inicial del servicioi es de "+costo+"<br>")
            document.write("Se le hara un cargo del 10%"+(costo*0.10)+"<br>");
            document.write(" El pago total sera de: "+(costo*1.20).toFixed(2)+"<br>");
            document.write("El descuento con tarjeta de cliente frecuente es : "+(costo*1.20)*0.75.toFixed(2))
        } 
        else if(forma==1 && servicio==3 && cliente==2){
            document.write("usted se hizo un tintes <br>")      
            document.write("usted ha cancelado con tarjeta de credito <br>")
            document.write("El costo inicial del servicioi es de "+costo+"<br>")
            document.write("Se le hara un cargo del 10%"+(costo*0.10)+"<br>");
            document.write(" El pago total sera de "+(costo*1.10));
        } 
        else if(forma==1 && servicio==4 && cliente==1){
            document.write("usted se hizo un Pedicure <br>")      
            document.write("usted ha cancelado con tarjeta de credito <br>")
            document.write("El costo inicial del servicioi es de "+costo+"<br>")
            document.write("Se le hara un cargo del 10% "+(costo*0.10)+"<br>");
            document.write(" El pago total sera de: "+(costo*1.20).toFixed(2)+"<br>");
            document.write("El descuento con tarjeta de cliente frecuente es : "+(costo*1.20)*0.75.toFixed(2))
        } 
        else if(forma==1 && servicio==4 && cliente==2){
            document.write("usted se hizo un Pedicure <br>")      
            document.write("usted ha cancelado con tarjeta de credito <br>")
            document.write("El costo inicial del servicioi es de "+costo+"<br>")
            document.write("Se le hara un cargo del 10%"+(costo*0.10)+"<br>");
            document.write(" El pago total sera de "+(costo*1.10));
        } 
        else if(forma==1 && servicio==5 && cliente==1){
            document.write("usted se hizo un maquillaje <br>")      
            document.write("usted ha cancelado con tarjeta de credito <br>")
            document.write("El costo inicial del servicioi es de "+costo+"<br>")
            document.write("Se le hara un cargo del 10% "+(costo*0.10)+"<br>");
            document.write(" El pago total sera de: "+(costo*1.20).toFixed(2)+"<br>");
            document.write("El descuento con tarjeta de cliente frecuente es : "+(costo*1.20)*0.75.toFixed(2))
        } 
        else if(forma==1 && servicio==5 && cliente==2){
            document.write("usted se hizo un maquillaje <br>")      
            document.write("usted ha cancelado con tarjeta de credito <br>")
            document.write("El costo inicial del servicioi es de "+costo+"<br>")
            document.write("Se le hara un cargo del 10%"+(costo*0.10)+"<br>");
            document.write(" El pago total sera de "+(costo*1.10));
        }

        //Efectivo forma pago
        else if(forma==2 && servicio==1)
        {
            document.write("usted se hizo un alisado <br>"); 
            document.write(" El pago total sera de "+(costo));
        }
        else if(forma==2 && servicio==2)
        {
            document.write("usted se hizo un uñas<br>");     
            document.write(" El pago total sera de "+(costo));
        }
        else if(forma==2 && servicio==3)
        {
            document.write("usted se hizo un tinte <br>");    
            document.write(" El pago total sera de "+(costo));
        }
        else if(forma==2 && servicio==4)
            {
                document.write("usted se hizo un Pedicure <br>");     
                document.write(" El pago total sera de "+(costo));
            }
      else if(forma==2 && servicio==5)
            {
                    document.write("usted se hizo un Maquillaje <br>");     
                    document.write(" El pago total sera de "+(costo));
             }
        