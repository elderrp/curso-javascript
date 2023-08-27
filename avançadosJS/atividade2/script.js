function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    var fsex = document.getElementsByName('txtsex');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente');
    } else {
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotos/hcriança.jpg');
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'fotos/hjovem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'fotos/hadulto.jpg');
            } else {
                img.setAttribute('src', 'fotos/hidoso.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotos/mcriança.jpg');
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'fotos/mjovem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'fotos/madulto.jpg');
            } else {
                img.setAttribute('src', 'fotos/midosa.jpg');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.style.textAlign = 'center';
        res.innerHTML += '<br>';
        res.appendChild(img);
    }
}