const frutas = ['jacá', 'mangá', ' maracuja']
frutas.push('pessego')
frutas.push('morango')
frutas.push('uva')
frutas.push('abacaxi')

frutas.pop('frutas')

while (frutas.length > 0) {
   frutas.pop()
   if (frutas.length == 0) {
    console.log("nao há frutas para vender!!!")
    
   } 
}
console.log(frutas)
console.log(frutas.length)
