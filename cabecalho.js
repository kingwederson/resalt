var dataunix = new Date()
var ano = dataunix.getFullYear()
spanano.innerText = ano
var contatomail = document.getElementsByClassName("contato")
for(var i in contatomail) {
    document.getElementsByClassName("contato")[i].innerText = "contato@resalt.com.br"
}
function carregaComum(){
    var cabeca = window.document.getElementById('headercabecalho')
    var ctxcabeca =`
    <!--AQUI COMEÇA O HEADER-->
        <section id="cabecalho" class="nivelmaior">
            <a href="index.html" target="_top">
                <img class="logo" src="logo.png">
            </a>
            <table id="tabelacontato">
                <tr><td><img class="icone" src="https://ya-webdesign.com/transparent450_/whatsapp-icon-png-download-3.png"></td><td>(32) 999-668-674</td></tr>
                <tr><td><img class="icone" src="https://pt.seaicons.com/wp-content/uploads/2015/09/Mail-icon1.png"></td><td class="contato">contato@resalt.com.br</td></tr>
            </table>
        </section>
        <section id="menu" class="nivelmaior">
            <nav class="menu">
                <ul>
                    <a href="index.html" target="_top"><li><br>Início</li></a>
                    <a href="quemsomos.html#titulo" target="_top"><li>Quem Somos</li></a>
                    <a href="servicos.html" target="_top"><li><br>Serviços</li></a>
                    <a href="blog.html#titulo" target="_top"><li><br>Blog</li></a>
                    <a href="contato.html" target="_top"><li><br>Contato</li></a>
                </ul>
            </nav>
        </section>
            <section id="mudancadeserico" style="display:none;">
                <table>
                    <tr>
                        <td>
                            <img id="iconedoservico" class="imagemdeservico" src="img/assessoria.svg">
                        </td>
                        <td style="max-width:300px">
                            <h2 id="tituloservico">Assessoria Ambiental</h2>
                        </td>
                    </tr>
                </table>
            </section>
            <!--AQUI TERMINA O HEADER-->
    `;
    var rodape = window.document.getElementById('footerrodape')
    var ctxrodape = `
    <footer>
        <p>João Marcos Almeida da Silva</p>
        <p>Wederson Geovane de Paula</p>
        <p>&copy; Resalt Consultoria Ambiental, <span id="spanano">${ano}</span>.</p>
        <p>(32) 999-668-674</p>
        <p class="contato">contato@resalt.com.br</p>
        <script src="codigo.js">
        </script>
        </p>
        <p>http://resalt.com.br/</p>
        <p>Bom Jardim de Minas, MG.</p>
    </footer>
    `
    cabeca.innerHTML = ctxcabeca
    rodape.innerHTML = ctxrodape
}