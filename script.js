
function verificar(){
    var yearnasc = document.getElementById('year')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')

    if (yearnasc.value.lenght == 0  || yearnasc.value > ano){
        window.alert('[ERROR] Check dados and try again')
    } else {
        var sexo = document.getElementsByName('sex')
        var idade = ano - Number(yearnasc.value)
        var genero = ''
        var img = document.getElementById('foto')
        if (sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.src = 'foto-bebe-m.png'
                res.innerHTML = 'pamonha'
                                
                
            }
        } else if (sexo[1].checked){
            genero = 'Mulher'
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }



}