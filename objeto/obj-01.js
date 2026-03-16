const carros = {
nome: "camaro",
modelo: "xpto cam",
cores: ["amarelo", "preto"],
cidades: {}
}
carros.modelo = "fusca"
carros["nome"] = "chev"
console.log(carros.cidades.modelo)
console.log(carros.nome)

for(carros in carros){console.log(carros)}