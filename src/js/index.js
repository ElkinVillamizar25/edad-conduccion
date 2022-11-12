var scanf = require('scanf');

console.log('Ingrese Edad');

var capturarEdad = scanf('%d');

console.log(capturarEdad);


    if(capturarEdad >= 18){
        console.log('puede conducir');
    }else{
        console.log('no tiene edad para conducir');
    }




