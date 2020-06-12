document.getElementById('cargar').addEventListener('click', cargarDatos);


function cargarDatos(){
    // crear un objeto xmlnhttprequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexion
    xhr.open('GET', 'datos.txt', true);

    xhr.onreadystatechange = function(){

        console.log(`Estado ${this.readyState}`);

        if(this.readyState === 4 && this.status === 200){
            //console.log(this.responseText);

        }
    }
    
    // ready status
    /*
    0 - No iniciado
    1.-Conexion establecida
    2.-Recivido
    3.-Prosesado
    4.-Respuesta lista
    */
    //Envia el request
    xhr.send();
}