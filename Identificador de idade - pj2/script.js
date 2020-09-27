function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var fano = window.document.getElementById('ano')
    var res = window.document.getElementById('resp')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    
    if(fano.value.length == 0 || fano.value > anoatual){
        window.alert("Verifique os dados e tente novamente")
    }
    else{
        var sex = window.document.getElementsByName('sexm')
        var idade = anoatual - Number(fano.value)
    
    }
    res.style.textAlign ='center'
    if(sex[0].checked){

        

        if(idade >=0 && idade <10){
            res.innerHTML = `Detectamos um Menino de ${idade} anos.`
            img.setAttribute('src','foto_menino.jpg')
            res.appendChild(img)

        }else if (idade >=10 && idade <21){
            res.innerHTML = `Detectamos um Jovem de ${idade} anos.`
            img.setAttribute('src','foto_adolecenteHomem.jpg')
            res.appendChild(img)

        }else if (idade >= 21 && idade <60){
            res.innerHTML = `Detectamos um Homem de ${idade} anos.`
            img.setAttribute('src','fotoHomem.jpg')
            res.appendChild(img)
        
        }else{res.innerHTML = `Detectamos um senhor de ${idade} anos.`
            img.setAttribute('src','fotoIdoso.jpg')
            res.appendChild(img)
        }
        
    }else{
        if(idade >0 && idade <10){
            res.innerHTML = `Detectamos uma Menina de ${idade} anos.`
            img.setAttribute('src','foto_menina.jpg')
            res.appendChild(img)

        }else if (idade >=10 && idade <21){
            res.innerHTML = `Detectamos uma Jovem de ${idade} anos.`
            img.setAttribute('src','foto_adolecenteMulher.jpg')
            res.appendChild(img)

        }else if (idade >= 21 && idade <60){
            res.innerHTML = `Detectamos uma Mulher de ${idade} anos.`
            img.setAttribute('src','fotoMulher.jpg')
            res.appendChild(img)

        
        }else{res.innerHTML = `Detectamos uma senhora de ${idade} anos.`
        img.setAttribute('src','fotoIdosa.jpg')
        res.appendChild(img)
            }

    }


}