//Clase 13 - Librerías
 
let carrito;
if(localStorage.getItem("carrito")!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"));
    //cargarlos en la tabla-Tarea
}else{
    carrito=[];
}
let lista=document.getElementById("milista");
    
//llamada a renderizar
renderizarProductos();
 
function renderizarProductos() {
    for (const producto of productos) {
        lista.innerHTML+=`<li class="col-sm-3 list-group-item">
        <h3> ID: ${producto.id} </h3>
        <img src=${producto.foto} width="250" height="250">
        <p> Producto: ${producto.nombre}</p>
        <p><strong> $ ${producto.precio} </strong></p>
        <button class='btn btn-danger' id='btn${producto.id}'>Comprar</button>
        </li>`;
    }
    //eventos
    productos.forEach(producto => {
        //Evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener('click', function() {
            agregarAlCarrito(producto);
        });
    });
}
 
function agregarAlCarrito(productoNuevo) {
    carrito.push(productoNuevo);
    console.log(carrito);
    alert("producto: "+productoNuevo.nombre+" agregado al carro!")
    document.getElementById("tablabody").innerHTML+=`
    <tr>
        <td>${productoNuevo.id}</td>
        <td>${productoNuevo.nombre}</td>
        <td>${productoNuevo.precio}</td>
    </tr>`;
    localStorage.setItem("carrito",JSON.stringify(carrito));
}
 