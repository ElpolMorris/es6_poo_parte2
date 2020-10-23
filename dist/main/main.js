"use strict";

//Importaciones de módulos
//Importacion cliente
var Cliente = require('./cliente.js');

var Impuestos = require('./impuestos.js'); //import Cliente from './cliente.js'
//import Impuestos from './impuestos.js'
//instancia impuestos


var impuesto1 = new Impuestos(300000, 10000);
var impuesto2 = new Impuestos(400000, 80000);
var impuesto3 = new Impuestos(500000, 120000);
var impuesto4 = new Impuestos(200000, 150000); //instancia cliente

var cliente1 = new Cliente("pablo", impuesto1);
var cliente2 = new Cliente("juan", impuesto2);
var cliente3 = new Cliente("pamela", impuesto3);
var cliente4 = new Cliente("julia", impuesto4);
console.log("el impuesto de ".concat(cliente1.nombre, " es $").concat(cliente1.calcularImpuesto(cliente1.impuesto.getMontoBruto, cliente1.impuesto.getDeducciones), ".-"));
console.log("el impuesto de ".concat(cliente2.nombre, " es $").concat(cliente2.calcularImpuesto(cliente2.impuesto.getMontoBruto, cliente2.impuesto.getDeducciones), ".-"));
console.log("el impuesto de ".concat(cliente3.nombre, " es $").concat(cliente3.calcularImpuesto(cliente3.impuesto.getMontoBruto, cliente3.impuesto.getDeducciones), ".-"));
console.log("el impuesto de ".concat(cliente4.nombre, " es $").concat(cliente4.calcularImpuesto(cliente4.impuesto.getMontoBruto, cliente4.impuesto.getDeducciones), ".-"));