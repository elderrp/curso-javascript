/* var hora = 20
if(hora < 12 ){
    console.log('bom dia')
}else if( hora  = 12 && hora <= 17 ){
console.log('boa tarde')

}else{
    console.log('boa noite')
}*/


/*
var agora = new Date
var hora = agora.getHours()
console.log(`agora são exatamente${hora} horas`)
if( hora < 12){
    console.log('bom dia')
    
}else if(hora <= 18) {
    console.log('boa tarde')
}else if(hora > 18 ){
    console.log('boa noite')
}else if(hora > 0 && hora <= 5){
    console.log('boa madrugada')
} */


var hora = 4
console.log(`agora são exatamente ${hora} horas`)
if( hora < 12 && hora >=5){
    console.log('bom dia')
    
}else if(hora > 12 && hora <=17 ) {
    console.log('boa tarde')
}else if(hora >= 18 ){
    console.log('boa noite')
}else {
    console.log('boa madrugada')
}