const heroi = {
nome: "batman",
modelo: "DC",
poderes: ["sem poderes"],
}
heroi.modelo = "capitão cueca"
heroi["nome"] = "super man"
console.log(heroi.poderes.modelo)
console.log(heroi.nome)

//for(var poderes in heroi){console.log(poderes)}