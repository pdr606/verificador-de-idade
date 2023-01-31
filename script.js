
function verificar(){
    var yearnasc = document.getElementById('year')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')

    if (yearnasc.value.length == 0 && yasnasc.value > ano ){
        window.alert('[ERROR] Check dados and try again')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(yearnasc.value)
        var genero = ''
        var img = document.getElementById('foto')
        } if(fsex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade < 10){
                img.src = 'foto-bebe-m.png'
            } else if (idade < 21){
                img.src = 'foto-jovem-m.png'
            } else if (idade < 51){
                img.src = 'foto-adulto-m.png'
            } else{
                img.src = 'foto-idoso-m.png'
            }
        } else if (fsex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                img.src = 'foto-bebe-f.png'
            } else if (idade < 21){
                img.src = 'foto-jovem-f.png'
            } else if (idade < 51){
                img.src = 'foto-adulto-f.png'
            } else{
                img.src = 'foto-idoso-f.png'
            }

        
            
        }

        res.innerHTML = `Detectamos genero ${genero} com ${idade} anos `

        
     
    }

    

