"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//aqui van los impuestos
var Impuestos = /*#__PURE__*/function () {
  function Impuestos(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuestos);

    this.monto_bruto_anual = monto_bruto_anual;
    this.deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "getMontoBruto",
    get: function get() {
      return this.monto_bruto_anual;
    }
  }, {
    key: "setMontoBruto",
    set: function set(montoBruto) {
      this.monto_bruto_anual = montoBruto;
    }
  }, {
    key: "getDeducciones",
    get: function get() {
      return this.deducciones;
    }
  }, {
    key: "setDeducciones",
    set: function set(deduccionesMod) {
      this.deducciones = deduccionesMod;
    }
  }]);

  return Impuestos;
}();

module.exports = Impuestos;