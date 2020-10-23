//Importaciones de módulos
//Importacion cliente
//const Cliente = require('./cliente.js')
//const Impuestos = require('./impuestos.js')
import Cliente from './cliente.js'
import Impuestos from './impuestos.js'

// Importacion impuestos

let impuesto1 = new Impuestos(300, 10)
let impuesto2 = new Impuestos(400, 80)
let impuesto3 = new Impuestos(500, 120)
let impuesto4 = new Impuestos(200, 150)

console.log(impuesto1)
console.log(impuesto1.monto_bruto_anual)
console.log(impuesto1.deducciones)


let cliente1 = new Cliente("pablo", impuesto1)
let cliente2 = new Cliente("juan", impuesto2)
let cliente3 = new Cliente("pamela", impuesto3)
let cliente4 = new Cliente("julia", impuesto4)

cliente1.setNombre = "juliano"
cliente1.impuesto.setMontoBruto = 150
cliente1.impuesto.setDeducciones = 50
console.log(cliente1.nombre)
console.log(cliente1.impuesto.getMontoBruto)
console.log(cliente1.impuesto.getDeducciones)

console.log(cliente1.calcularImpuesto(cliente1.impuesto.getMontoBruto, cliente1.impuesto.getDeducciones))
console.log(cliente1.calcularImpuesto(cliente2.impuesto.getMontoBruto, cliente2.impuesto.getDeducciones))
console.log(cliente1.calcularImpuesto(cliente3.impuesto.getMontoBruto, cliente3.impuesto.getDeducciones))
console.log(cliente1.calcularImpuesto(cliente4.impuesto.getMontoBruto, cliente4.impuesto.getDeducciones))



//const clientesTotal = [cliente1, cliente2, cliente3, cliente4]
//clientesTotal.forEach(c => {
    //console.log(c.calcularImpuesto(c.impuesto.monto_bruto_anual(),c.impuesto.deducciones()))
//});
//console.log(cliente1.calcularImpuesto(cliente1.impuesto().monto_bruto_anual(),cliente1.impuesto().deducciones()))

//console.log(cliente1.impuesto.deducciones1)
//console.log(cliente1.calcularImpuesto(cliente1.monto_bruto_anual, cliente1.deducciones))
