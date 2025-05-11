/*Ejercicio 3
• Iniciar proyecto NPM y Git
• Plantear diagrama de clases para clases
Animal y sus dos clases hijas Perro y Pez.
• Crear en la clase Animal métodos que luego
sean redefinidos en las clases hijas
• Implementar el código aplicando lo visto de
abstracción y encapsulamiento.
• Crear una instancia de cada animal, setearle
valores y mostrar por consola la información
de cada uno */


class Animal{
    protected tipoAnimal: string; 
    protected lugar: string ; 
    protected ojos: number ;
    protected pelos: boolean; 
    protected patas: number ;

    constructor(tipoAnimal: string,
            lugar: string, 
            ojos: number ,
            pelos: boolean, 
            patas: number , ){

        this.tipoAnimal = tipoAnimal;
        this.lugar = lugar;
        this.ojos = ojos;
        this.pelos = pelos;
        this.patas = patas;
    }
    
    protected LatirCorazon(): void{
        console.log(`Su corazon siempre late con los colores "zul y oro"`);
    } 
    
    public Cerebro(): void{
        console.log(`Tiene un cerebro`);
    } 
    public Ojos(): void{
        console.log(`Posee ${this.ojos} ojos `);

    } 

    public Movimiento(): void{
        console.log(`se mueve`);
    } 
    getinfo():void{
        console.log(this);
    }
}
class Perro extends Animal{
    private nombre: string 
    private raza: string 

    constructor(tipoAnimal:string,
        lugar: string, 
        ojos: number ,
        pelos: boolean, 
        patas: number ,
        nombre: string,
        raza: string,){

    super(tipoAnimal,lugar,ojos,pelos,patas)
    this.nombre = nombre;
    this.raza = raza
}
    Ladrar(): void{ 
        console.log(`${this.nombre} Ladra, emite un sonido: "gua - gua"`);
    } 

} 

    class Pez extends Animal{

    private escamas: boolean 
    private color: string 
    private velocidadNado: number 

    constructor(tipoAnimal: string,
            lugar: string, 
            ojos: number ,
            pelos: boolean, 
            patas: number,
            escamas: boolean,
            color:string,
            ){
                super(tipoAnimal,lugar,ojos,pelos,patas)

            this.escamas = escamas;
            this.color = color;
            this.velocidadNado = 0;
            

            }
    
    getVelocidad(): void {
        this.velocidadNado += 20
    }
    
    getColor(): void{
        console.log(`Color: ${this.color}`);
    }
    getAceleracion(){
        console.log(`Velocidad alcanzada:${this.velocidadNado}`);
    }
}
// const animal: Animal = new Animal("VACA", "INDIA", 2, true, 4);
// animal.getinfo()

// const perro : Perro = new Perro("Perro", "España", 2, true, 4 ,"Tito","Colie")
// perro.Ladrar()
// perro.getinfo()

const pez : Pez = new Pez("Pez", "Venecia", 2, true, 0,true,"Naranja")
pez.getinfo()
