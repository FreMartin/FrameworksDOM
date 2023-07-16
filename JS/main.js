


const datos = document.querySelectorAll('input');
const tabla = document.querySelector('table');
var id = 0;
function limpiar(){

    datos.forEach(e =>{
        e.value ='';
    });

}

function editar(){
    let itemsEditar = document.getElementsByClassName("id-"+(id))
    debugger
    console.log(itemsEditar)
    
}

function borrar(){
 /* let itemsEditar = document.getElementsByClassName("id-"+(id))
    itemsEditar[0].remove(); */
}

function agregar(){
 

    if(datos[0].value!="" && datos[1].value!="" && datos[2].value!=""){

        let crearFila = document.createElement('tr')
        let crearCelda = document.createElement('td');
        let btnEditar = document.createElement('button');
        let btnBorrar = document.createElement('button');
        let iconoEditar = document.createElement('i');
        let iconoBorrar = document.createElement('i');
        iconoEditar.classList.add("fa-solid", "fa-pen-to-square", "text-success", "btn-sm", "id-"+id);
        iconoBorrar.classList.add("fa-solid", "fa-trash", "text-danger", "id-"+id);
        crearFila.classList.add("id-"+id);

        datos.forEach(e => {
            let crearCelda = document.createElement('td');
            let txtCelda = document.createTextNode(e.value);
            crearCelda.appendChild(txtCelda);
            crearFila.appendChild(crearCelda); 
        });

        btnEditar.appendChild(iconoEditar);
        btnEditar.addEventListener("click", ()=>{ editar()});
        btnBorrar.appendChild(iconoBorrar);
        btnBorrar.addEventListener("click", ()=>{ borrar()});
        crearCelda.append(btnEditar, btnBorrar);
        crearFila.appendChild(crearCelda);
        tabla.appendChild(crearFila); 
        id++;
        limpiar();
    }else{
        alert("Complete los datos")
    }
}

// insertar en una tabla con icono de edicion y eliminar