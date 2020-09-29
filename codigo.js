var dataunix = new Date()
var ano = dataunix.getFullYear()
spanano.innerText = ano
var contatomail = document.getElementsByClassName("contato")
for(var i in contatomail) {
    document.getElementsByClassName("contato")[i].innerText = "contato@resalt.com.br"
}
