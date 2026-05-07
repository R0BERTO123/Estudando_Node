import express from "express";
const servidor = express()

servidor.get("/helloworld", (rec, post) => {
    post.send("Hello, World")
})

servidor.get("/helloworld/boas", (rec, post) => {

    post.send("boaaa")
})

servidor.get("/calculadora/:n1/:n2", (rec, resp) => {
    let n1 = Number(rec.params.n1)
    let n2 = Number(rec.params.n2)
    let resposta = n1 + n2
    resp.send("A soma é " + resposta)
})

servidor.listen(6767, () => console.log(" Farmei Aura "))