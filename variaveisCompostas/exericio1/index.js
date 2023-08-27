let num = [3,2,4,5]
num[4]=6

//num.length comprimento do array
num.sort()
num.push(10)

console.log(num)
console.log(`nosso vetor é o ${num}`)
console.log(`nosso vetor posição 1 ${num[1]}`)
console.log(`O vetor tem ${num.length} posiçoes`)

// vetores funcionam com base nas posições
/*
for(let pos = 0; pos < num.length; pos++) {
    console.log(`meu resultado ${num[pos]}`)
}
*/