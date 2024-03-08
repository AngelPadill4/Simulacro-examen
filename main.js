let arraylista = []

const inpedirrecarga = (event) =>{
event.preventDefault()

let nombreProducto = document.getElementById("nombreProducto")
let cantidadProducto = document.getElementById("cantidadProducto")

let datosObjeto = {
    nombre: nombreProducto.value, cantidad: cantidadProducto.value, estadocompra: `<input type="checkbox">`
}

arraylista.push(datosObjeto)
mostracompras()


}

const mostracompras = () =>{

    let salidatabla = document.getElementById("salidaTabla")

    salidatabla.innerHTML =""

    arraylista.map((datosObjeto)=>{

    salidatabla.innerHTML +=
    `
    
    <tr>
    <td>${datosObjeto.nombre}</td>
    <td>${datosObjeto.cantidad}</td>
    <td>${datosObjeto.estadocompra}</td>
    </tr>

    `

    
})
    
}