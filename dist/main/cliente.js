"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//este es cliente
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "calcularImpuesto",
    value: function calcularImpuesto(montoBrutoAnual, deducciones) {
      return (montoBrutoAnual - deducciones) * 0.21;
    }
  }, {
    key: "getNombre",
    get: function get() {
      return this.nombre;
    }
  }, {
    key: "setNombre",
    set: function set(setNombre) {
      this.nombre = setNombre;
    }
  }]);

  return Cliente;
}();

module.exports = Cliente;