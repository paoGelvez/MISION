
export function getAllUser(body) {

const totalPadre = document.createElement('div')
totalPadre.className='totalPadre'


const padre = document.createElement('div')
padre.className='padre'


const table = document.createElement('table')

const thead = document.createElement('thead')

const name = document.createElement('th')
name.textContent = "nombre"

const email = document.createElement('th')
email.textContent = "email"

const edad = document.createElement('th')
edad.textContent = "edad"

const editar = document.createElement('th')
editar.textContent = "editar"


const eliminar = document.createElement('th')
eliminar.textContent = "eliminar"


const tbody = document.createElement('tbody')




function datos() {

 


    body.forEach(element => {
    
        let array = []
        const tr=document.createElement('tr')
            tr.className='tr'

        const name = document.createElement('td')
        name.textContent =element.name
        
        
        const email = document.createElement('td')
        email.textContent =element.email
        
        const edad = document.createElement('td')
        edad.textContent =element.age

        const btnEditar = document.createElement('input')
        btnEditar.type='button'
        btnEditar.className='btnEditar'
        btnEditar.id=element.id
        btnEditar.value ='EDITAR'

        const editar = document.createElement('td')
        editar.appendChild(btnEditar)

        const btnEliminar = document.createElement('input')
        btnEliminar.type='button'
        btnEliminar.className="btnEliminar"
        btnEliminar.id=element.id
        btnEliminar.value ='ELIMINAR'

        const eliminar = document.createElement('td')
        eliminar.appendChild(btnEliminar)
       

    array.push(name,email,edad,editar,eliminar)
    array.forEach(element => {
        tr.appendChild(element)

    });
    
    tbody.appendChild(tr)
        });


}
datos()
    thead.appendChild(name)
    thead.appendChild(email)
    thead.appendChild(edad)
    thead.appendChild(editar)
    thead.appendChild(eliminar)
    
    table.appendChild(thead)
    table.appendChild(tbody)
   

padre.appendChild(table)
totalPadre.appendChild(padre)





    

return totalPadre
}

