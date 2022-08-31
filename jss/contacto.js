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
   };

// Funcion sweet alert
function manejeElclick(){
    Swal.fire({
        title: 'Cliente creado',
        text: 'Gracias por confiar en nosotros, nos comunicaremos a la brevedad',
        icon: 'success',
        confirmButtonText: 'FINALIZAR',
    });
}
