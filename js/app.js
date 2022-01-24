let listaNotas = [
    
];

let containerNotes = document.getElementById('container-notes__ul')

let titleNote = document.getElementById('note-title');
let descriptionNote = document.getElementById('note-description')
let colorNote = document.getElementById('note-color')
let btnSubmit = document.getElementById('note-submit');

const cargarApp = () => {
    containerNotes.innerHTML = ' ';
}

const crearNota = () => {

    if(titleNote.value != '' && descriptionNote.value != ''){

        listaNotas.push(new Note(titleNote.value,descriptionNote.value,colorNote.value))
    }

    pintarNotas()
    console.log(listaNotas)
    titleNote.value = '';
    descriptionNote.value = '';
}

const eliminarNota = (element) =>{
    
    let eliminados = listaNotas.splice(element-1,1)
    console.log(listaNotas);
    console.log(element)
    console.log('eliminados', eliminados)
    pintarNotas()
}

const pintarNotas = () => {
    
    let opcion = '';
    let listaNotasHTML = "";

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
        </div><button class="btn" onclick=(eliminarNota(${i.idNota}))><i class="bi bi-trash"></i></button></li>`
    
        listaNotasHTML += notaHTML;
    
    }
    containerNotes.innerHTML = listaNotasHTML;

}