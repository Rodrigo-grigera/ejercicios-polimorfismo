/*
Ejercicio 1
• Iniciar proyecto NPM y Git
• Plantear diagrama de clases para clases Auto
y AutoCarreras redefiniendo métodos
• Implementar el código
• Subir a GitHub y avisar por Slack

Ejercicio 2
• Idem ejercicio anterior, pero proponiendo un
ejercicio que emplee una clase padre y dos
clases hijas → usando polimorfismo */

class Auto{
    protected marca : string;
    protected modelo : string;
    protected velocidad = 10;

    public constructor(marca: string, modelo:string){
        this.marca = marca;
        this.modelo = modelo;
    }
    public aceleracion(): void{
        this.velocidad += 10;
    }
    public info(): void{
        console.log(`
            Auto: ${this.marca} ${this.modelo}
            velocidad actual: ${this.velocidad}`);
    }
}

const auto1 : Auto = new Auto("Fiat", "128");

auto1.aceleracion()
auto1.aceleracion()
auto1.aceleracion()
auto1.aceleracion()
auto1.info()

class AutoCarrera extends Auto{
    public aceleracion(): void {
        this.velocidad += 30;
    }
    public info(): void {
        console.log(`
            Auto: ${this.marca} ${this.modelo}
            velocidad actual: ${this.velocidad}`);
    }
}

const torino : AutoCarrera = new AutoCarrera("Torino", "1995");

torino.aceleracion();
torino.aceleracion();
torino.aceleracion();
torino.aceleracion();
torino.info()

class Camioneta extends Auto{
    public aceleracion(): void {
        this.velocidad += 15;
    }
    public info(): void {
        console.log(`
            Auto: ${this.marca} ${this.modelo}
            velocidad actual: ${this.velocidad}`);
    }
}

const camioneta : Camioneta = new Camioneta("Ford", "Ranger");

camioneta.aceleracion()
camioneta.aceleracion()
camioneta.aceleracion()
camioneta.info()
