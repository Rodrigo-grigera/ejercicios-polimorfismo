/*• Iniciar proyecto NPM y Git
• Plantear un diagrama de clase con los
siguientes requisitos e implementar
• Herencia
• Composición
• Variables protected
• Polimorfismo
• Métodos privados
• Definir tarea NPM para compilar y correr los
archivos necesarios */

class Deporte{
    protected nombre: string;
    protected cantJugadores: number;
    protected pelota: boolean;
    protected tipoPelota: string;
    protected dimensionCancha: number;
    protected puntos : number = 0; 
    
    constructor(
        nombre: string,
        cantJugadores: number,
        pelota: boolean,
        tipoPelota: string,
        dimensionCancha: number,
    ){
        this.nombre = nombre;
        this.cantJugadores = cantJugadores;
        this.pelota = pelota;
        this.tipoPelota = tipoPelota;
        this.dimensionCancha = dimensionCancha;
        this.puntos = this.puntos
    }
    getinfo(){
        console.log(`
            Tipo de deporte: "${this.nombre}"
            Cantidad de jugadores: "${this.cantJugadores} jugadores"
            Pelota: "${this.pelota ? "Si" : "No"}"
            Tipo de peota: "${this.tipoPelota}" 
            Dimension de cancha: "${this.dimensionCancha} Mtrs."`);
    }
    cantidadPuntos(){
        console.log(`Cantidad de puntos anotados: ${this.puntos}`)
    }
    armarEquipos():void{
        console.log(`Jugadores por equipo: ${this.cantJugadores/2} vs ${this.cantJugadores/2}`);
    }
}

const depor : Deporte = new Deporte("Futbol", 22, true, "Esferica de cuero",100)

// depor.getinfo();

class BasquetBol extends Deporte{
    
    puntosDobles(): void{
        this.puntos += 2
    }
    puntosTriples(){
        this.puntos += 3
    }

}


const basquet : BasquetBol = new BasquetBol("Basquet", 10 , true ,"esferico - cintetico", 100);
// basquet.puntosDobles()
// basquet.puntosDobles()
// basquet.puntosDobles()
// basquet.puntosTriples()
// basquet.cantidadPuntos()
// basquet.armarEquipos()

class Futbol extends Deporte{

    gol():void{
        this.puntos += 1;
    }

}

const fut : Futbol = new Futbol("Futbol", 22,true,"Esferico-Cuero",100);
fut.armarEquipos()
fut.gol()
fut.gol()
fut.gol()
fut.cantidadPuntos()
fut.getinfo()