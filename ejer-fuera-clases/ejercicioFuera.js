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
var Deporte = /** @class */ (function () {
    function Deporte(nombre, cantJugadores, pelota, tipoPelota, dimensionCancha) {
        this.puntos = 0;
        this.nombre = nombre;
        this.cantJugadores = cantJugadores;
        this.pelota = pelota;
        this.tipoPelota = tipoPelota;
        this.dimensionCancha = dimensionCancha;
        this.puntos = this.puntos;
    }
    Deporte.prototype.getinfo = function () {
        console.log("\n            Tipo de deporte: \"".concat(this.nombre, "\"\n            Cantidad de jugadores: \"").concat(this.cantJugadores, " jugadores\"\n            Pelota: \"").concat(this.pelota ? "Si" : "No", "\"\n            Tipo de peota: \"").concat(this.tipoPelota, "\" \n            Dimension de cancha: \"").concat(this.dimensionCancha, " Mtrs.\""));
    };
    Deporte.prototype.cantidadPuntos = function () {
        console.log("Cantidad de puntos anotados: ".concat(this.puntos));
    };
    Deporte.prototype.armarEquipos = function () {
        console.log("Jugadores por equipo: ".concat(this.cantJugadores / 2, " vs ").concat(this.cantJugadores / 2));
    };
    return Deporte;
}());
var depor = new Deporte("Futbol", 22, true, "Esferica de cuero", 100);
// depor.getinfo();
var BasquetBol = /** @class */ (function (_super) {
    __extends(BasquetBol, _super);
    function BasquetBol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasquetBol.prototype.puntosDobles = function () {
        this.puntos += 2;
    };
    BasquetBol.prototype.puntosTriples = function () {
        this.puntos += 3;
    };
    return BasquetBol;
}(Deporte));
var basquet = new BasquetBol("Basquet", 10, true, "esferico - cintetico", 100);
// basquet.puntosDobles()
// basquet.puntosDobles()
// basquet.puntosDobles()
// basquet.puntosTriples()
// basquet.cantidadPuntos()
// basquet.armarEquipos()
var Futbol = /** @class */ (function (_super) {
    __extends(Futbol, _super);
    function Futbol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Futbol.prototype.gol = function () {
        this.puntos += 1;
    };
    return Futbol;
}(Deporte));
var fut = new Futbol("Futbol", 22, true, "Esferico-Cuero", 100);
fut.armarEquipos();
fut.gol();
fut.gol();
fut.gol();
fut.cantidadPuntos();
fut.getinfo();
