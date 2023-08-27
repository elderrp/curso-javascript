function carregar() {
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('imagem'); 
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        imagem.src = 'manha.png'; 
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = 'tarde.png'; 
        document.body.style.background = 'orange'
    } else {
        imagem.src = 'noite.png'; 
        document.body.style.background = 'black'
    }
}