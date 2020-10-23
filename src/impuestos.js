//aqui van los impuestos
export default class Impuestos {
    constructor (monto_bruto_anual, deducciones){
        this.monto_bruto_anual =  monto_bruto_anual
        
        this.deducciones =  deducciones
    }
    get getMontoBruto () {
        return this.monto_bruto_anual
    }
    
    set setMontoBruto (montoBruto){
        this.monto_bruto_anual = montoBruto
    }

    get getDeducciones (){
        return this.deducciones
    }

    set setDeducciones (deduccionesMod){
        this.deducciones = deduccionesMod
    }
    
    
}
//module.exports = Impuestos

