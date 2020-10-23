//este es cliente
export default class Cliente {
    constructor (nombre, impuesto){
        this.nombre = nombre
        this.impuesto =  impuesto
    }
    get getNombre (){
        return this.nombre
    }
    set setNombre (setNombre){
        this.nombre = setNombre
    }
    calcularImpuesto (montoBrutoAnual, deducciones){
        return ((montoBrutoAnual-deducciones)*0.21)
    }        
}
//module.exports = Cliente
