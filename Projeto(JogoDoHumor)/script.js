const elementoImagem = document.querySelector("#imagem")
const elementoBotao = document.querySelector("#alterar")
const nome = document.querySelector("#nome")
const situacao = document.querySelector("#situacao")

elementoBotao.addEventListener("click", ()=>{
    if(elementoBotao.value == "primeiro"){
        elementoImagem.src = "./img/GokuMacaco.jpg"
        elementoBotao.value = "segundo"

        nome.innerHTML = "Goku Macaco";
        situacao.innerHTML = "Ozaru Gigante"        
    }
    else if(elementoBotao.value == "segundo"){
        elementoImagem.src = "./img/GokuSuperSayajin.jpg"
        elementoBotao.value = "terceiro"

        nome.innerHTML = "Goku SuperSayajin";
        situacao.innerHTML = "Goku Pistola"  

    }
    else if(elementoBotao.value == "terceiro"){
        elementoImagem.src = "./img/GokuDeusSuper.gif"
        elementoBotao.value = "quarto"

        nome.innerHTML = "Goku Deus SuperSayajin";
        situacao.innerHTML = "Goku Megazord"  

    }

});