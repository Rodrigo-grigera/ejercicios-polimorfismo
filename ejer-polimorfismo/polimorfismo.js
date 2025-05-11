var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto(marca, modelo) {
        this.velocidad = 10;
        this.marca = marca;
        this.modelo = modelo;
    }
    Auto.prototype.aceleracion = function () {
        this.velocidad += 10;
    };
    Auto.prototype.info = function () {
        console.log("\n            Auto: ".concat(this.marca, " ").concat(this.modelo, "\n            velocidad actual: ").concat(this.velocidad));
    };
    return Auto;
}());
var auto1 = new Auto("Fiat", "128");
auto1.aceleracion();
auto1.aceleracion();
auto1.aceleracion();
auto1.aceleracion();
auto1.info();
var AutoCarrera = /** @class */ (function (_super) {
    __extends(AutoCarrera, _super);
    function AutoCarrera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCarrera.prototype.aceleracion = function () {
        this.velocidad += 30;
    };
    AutoCarrera.prototype.info = function () {
        console.log("\n            Auto: ".concat(this.marca, " ").concat(this.modelo, "\n            velocidad actual: ").concat(this.velocidad));
    };
    return AutoCarrera;
}(Auto));
var torino = new AutoCarrera("Torino", "1995");
torino.aceleracion();
torino.aceleracion();
torino.aceleracion();
torino.aceleracion();
torino.info();
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.aceleracion = function () {
        this.velocidad += 15;
    };
    Camioneta.prototype.info = function () {
        console.log("\n            Auto: ".concat(this.marca, " ").concat(this.modelo, "\n            velocidad actual: ").concat(this.velocidad));
    };
    return Camioneta;
}(Auto));
var camioneta = new Camioneta("Ford", "Ranger");
camioneta.aceleracion();
camioneta.aceleracion();
camioneta.aceleracion();
camioneta.info();
