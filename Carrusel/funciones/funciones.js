lista=[{"id":1,"imagen":"Imagenes/Assassins.jpg"},
{"id":2,"imagen":"../Imagenes/Assassins1.jpg"},
{"id":3,"imagen":"../Imagenes/call.jpg"},
{"id":4,"imagen":"../Imagenes/call1.jpg"},
{"id":5,"imagen":"../Imagenes/diosGuerra.jpg"},
{"id":6,"imagen":"../Imagenes/diosGuerra1.jpg"},
{"id":7,"imagen":"../Imagenes/mortalkombat1.jpg"},
{"id":8,"imagen":"../Imagenes/mortalkombat.jpg"},
{"id":9,"imagen":"../Imagenes/residen.jpg"},
{"id":10,"imagen":"../Imagenes/residen1.jpg"}]

Imagenes = [0];
var posActual=0;

function inicio(){
    for (i=0 ; i<7; i++){
        
        Imagenes[i] = Math.floor(Math.random() * (11));    
        
        
    }
    posActual = 0;
    
    verificar();
    imprimir();
}

//creo una función que muestre la imagen en una section ya creada en el archivo html,
function imprimir(){
    console.log(Imagenes);
    //creo codigo html como texto tomando el valor de la lista.
    var texto = "<img src="+lista[Imagenes[posActual]].imagen+">";
    //ingresa el codigo HTML al section con id imagen.
     window.document.getElementById("imagen").innerHTML =texto;
    
}
function verificar(){
    //Verfica si ya se esta en la ultima imagen para deshabilitar el boton siguiente
    if(posActual==4){
         window.document.getElementById("btn_siguiente").disabled = true;
        window.document.getElementById("btn_anterior").disabled = false;
   
    }
    //conpruebo si se está mostrando la primera imagen par deshabilitar el boton anterior
    else if(posActual == 0){
              window.document.getElementById("btn_anterior").disabled = true;
            window.document.getElementById("btn_siguiente").disabled = false;
   
    }else{
         window.document.getElementById("btn_siguiente").disabled = false;
              window.document.getElementById("btn_anterior").disabled = false;
        
   
    }
}

function anterior(){
    posActual--;
    verificar();
    imprimir();
    
}
function siguiente(){
    
    posActual++;
    verificar();
    imprimir();
    
    
}
    
    