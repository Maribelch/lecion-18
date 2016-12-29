function stringMultiplicar(n) {
    var r1;
    var salida="";
    for( var i=1; i<=10; i++)
        {
           r1=n*i;
            salida=salida+n+"x"+i+"="+r1;
            if((i+1)<=10)
            {
              salida = salida+"/" ;
            }
        }
     return salida;
  
}