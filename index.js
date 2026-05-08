import express from "express";
const servidor = express()

servidor.get("/helloworld", (rec, post) => {
    post.send("Hello, World")
})

servidor.get("/helloworld/boas", (rec, post) => {

    post.send("boaaa")
})

servidor.get("/calculadora/somar/:n1/:n2", (rec, resp) => {
    let n1 = Number(rec.params.n1)
    let n2 = Number(rec.params.n2)
    let resposta = n1 + n2
    resp.send("A soma é " + resposta)
})

servidor.get("/calculadora/somar2",(req,resp)=>{
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let resposta = n1 +n2
    resp.send("a soma e "+ resposta)


})

servidor.get("/calculadora/dividir2",(req,resp)=>{
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let resposta = n1 - n2
    resp.send("o resultado e "+ resposta)
})

servidor.get("/mensagem/ola",(req,resp)=>{
    let nome = req.query.nome ?? "Oxi"
    resp.send("Olá "+ nome)

})

servidor.listen(6767, () => console.log(" Farmei Aura "))