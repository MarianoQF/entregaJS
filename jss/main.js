
// Codigo clase 11

// array Listado productos
let productos = [
    {id: 100, nombre: 'pan', precio: 200 },
    {id: 101, nombre: 'leche', precio: 170 },
    {id: 102, nombre: 'coca', precio: 300 },
    {id: 103, nombre: 'birra', precio: 270 },
];

let aux = localStorage.getItem('productosEnCarro');
let productosEnCarro;

if(!aux){
    productosEnCarro = [];
}else{
    productosEnCarro = JSON.parse(aux);
    pintarCarro();
}

// funcion para poner lista de productos en el html
function pintarListado() {
    let aux = '';
    for(let i=0; i < productos.length; i++){
        aux = aux + 
          `<div onclick="meterAlCarro({id: ${productos[i].id}, nombre: '${productos[i].nombre}', precio: ${productos[i].precio}})"style="cursor: pointer;">
            <h4>Nombre: ${productos[i].nombre}</h6>
            <p>$ ${productos[i].precio}</p>
            <p>ID: ${productos[i].id} </p>
           </div>`;
    }

    document.getElementById('div-productos').innerHTML = aux;
};

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
          `<div>
            <h4>Nombre: ${productosEnCarro[i].nombre}</h6>
            <p>$ ${productosEnCarro[i].precio}</p>
            <p>ID: ${productosEnCarro[i].id} </p>
            <button onclick="borrarCosasCarro(${i})">Borrar</button>
           </div>`;
    }

    document.getElementById('div-carrito').innerHTML = aux;
};
debugger;
// FETCH a lista productos
fetch('https://swapi.dev/api/people')
  .then((resinicial) => resinicial.json())
  .then((res) => {
        const miArray = res.results;

        let htmlAux = '';
        for (let i = 0; i < miArray.length; i++){
            htmlAux =
              htmlAux +
              `<div onclick="clickEnProducto(1)>
                <h3>${miArray[i].name}</h3>
                <p>${miArray[i].height}</p>
                <p>${miArray[i].gender}</p>
              </div>`;
        }
        document.getElementById('listadoDeProductos').innerHTML = htmlAux;
        console.log(htmlAux);
    })
    .catch((e) => {s
        console.log(e);
    });

 

