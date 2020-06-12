const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarAPI);



function cargarAPI() {
    // crear el objecto
    const xhr = new XMLHttpRequest();
    // abrir la conexion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    // carga y lee datos
    xhr.onload = function() {
        if(this.status === 200) {
            const respuesta = JSON.parse( this.responseText );

            let contenido = '';
            respuesta.forEach(function(post) {
                contenido+= `   
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;

            });
            document.getElementById('listado').innerHTML = contenido;


        }
    }

    xhr.send();

}