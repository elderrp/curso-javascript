 function fatorial(n) { 
if(n == 1){
    return  1             //funçao de recursividade

}else{
    return n * fatorial(n-1)
}
}
console.log(fatorial(5))