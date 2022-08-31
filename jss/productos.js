// FETCH a lista productos
fetch('../data.json')
  .then((resinicial) => resinicial.json())
  .then((res) => {
        const miArray = res;
        let htmlAux = '';
        for (let i = 0; i < miArray.length; i++){
            htmlAux =
              htmlAux +
              `<div onclick="meterAlCarro({id: ${miArray[i].id}, nombre: '${miArray[i].name}', precio: ${miArray[i].price}})"style="cursor: pointer;border:2px solid blue;">
                <h3>${miArray[i].name}</h3>
                <p>$: ${miArray[i].price}</p>
                <p>ID: ${miArray[i].id}</p>
              </div>`;
        }
        document.getElementById('listadoDeProductos').innerHTML = htmlAux;
        console.log(htmlAux);
    })
    .catch((e) => {
        console.log(e);
    });
