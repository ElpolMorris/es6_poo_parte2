"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Importaciones de módulos
//Importacion cliente
//const Cliente = require('./cliente.js')
//const Impuestos = require('./impuestos.js')
// Importacion impuestos
var impuesto1 = new _impuestos["default"](300, 10);
var impuesto2 = new _impuestos["default"](400, 80);
var impuesto3 = new _impuestos["default"](500, 120);
var impuesto4 = new _impuestos["default"](200, 150);
console.log(impuesto1);
console.log(impuesto1.monto_bruto_anual);
console.log(impuesto1.deducciones);
var cliente1 = new _cliente["default"]("pablo", impuesto1);
var cliente2 = new _cliente["default"]("juan", impuesto2);
var cliente3 = new _cliente["default"]("pamela", impuesto3);
var cliente4 = new _cliente["default"]("julia", impuesto4);
cliente1.setNombre = "juliano";
cliente1.impuesto.setMontoBruto = 150;
cliente1.impuesto.setDeducciones = 50;
console.log(cliente1.nombre);
console.log(cliente1.impuesto.getMontoBruto);
console.log(cliente1.impuesto.getDeducciones);
console.log(cliente1.calcularImpuesto(cliente1.impuesto.getMontoBruto, cliente1.impuesto.getDeducciones));
console.log(cliente1.calcularImpuesto(cliente2.impuesto.getMontoBruto, cliente2.impuesto.getDeducciones));
console.log(cliente1.calcularImpuesto(cliente3.impuesto.getMontoBruto, cliente3.impuesto.getDeducciones));
console.log(cliente1.calcularImpuesto(cliente4.impuesto.getMontoBruto, cliente4.impuesto.getDeducciones)); //const clientesTotal = [cliente1, cliente2, cliente3, cliente4]
//clientesTotal.forEach(c => {
//console.log(c.calcularImpuesto(c.impuesto.monto_bruto_anual(),c.impuesto.deducciones()))
//});
//console.log(cliente1.calcularImpuesto(cliente1.impuesto().monto_bruto_anual(),cliente1.impuesto().deducciones()))
//console.log(cliente1.impuesto.deducciones1)
//console.log(cliente1.calcularImpuesto(cliente1.monto_bruto_anual, cliente1.deducciones))