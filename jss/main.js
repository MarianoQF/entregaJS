
let aux = localStorage.getItem('productosEnCarro');
let productosEnCarro;

if(!aux){
    productosEnCarro = [];
}else{
    productosEnCarro = JSON.parse(aux);
    pintarCarro();
}

    document.getElementById('div-productos').innerHTML = aux;


pintarListado();

// Funcion que agrega cosas al carro
function meterAlCarro(objetoProducto){
    productosEnCarro.push(objetoProducto);
    localStorage.setItem('productosEnCarro', JSON.stringify(productosEnCarro));
    pintarCarro();
}

// Funcion que saca cosas del carro
function borrarCosasCarro(id){
    productosEnCarro.splice(id, 1);
    localStorage.setItem('productosEnCarro', JSON.stringify(productosEnCarro));
    pintarCarro();
}

// Funcion para agregar los productos al carro
function pintarCarro() {
    let aux = '';
    for(let i=0; i < productosEnCarro.length; i++){
        aux = aux + 
          `<div style="cursor: pointer;border:2px solid green;">
            <h4>Nombre: ${productosEnCarro[i].nombre}</h4>
            <p>$ ${productosEnCarro[i].precio}</p>
            <p>ID: ${productosEnCarro[i].id} </p>
            <button onclick="borrarCosasCarro(${i})">Borrar</button>
           </div>`;
    }

    document.getElementById('div-carrito').innerHTML = aux;
};

// Funcion de toastify borrar producto

// Funcion toastify
function borroProduc(){
    Toastify({
        text:'Producto borrado',
        duration:1000,
        style:{background :'red'}
    }).showToast();
}