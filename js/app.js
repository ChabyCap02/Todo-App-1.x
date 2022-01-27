let listaNotas = [
    
];

let containerNotes = document.getElementById('container-notes__ul')

let titleNote = document.getElementById('note-title');
let descriptionNote = document.getElementById('note-description')
let colorNote = document.getElementById('note-color')
let btnSubmit = document.getElementById('note-submit');

const cargarApp = () => {
    pintarNotas()
    
}

const crearNota = () => {

    if(titleNote.value != '' && descriptionNote.value != ''){

        listaNotas.push(new Note(titleNote.value,descriptionNote.value,colorNote.value))
    }

    pintarNotas()
    console.log(listaNotas)
    titleNote.value = '';
    descriptionNote.value = '';
    colorNote.value = 1;
}

const pintarNotas = () => {
    containerNotes.innerHTML= ' '
    let opcion = '';
    let listaNotasHTML = [];
    
    index = 0

    for(let i of listaNotas){
        switch(i.nivel){
            case '1':
                opcion = 'border-success';
                break;
            case '2':
                opcion = 'border-warning';
                break;
            case '3':
                opcion = 'border-danger';
                break;
            
        };
        
   
        let notaHTML = `<li class="container border ${opcion} mt-2 p-2 d-grid position-relative row">
        <div class="container col mt-2">
            <h3>${i.nombre}</h3>
            <p>${i.description}</p>
        </div>\
        <div class="container text-center"><button class="btn" onclick=(editarNota(${index}))><i class="bi bi-pencil-square"></i></button>
        <button class="btn" onclick=(eliminarNota(${index++}))><i class="bi bi-trash"></i></button></li></div>`
    
        listaNotasHTML.push(notaHTML)
    } 
    
    listaNotasHTML.forEach(element => {
        containerNotes.innerHTML +=element
    });
     

}
const eliminarNota = (index) =>{
    listaNotas.splice(index,1)
    pintarNotas()
}

const editarNota = (element) => {
    let newDescription = prompt('Nueva Description')
    listaNotas[element]._description = newDescription;
    pintarNotas();

}
