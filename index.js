import express from "express";
const servidor = express()

servidor.use(express.json())

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

servidor.get("/calculadora/somar2", (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let resposta = n1 + n2
    resp.send({
        soma:resposta
    })


})

servidor.get("/calculadora/dividir2", (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let resposta = n1 - n2
    resp.send({
        dividir :resposta
    })
})

servidor.get("/mensagem/ola", (req, resp) => {
    let nome = req.query.nome ?? "Oxi"
    resp.send({
       mensagem: "Olá " + nome
    })

})

servidor.post("/media", (req, resp) => {
    let n1 = req.body.media1
    let n2 = req.body.media2
    let n3 = req.body.media3
    let media = (n1 + n2 + n3) / 3
    resp.send({
        media:media
    })

})

servidor.post("/dobro", (req, resp) => {
    let array = req.body.numeros
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * 2
    }
    resp.send({
        dobros:array
    })
})

servidor.post("/loja/pedido", (req, resp) => {
    let total = req.body.total
    let parcela = req.body.parcela
    let cupom = req.query.cupom

    if (parcela > 1) {
        let juros = total * 0.05
        total += juros
    }
    if (cupom == "QUERO100") {
        total -= 100
    }
    resp.send({
        total :total
        
    })

})

servidor.post("/loja/pedido/completo", (req, resp) => {

    let items = req.body.item
    let parcela = req.body.parcela
    let cupom = req.query.cupom

    let precoItems = 0

    for (let i = 0; i < items.length; i++) {
        precoItems +=items[i].preco
    }
   
    if(parcela>1){
        let juros = precoItems*0.05
        precoItems +=juros
    }
    if(cupom == "QUERO100"){
        precoItems -= 100
    }

    resp.send({
        preco:precoItems
    })

})

servidor.listen(6767, () => console.log(" Farmei Aura "))