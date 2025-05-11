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
var Animal = /** @class */ (function () {
    function Animal(tipoAnimal, lugar, ojos, pelos, patas) {
        this.tipoAnimal = tipoAnimal;
        this.lugar = lugar;
        this.ojos = ojos;
        this.pelos = pelos;
        this.patas = patas;
    }
    Animal.prototype.LatirCorazon = function () {
        console.log("Su corazon siempre late con los colores \"zul y oro\"");
    };
    Animal.prototype.Cerebro = function () {
        console.log("Tiene un cerebro");
    };
    Animal.prototype.Ojos = function () {
        console.log("Posee ".concat(this.ojos, " ojos "));
    };
    Animal.prototype.Movimiento = function () {
        console.log("se mueve");
    };
    Animal.prototype.getinfo = function () {
        console.log(this);
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(tipoAnimal, lugar, ojos, pelos, patas, nombre, raza) {
        var _this = _super.call(this, tipoAnimal, lugar, ojos, pelos, patas) || this;
        _this.nombre = nombre;
        _this.raza = raza;
        return _this;
    }
    Perro.prototype.Ladrar = function () {
        console.log("".concat(this.nombre, " Ladra, emite un sonido: \"gua - gua\""));
    };
    return Perro;
}(Animal));
var Pez = /** @class */ (function (_super) {
    __extends(Pez, _super);
    function Pez(tipoAnimal, lugar, ojos, pelos, patas, escamas, color) {
        var _this = _super.call(this, tipoAnimal, lugar, ojos, pelos, patas) || this;
        _this.escamas = escamas;
        _this.color = color;
        _this.velocidadNado = 0;
        return _this;
    }
    Pez.prototype.getVelocidad = function () {
        this.velocidadNado += 20;
    };
    Pez.prototype.getColor = function () {
        console.log("Color: ".concat(this.color));
    };
    Pez.prototype.getAceleracion = function () {
        console.log("Velocidad alcanzada:".concat(this.velocidadNado));
    };
    return Pez;
}(Animal));
// const animal: Animal = new Animal("VACA", "INDIA", 2, true, 4);
// animal.getinfo()
// const perro : Perro = new Perro("Perro", "España", 2, true, 4 ,"Tito","Colie")
// perro.Ladrar()
// perro.getinfo()
var pez = new Pez("Pez", "Venecia", 2, true, 0, true, "Naranja");
pez.getinfo();
