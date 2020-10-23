//Importaciones de módulos
//Importacion cliente
const Cliente = require('./cliente.js')
const Impuestos = require('./impuestos.js')
//import Cliente from './cliente.js'
//import Impuestos from './impuestos.js'

//instancia impuestos

let impuesto1 = new Impuestos(300000, 10000)
let impuesto2 = new Impuestos(400000, 80000)
let impuesto3 = new Impuestos(500000, 120000)
let impuesto4 = new Impuestos(200000, 150000)

//instancia cliente

let cliente1 = new Cliente("pablo", impuesto1)
let cliente2 = new Cliente("juan", impuesto2)
let cliente3 = new Cliente("pamela", impuesto3)
let cliente4 = new Cliente("julia", impuesto4)


console.log(`el impuesto de ${cliente1.nombre} es $${cliente1.calcularImpuesto(cliente1.impuesto.getMontoBruto, cliente1.impuesto.getDeducciones)}.-`)
console.log(`el impuesto de ${cliente2.nombre} es $${cliente2.calcularImpuesto(cliente2.impuesto.getMontoBruto, cliente2.impuesto.getDeducciones)}.-`)
console.log(`el impuesto de ${cliente3.nombre} es $${cliente3.calcularImpuesto(cliente3.impuesto.getMontoBruto, cliente3.impuesto.getDeducciones)}.-`)
console.log(`el impuesto de ${cliente4.nombre} es $${cliente4.calcularImpuesto(cliente4.impuesto.getMontoBruto, cliente4.impuesto.getDeducciones)}.-`)
