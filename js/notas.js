class Note{
    static contadorNotes = 0;

    constructor(nombre,description,nivel){
        this._nombre = nombre;
        this._description = description;
        this._nivel = nivel;
        this._idNota = ++Note.contadorNotes;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get description(){
        return this._description;
    }
    set description(description){
        this._description = description
    }

    get nivel(){
        return this._nivel;
    }

    get idNota(){
        return this._idNota
    }

    toString(){
        return `idNota: ${this._idNota}, Nombre: ${this._nombre}, Descripcion: ${this._description}`
    }
}