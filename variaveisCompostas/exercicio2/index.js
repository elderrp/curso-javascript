let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)
valores.indexOf(4)

//indexOf procura o valor e retorna a chave onde tem esse valor

/*for(let pos = 0; pos < valores.length; pos++) {
    console.log(`a posião ${pos} tem o valor ${valores[pos]}`)

}
*/
for( let pos in valores){
    console.log(`a posião ${pos} tem o valor ${valores[pos]}`) 

}