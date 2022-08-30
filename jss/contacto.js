let clientes = [];

let formulario;

let imputNombre;
let imputApellido;
let imputTelefono;
let imputDireccion;

class Cliente {
    constructor(nombre,apellido,telefono,direccion){
        this.nombre =nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}

function inicializarElementos(){
    formulario = document.getElementById("formulario");
    imputNombre = document.getElementById("nombre");
    imputApellido = document.getElementById("apellido");
    imputTelefono = document.getElementById("telefono");
    imputDireccion = document.getElementById("direccion")
}
inicializarElementos();

formulario.onsubmit = (event) => {
    event.preventDefault();

    let nuevoCliente = new Cliente(inputNombre.value, imputApellido.value, imputTelefono.value, imputDireccion.value)
    clientes.push(nuevoCliente)
    agregarClientes()
    formulario.reset()
    
}

function limpiarTabla(){
    while(tabla.rows.lenght > 1){
        tabla.deleteRow(1)
    }
}
function agregarClientes(){
    clientes.forEach(element => {
        let tabla = document.querySelector(".tabla")
        let filaTabla = document.createElement("tr")

        filaTabla.innerHTML = `
        <td>${producto.nombre} </td>
        <td>${producto.apellido} </td>
        <td>${producto.telefono} </td>
        <td>${producto.direccion} </td>
        `

    tabla.append(filaTabla)
    });
}
 agregarClientes();



// sweet alert
// function manejeElclick(){
//     Swal.fire({
//         title: 'Información enviada',
//         text: 'Nos comunicarémos a la brevedad',
//         icon: 'success',
//         confirmButtonText: 'FINALIZAR',
//     });
// }