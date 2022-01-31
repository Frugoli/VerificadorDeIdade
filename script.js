function verificar()    {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById("txtano")
    let res = document.getElementById("res")

    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else  {
        let fsex = document.getElementsByName("radsex")
        let idade = ano - Number(fano.value)
        let gen = ""
        const img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (img && img.style)   {
            img.style.height = "250px"
            img.style.width = "250px"
            img.style.marginTop = "15px"
        }

        if (fsex[0].checked) {
            gen = "Homem"
            if (idade >= 0 && idade < 10)   {
                gen = "criança"
                img.setAttribute("src", "assets/menino.png")
            } else if (idade < 21)  {
                gen = "jovem"
                img.setAttribute("src", "assets/jovemMas.png")
            } else if (idade < 60)  {
                gen = "adulto"
                img.setAttribute("src", "assets/adulto.png")
            } else {
                gen = "idoso"
                img.setAttribute("src", "assets/idoso.png")
            }
        } else if (fsex[1].checked) {
            gen = "Mulher"
            if (idade >= 0 && idade < 10)   {
                gen = "criança"
                img.setAttribute("src", "assets/menina.png")
            } else if (idade < 21)  {
                gen = "jovem"
                img.setAttribute("src", "assets/jovemFem.png")
            } else if (idade < 60)  {
                gen = "adulta"
                img.setAttribute("src", "assets/adulta.png")
            } else {
                gen = "idosa"
                img.setAttribute("src", "assets/idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML =`Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}