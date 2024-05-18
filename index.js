class Heroi {
    nome
    idade
    tipo

    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque = null
        if (this.tipo === "mago") {
            ataque = "usou magia"
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada"
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais"
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken"
        }
        console.log("O tipo " + this.tipo + " atacou usando " + ataque)
    }
}


let he1 = new Heroi("Camila", 15, "mago")
he1.atacar()

let he2 = new Heroi("Edison", 30, "guerreiro")
he2.atacar()

let he3 = new Heroi("Sophia", 10, "monge")
he3.atacar()

let he4 = new Heroi("Leia", 20, "ninja")
he4.atacar()
