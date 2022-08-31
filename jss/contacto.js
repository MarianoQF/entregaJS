let clientes = [];

let formulario;
let inputNombre;
let inputApellido;
let inputTelefono;
let inputDireccion;
let tabla;

class Cliente{
    constructor(nombre,apellido,telefono,direccion){
        this.nombre =nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
    }
};

function inicializarElementos(){
    formulario = document.getElementById('formulario');
    inputNombre = document.getElementById('nombre');
    inputApellido = document.getElementById('apellido');
    inputTelefono = document.getElementById('telefono');
    inputDireccion = document.getElementById('direccion');
    tabla = document.getElementById('tablaProductos');
};
inicializarElementos()

// let formulario = document.getElementById("formulario");
formulario.onsubmit = (event) => {
    event.preventDefault();
    let nuevoCliente = new Cliente(inputNombre.value, inputApellido.value,inputTelefono.value,inputDireccion.value)
    clientes.push(nuevoCliente)
    limpiarTabla();
    agregarProductosTabla();
    formulario.reset();
   
}

function limpiarTabla(){
    while(tabla.rows.length > 1){
        tabla.deleteRow(1);
    }
}

function agregarProductosTabla(){
   clientes.forEach(element => {
       let tabla = document.querySelector('.tabla');
       let filaTabla = document.createElement('tr');

       filaTabla.innerHTML = `
       <td>${clientes.nombre}</td>
       <td>${clientes.apellido}</td>
       <td>${clientes.telefono}</td>
       <td>${clientes.direccion}</td>
       `
       tabla.append(filaTabla);
    });
   }
// console.log(agregarProductosTabla);
// let inputNombre = document.getElementById('nombre')
// console.log(inputNombre)
// Función formulario para cargar clientes

// let clientes = [];

// let formulario;
// let imputNombre;
// let imputApellido;
// let imputTelefono;
// let imputDireccion;
// let tabla;
// let errores;

// class Cliente {
//     constructor(nombre,apellido,telefono,direccion){
//         this.nombre =nombre;
//         this.apellido = apellido;
//         this.telefono = telefono;
//         this.direccion = direccion;
//     }
// }

// function inicializarElementos(){
//     formulario = document.getElementById("formulario");
//     imputNombre = document.getElementById("nombre");
//     imputApellido = document.getElementById("apellido");
//     imputTelefono = document.getElementById("telefono");
//     imputDireccion = document.getElementById("direccion");
//     tabla = document.getElementById("tablaProductos");
//     errores = document.querySelector(".errores")
// }
// inicializarElementos();

// formulario.onsubmit = (event) => {
//     event.preventDefault();

//     let nuevoCliente = new Cliente(inputNombre.value, imputApellido.value, imputTelefono.value, imputDireccion.value)
//     if(imputNombre.value != "" && imputApellido.value != "" && imputTelefono.value !="" && imputDireccion.value != ""){

//     clientes.push(nuevoCliente)
//     limpiarTabla();
//     agregarClientes()
//     errores.style.display = "none"
//     formulario.reset()
//     }else{
//         errores.style.display = "block"
//     }
// }

// function limpiarTabla(){
//     while(tabla.rows.lenght > 1){
//         tabla.deleteRow(1)
//     }
// }
// function agregarClientes(){
//     clientes.forEach(element => {
//         let tabla = document.querySelector(".tabla")
//         let filaTabla = document.createElement("tr")

//         filaTabla.innerHTML = `
//         <td>${clientes.nombre} </td>
//         <td>${clientes.apellido} </td>
//         <td>${clientes.telefono} </td>
//         <td>${clientes.direccion} </td>
//         `

//     tabla.append(filaTabla)
//     });
// }
//  agregarClientes();

// Funcion sweet alert
function manejeElclick(){
    Swal.fire({
        title: 'Cliente creado',
        text: 'Gracias por confiar en nosotros',
        icon: 'success',
        confirmButtonText: 'FINALIZAR',
    });
}
manejeElclick();