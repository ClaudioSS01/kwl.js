/*

===============================================================================================================
===============================================================================================================

                    KWL javascript por Claudio s. S. versao - 22/09/2021 - 011 99495 - 3116

comandos principais ==============================================================================

sleep(tempo);
aguardar(tempo);
status(texto);
simular_click(onde_vamos_clicar);
clicar(onde_vamos_clicar);
click(onde_vamos_clicar);
pega_valor(de_onde_vamos_pegar); //pega valor da pagina html via id, class ou qq outro parametro
criar_arquivo(titulo_do_cumento_com_extensao,conteudo_do_arquivo) // criar_arquivo("teste.txt","funcionando");
limpar() para limpar o terminal
buscar_texto_na_pagina(palavra_que_estamos_procurando_na_pagina); 
pegar_id_pelo_class(class_do_elemento_que_vamos_pegar_o_id) //retorna o id do elemento que vc fornecer o class






print ========================================================================================================
print(texto);
print_color(texto,cor_em_ingles,tamanho_da_letra) //printa no console colorido
print_red(texto,tamanho_da_letra_opcional)
print_green(texto,tamanho_da_letra_opcional)
print_blue(texto,tamanho_da_letra_opcional)
print_yellow(texto,tamanho_da_letra_opcional)




trabalhando com texto =============================================================================

verifica_se_tem_a_dentro_de_baba("a","baba"); //true
a_em_baba("a","baba") // true
tem_a_dentro_de_baba("a","baba") //true
remover_quebra_de_linha_e_espacos_a_mais(texto);
encontre("tag do elemento ex: span","texto que estamos procurando","todos ou 1") //retorna a class do texto que estamos procurando ou a lista do texto







trabalhando com numero ============================================================================

numero_aleatorio(numero_inicial,numero_limite);









trabalhando com data ===============================================================================

dia() => retorna o dia de hoje
dia(-1) => retorna o dia de ontem
dia(+1) => retorna o dia de amanha
mes() //segue o mesmo processo do dia acima
ano() //segue o mesmo processo do mês e do dia
dia_da_semana(inteiro_para_avancar_ou_voltar_dia) // retorna segunda, terca, quarta etc







trabalhando com hora =================================================================================

hora() //retorna a hora atual 
hora(-1) //retorna uma hora antes 
hora(+1) //retorna uma hora depois
minuto() //segue o mesmo processo de hora 
segundo() //segue o mesmo processo de hora e minuto








trabalhando com firebase ==============================================================================

firebase_salvar(dados_a_serem_salvos,chave_para_buscar_futuramente,caminho_onde_deve_ser_salvo)
exemplo da funçao acima  firebase_salvar("Joao","nome","funcionario/ti/")
firebase_ler(url_de_busca,funcao_opcional_a_ser_executada_ao_ler_o_valor)
exemplo firebase_ler('https://sistemadesenhas-f7261-default-rtdb.firebaseio.com/senha/face.json?',print_yellow('funcinando'));
start_firebase(numero_da_versao_do_fireba,url_padrao,tag_gerada_pelo_firebase)
inicia_firebase(numero_da_versao_do_firebase,url_padrao,tag_gerada_pelo_firebase) 
exemplo
start_firebase("8.7.1","https://sistemadesenhas-f7261-default-rtdb.firebaseio.com/","tag que vem do firebase dentro de uma variavel")
exemplo
inicia_firebase("8.7.1","https://sistemadesenhas-f7261-default-rtdb.firebaseio.com/","tag que vem do firebase dentro de uma variavel")
criar_tag_firebase(numero_da_versao_do_firebase, url_padrao, tag_gerada_pelo_firebase)









trabalhar com arquivos ==================================================================================

criar_txt("meu_arquivo","conteudo dentro do txt")
criar_arquivo("meu_novo.html","conteudo do meu novo html")









criando modal=============================================================================================
modal(titulo_modal,copor_modal,cor_modal,id_modal)
exemplo
modal('usuarios','<h1>meus usuarios</h1>','red','meu_id')









CSS ======================================================================================================
alterando um elemento class
alterar_class(id_do_elemento_que_vamos_mudar_o_class,class_que_vamos_adicionar)
adicionar nosso proprio css
kwl_css()
w3css()
w3()
adicionar_w3css();




som trabalhando com sons ==================================================================================
som(nota_ou_frenquencia,tempo_de_duracao_do_toque)
exemplo:
som('do') //chamar pela nota
som('do',1000)  //alterar a frequencia com a qual o som sera chamado
som(135) //mudar a frenquencia do som






recarregar pagina =============================================================================================
recarregar()
recarregar_pagina()
reload_page()


trabalhando com local storage =============================================================================================
salvar_local('chave para lermos depois','valor que queremos guardar')
ler_local('chave do que queremos ler')
apagar_local('chave do que queremos apagar')




texto em voz =====================================================
fale('texto que desejo que o robo fale')


trabalhando com dinheiro =====================================
dinheiro('10.50','10.75','soma')
dinheiro('10.50','10.75','subtrai')
dinheiro('10.50','10.75','mais')
dinheiro('10.50','10.75','menos')
dinheiro('10.50', '3','divide')
dinheiro('10.50','4','multiplica')
dinheiro('10.50','10.75','+')
dinheiro('10.50','10.75','-')
dinheiro('10.50','5','*')
dinheiro('10.50','5','/')




*/



try {




    //===============================================================================================================
    //===============================================================================================================

    print_blue("░░░░░░░░░▄█████████▄▄▄░░░░░░░")
    print_blue("░░░░░░░░▐███████████████▄▄░░░")
    print_blue("░░░░░░░░███████████████████▄░")
    print_blue("░░░░░░░█████████████████████▌")
    print_blue("░░░░░░▐█▀▀▀▀██▀▒▒▒▒▒▒▒▒▒▀███░")
    print_blue("░░░░░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█░░")
    print_blue("░░░░░▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌░░")
    print_blue("░░░▄▀▀▀▀▄▒▒▒▒▒▀▀▀▄▄▒▒▒▒▒▒▒▐░░")
    print_blue("░░▐▒▄▀▀▒▒▒▒▒▒▄▄▄▄▄▒▒▒▒▒▀▄▄▐░░")
    print_blue("░░▐▒▒▒▀▒▒▒▒▒▒▒▌▀▒▌▒▒▒▀▄▄▄▒▐░░")
    print_blue("░░░▀▄▒▄▒▒▒▒▒▒▒▒▀▀▒▒▒▌▒▌▀▐▒▌░░")
    print_blue("░░░░▐▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▒▒▀▒▐░░░")
    print_blue("░░░░▌▒▒▒▒▒▒▒▒▒▒▒▒▀▄▄▒▀▒▒▒▌░░░")
    print_blue("░░░▐▒▒▒▒▒▒▒▒▒▒▄▄▄▄▒▒▒▒▒▒▐░░░░")
    print_blue("░░▄▌▒▒▒▒▒▒▒▒▒▒▒██████▄▒▐░░░░░")
    print_blue("░█▐▒▒▒▒▒▀▒▒▒▒▒▒▒▀▀██▀▒▐░░░░░░")
    print_blue("▀▒▐▒▒▒▒▒▒▀▒▒▒▒▒▒▒▒▒▒▒▐░░░░░░░")
    print_blue("░░░▐▒▒▒▒▒▒▒▀▄▒▒▒▒▒▒▒▐░░░░░░░░")
    print_blue("░░░░▐▒▒▒▒▒▒▒▒▀▄▄▄▄▄▀░▄▄▐▄▄▐▄▄")
    print_blue("░░░░░▐▒▒▒▒▒▒▒▒▒▌▌░░░▐░░▐░░▐░▐")
    print_blue("░░░░░▐▒▒▒▒▒▒▒▐▐ ░░░░▐░░░░░░░░")

    print_color("KWL - versão 31/08/2021 \r\nCriado por Claudio S.S. \r\n11 99495 - 3116 \r\nObrigado por ultilizar nossos serviços", "red", "2");



  

    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    function encontre(tag_do_elemento_que_estamos_procurando_pelo_texto,id_ou_class,texto_que_estamos_procurando, numero_do_elemento_que_queremos_ou_escreva_todos_para_obter_a_lista_com_todos_os_elementos) {
        //aqui definimos qual a tag do elemento que estamos procurando o texto
        var aTags = document.getElementsByTagName(tag_do_elemento_que_estamos_procurando_pelo_texto);

        //aqui definimos qual o texto que estamos procurando
        var searchText = texto_que_estamos_procurando;
        var found;

        //lista onde guardamos os elementos encontrados
        var lista_dos_elementos_encontrados = []
        for (var i = 0; i < aTags.length; i++) {
            if (aTags[i].textContent == searchText) {
                found = aTags[i];
                console.log('elemento encontrado:')
                console.log(found)

                //se quisermos um class
                if(id_ou_class == 'class'){
                    console.log('class:')
                    console.log(found.className)
                    //se a pessoa quiser só 1 elemento quando ele encontrar o primeiro ele retorna
                    if (numero_do_elemento_que_queremos_ou_escreva_todos_para_obter_a_lista_com_todos_os_elementos == '1') {
                        return found.className
                        break;
                    }else{
                        //senao todos os elementos com o mesmo texto vamos colocar em uma lista e retornar
                        lista_dos_elementos_encontrados.push(found.className)
                    }
                }

                //se quisermos um id
                if(id_ou_class == 'id'){
                    console.log('id:')
                    console.log(found.id)
                    //se a pessoa quiser só 1 elemento quando ele encontrar o primeiro ele retorna
                    if (numero_do_elemento_que_queremos_ou_escreva_todos_para_obter_a_lista_com_todos_os_elementos == '1') {
                        return found.id
                        break;
                    }else{
                        //senao todos os elementos com o mesmo texto vamos colocar em uma lista e retornar
                        lista_dos_elementos_encontrados.push(found.id)
                    }
                }
       

            }
        }

        //se tivermos encontrado alguma coisa
        if(parseInt(numero_do_elemento_que_queremos_ou_escreva_todos_para_obter_a_lista_com_todos_os_elementos) > 0){

            //se a pessoa quiser todos retorne a lista
            if (numero_do_elemento_que_queremos_ou_escreva_todos_para_obter_a_lista_com_todos_os_elementos == 'todos') {
                return lista_dos_elementos_encontrados
                }else{
                    //se a pessoa quiser um elemento especifico retorna o elemento que ela quer
                    return lista_dos_elementos_encontrados[parseInt(numero_do_elemento_que_queremos_ou_escreva_todos_para_obter_a_lista_com_todos_os_elementos)]
                }
        }else{
            console.log(`nenhum elemento ${tag_do_elemento_que_estamos_procurando_pelo_texto} encontrado com o texto ${texto_que_estamos_procurando} para podermos retornar o ${id_ou_class}`)
        }
     
    }


  //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    function salvar_local(chave,valor_que_vamos_guardar){
        try {
            localStorage.setItem(chave, valor_que_vamos_guardar);
        } catch (error) {
            console.log(`erro ao guardar ${valor_que_vamos_guardar} na chave ${chave} : ${error}`)
        }

    }
    function ler_local(chave){
        try {
            return localStorage.getItem(chave);
        } catch (error) {
            console.log(`erro ao ler o valor da chave ${chave} : ${error}`)
        }
        
    }

    function apagar_local(chave){
        try {
            localStorage.removeItem(chave);
        } catch (error) {
            console.log(`erro ao apagar o valor da chave ${chave} : ${error}`)
        } 
    }
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    function fale(texto) {
        let msg = texto

        let speech = new SpeechSynthesisUtterance();
        speech.lang = "pt-br";

        speech.text = msg;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);
    }



    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================






    function dinheiro(valor_1, valor_2, operacao) {
        var totalLiabilites = valor_1
        var toalAssets = valor_2
        var pattern = /[^0-9.-]+/g;

        if (operacao == '-' || operacao == 'menos' || operacao == 'subtrai') {
            var result = parseFloat(toalAssets.replace(pattern, '')) -
                parseFloat(totalLiabilites.replace(pattern, ''));
            return result;
        }



        if (operacao == '+' || operacao == 'mais' || operacao == 'soma') {
            var result = parseFloat(toalAssets.replace(pattern, '')) +
                parseFloat(totalLiabilites.replace(pattern, ''));
            return result;
        }

        if (operacao == '*' || operacao == 'vezes' || operacao == 'multiplica') {
            var result = parseFloat(toalAssets.replace(pattern, '')) * parseFloat(totalLiabilites.replace(pattern, ''));
            return result;
        }

        if (operacao == '/' || operacao == 'divide') {
            var result = parseFloat(toalAssets.replace(pattern, '')) / parseFloat(totalLiabilites.replace(pattern, ''));
            return result;
        }
    }








    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================





    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================



    function som(nota_ou_frenquencia, tempo_de_duracao_do_toque) {

        if (nota_ou_frenquencia == 'do' || nota_ou_frenquencia == 'c') {
            nota_ou_frenquencia = 264;
        } else if (nota_ou_frenquencia == 're' || nota_ou_frenquencia == 'd') {
            nota_ou_frenquencia = 297;
        } else if (nota_ou_frenquencia == 're' || nota_ou_frenquencia == 'd') {
            nota_ou_frenquencia = 297;
        } else if (nota_ou_frenquencia == 'mi' || nota_ou_frenquencia == 'e') {
            nota_ou_frenquencia = 330;
        } else if (nota_ou_frenquencia == 'fa' || nota_ou_frenquencia == 'f') {
            nota_ou_frenquencia = 352;
        } else if (nota_ou_frenquencia == 'sol' || nota_ou_frenquencia == 'g') {
            nota_ou_frenquencia = 396;
        } else if (nota_ou_frenquencia == 'la' || nota_ou_frenquencia == 'a') {
            nota_ou_frenquencia = 440;
        } else if (nota_ou_frenquencia == 'si' || nota_ou_frenquencia == 'b') {
            nota_ou_frenquencia = 495;
        } else if (nota_ou_frenquencia == 'do+' || nota_ou_frenquencia == 'c+') {
            nota_ou_frenquencia = 528;
        } else {
            nota_ou_frenquencia = nota_ou_frenquencia;
        }


        if (tempo_de_duracao_do_toque == null || tempo_de_duracao_do_toque == '') {
            //em milesegundos
            tempo_de_duracao_do_toque = 250;
        }


        context = new AudioContext();
        oscillator = context.createOscillator();
        oscillator.frequency.value = nota_ou_frenquencia;
        contextGain = context.createGain();

        oscillator.connect(contextGain);
        contextGain.connect(context.destination);
        oscillator.start(0);

        var tempo_da_musica = setTimeout(function () {

            contextGain.gain.exponentialRampToValueAtTime(
                0.00001, context.currentTime + 0.04
            )

        }, tempo_de_duracao_do_toque);

        tempo_da_musica;
        setTimeout(function () {
            clearTimeout(tempo_da_musica);
        }, tempo_de_duracao_do_toque + 10)

    }






    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================



    function recarregar() {
        recarregar_pagina()
    }


    function reload_page() {
        recarregar_pagina()
    }


    function recarregar_pagina() {
        document.location.reload(true);
    }



    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================





    function pegar_id_pelo_class(class_do_elemento_que_vamos_pegar_o_id) {
        return document.querySelector('.' + class_do_elemento_que_vamos_pegar_o_id).id;
    }






    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================



    function alterar_class(id_do_elemento_que_vamos_mudar_o_class, class_que_vamos_adicionar) {
        var elemento = document.getElementById(id_do_elemento_que_vamos_mudar_o_class)
        elemento[0].removeAttribute("class");
        elemento.setAttribute("class", class_que_vamos_adicionar);
    }


    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================



    function buscar_texto_na_pagina(palavra_que_estamos_procurando_na_pagina) {

        window.find(palavra_que_estamos_procurando_na_pagina);
    }



    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    //funcao para adicionar o w3-css


    function kwl_css() {
        w3()
    }

    function w3() {
        adicionar_w3css();
    }

    function w3css() {
        adicionar_w3css();
    }

    var w3_esta_incluso = false;

    function adicionar_w3css() {


        try {


            /* Set the style */
            var styles = `


 
     .kwl-input{
        padding: 8px;
        display: block;
        border: none;
        border-bottom: 1px solid #ccc;
        width: 100%  
 }

.kwl-fundo-vermelho {
    background-color: #db1b14;
}

.kwl-letra-branca {
   color: white;
}




     html {
         box-sizing: border-box
     }
     
     *,
     *:before,
     *:after {
         box-sizing: inherit
     }
     
     html {
         -ms-text-size-adjust: 100%;
         -webkit-text-size-adjust: 100%
     }
     
     body {
         margin: 0
     }
     
     article,
     aside,
     details,
     figcaption,
     figure,
     footer,
     header,
     main,
     menu,
     nav,
     section {
         display: block
     }
     
     summary {
         display: list-item
     }
     
     audio,
     canvas,
     progress,
     video {
         display: inline-block
     }
     
     progress {
         vertical-align: baseline
     }
     
     audio:not([controls]) {
         display: none;
         height: 0
     }
     
     [hidden],
     template {
         display: none
     }
     
     a {
         background-color: transparent
     }
     
     a:active,
     a:hover {
         outline-width: 0
     }
     
     abbr[title] {
         border-bottom: none;
         text-decoration: underline;
         text-decoration: underline dotted
     }
     
     b,
     strong {
         font-weight: bolder
     }
     
     dfn {
         font-style: italic
     }
     
     mark {
         background: #ff0;
         color: #000
     }
     
     small {
         font-size: 80%
     }
     
     sub,
     sup {
         font-size: 75%;
         line-height: 0;
         position: relative;
         vertical-align: baseline
     }
     
     sub {
         bottom: -0.25em
     }
     
     sup {
         top: -0.5em
     }
     
     figure {
         margin: 1em 40px
     }
     
     img {
         border-style: none
     }
     
     code,
     kbd,
     pre,
     samp {
         font-family: monospace, monospace;
         font-size: 1em
     }
     
     hr {
         box-sizing: content-box;
         height: 0;
         overflow: visible
     }
     
     button,
     input,
     select,
     textarea,
     optgroup {
         font: inherit;
         margin: 0
     }
     
     optgroup {
         font-weight: bold
     }
     
     button,
     input {
         overflow: visible
     }
     
     button,
     select {
         text-transform: none
     }
     
     button,
     [type=button],
     [type=reset],
     [type=submit] {
         -webkit-appearance: button
     }
     
     button::-moz-focus-inner,
     [type=button]::-moz-focus-inner,
     [type=reset]::-moz-focus-inner,
     [type=submit]::-moz-focus-inner {
         border-style: none;
         padding: 0
     }
     
     button:-moz-focusring,
     [type=button]:-moz-focusring,
     [type=reset]:-moz-focusring,
     [type=submit]:-moz-focusring {
         outline: 1px dotted ButtonText
     }
     
     fieldset {
         border: 1px solid #c0c0c0;
         margin: 0 2px;
         padding: .35em .625em .75em
     }
     
     legend {
         color: inherit;
         display: table;
         max-width: 100%;
         padding: 0;
         white-space: normal
     }
     
     textarea {
         overflow: auto
     }
     
     [type=checkbox],
     [type=radio] {
         padding: 0
     }
     
     [type=number]::-webkit-inner-spin-button,
     [type=number]::-webkit-outer-spin-button {
         height: auto
     }
     
     [type=search] {
         -webkit-appearance: textfield;
         outline-offset: -2px
     }
     
     [type=search]::-webkit-search-decoration {
         -webkit-appearance: none
     }
     
     ::-webkit-file-upload-button {
         -webkit-appearance: button;
         font: inherit
     }
     
     /* End extract */
     html,
     body {
         font-family: Verdana, sans-serif;
         font-size: 15px;
         line-height: 1.5
     }
     
     html {
         overflow-x: hidden
     }
     
     h1 {
         font-size: 36px
     }
     
     h2 {
         font-size: 30px
     }
     
     h3 {
         font-size: 24px
     }
     
     h4 {
         font-size: 20px
     }
     
     h5 {
         font-size: 18px
     }
     
     h6 {
         font-size: 16px
     }
     
     .w3-serif {
         font-family: serif
     }
     
     .w3-sans-serif {
         font-family: sans-serif
     }
     
     .w3-cursive {
         font-family: cursive
     }
     
     .w3-monospace {
         font-family: monospace
     }
     
     h1,
     h2,
     h3,
     h4,
     h5,
     h6 {
         font-family: "Segoe UI", Arial, sans-serif;
         font-weight: 400;
         margin: 10px 0
     }
     
     .w3-wide {
         letter-spacing: 4px
     }
     
     hr {
         border: 0;
         border-top: 1px solid #eee;
         margin: 20px 0
     }
     
     .w3-image {
         max-width: 100%;
         height: auto
     }
     
     img {
         vertical-align: middle
     }
     
     a {
         color: inherit
     }
    

     .w3-table,
     .w3-table-all {
         border-collapse: collapse;
         border-spacing: 0;
         width: 50%;
         display: table
     }
     
     .w3-table-all {
         border: 1px solid #ccc
     }
     
     .w3-bordered tr,
     .w3-table-all tr {
         border-bottom: 1px solid #ddd
     }
     
     .w3-striped tbody tr:nth-child(even) {
         background-color: #f1f1f1
     }
     
     .w3-table-all tr:nth-child(odd) {
         background-color: #fff
     }
     
     .w3-table-all tr:nth-child(even) {
         background-color: #f1f1f1
     }
     
     .w3-hoverable tbody tr:hover,
     .w3-ul.w3-hoverable li:hover {
         background-color: #ccc
     }
     
     .w3-centered tr th,
     .w3-centered tr td {
         text-align: center
     }
     
     .w3-table td,
     .w3-table th,
     .w3-table-all td,
     .w3-table-all th {
         padding: 8px 8px;
         display: table-cell;
         text-align: left;
         vertical-align: top
     }
     
     .w3-table th:first-child,
     .w3-table td:first-child,
     .w3-table-all th:first-child,
     .w3-table-all td:first-child {
         padding-left: 16px
     }
     
     .w3-btn,
     .w3-button {
         border: none;
         display: inline-block;
         padding: 8px 16px;
         vertical-align: middle;
         overflow: hidden;
         text-decoration: none;
         color: inherit;
         background-color: inherit;
         text-align: center;
         cursor: pointer;
         white-space: nowrap
     }
     
     .w3-btn:hover {
         box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
     }
     
     .w3-btn,
     .w3-button {
         -webkit-touch-callout: none;
         -webkit-user-select: none;
         -khtml-user-select: none;
         -moz-user-select: none;
         -ms-user-select: none;
         user-select: none
     }
     
     .w3-disabled,
     .w3-btn:disabled,
     .w3-button:disabled {
         cursor: not-allowed;
         opacity: 0.3
     }
     
     .w3-disabled *,
     :disabled * {
         pointer-events: none
     }
     
     .w3-btn.w3-disabled:hover,
     .w3-btn:disabled:hover {
         box-shadow: none
     }
     
     .w3-badge,
     .w3-tag {
         background-color: #000;
         color: #fff;
         display: inline-block;
         padding-left: 8px;
         padding-right: 8px;
         text-align: center
     }
     
     .w3-badge {
         border-radius: 50%
     }
     
     .w3-ul {
         list-style-type: none;
         padding: 0;
         margin: 0
     }
     
     .w3-ul li {
         padding: 8px 16px;
         border-bottom: 1px solid #ddd
     }
     
     .w3-ul li:last-child {
         border-bottom: none
     }
     
     .w3-tooltip,
     .w3-display-container {
         position: relative
     }
     
     .w3-tooltip .w3-text {
         display: none
     }
     
     .w3-tooltip:hover .w3-text {
         display: inline-block
     }
     
     .w3-ripple:active {
         opacity: 0.5
     }
     
     .w3-ripple {
         transition: opacity 0s
     }
     
     .w3-input {
         padding: 8px;
         display: block;
         border: none;
         border-bottom: 1px solid #ccc;
         width: 100%
     }

     .w3-input-25 {
        padding: 8px;
        display: block;
        border: none;
        border-bottom: 1px solid #ccc;
        width: 25%
    }
     
     .w3-select {
         padding: 9px 0;
         width: 100%;
         border: none;
         border-bottom: 1px solid #ccc
     }
     
     .w3-dropdown-click,
     .w3-dropdown-hover {
         position: relative;
         display: inline-block;
         cursor: pointer
     }
     
     .w3-dropdown-hover:hover .w3-dropdown-content {
         display: block
     }
     
     .w3-dropdown-hover:first-child,
     .w3-dropdown-click:hover {
         background-color: #ccc;
         color: #000
     }
     
     .w3-dropdown-hover:hover>.w3-button:first-child,
     .w3-dropdown-click:hover>.w3-button:first-child {
         background-color: #ccc;
         color: #000
     }
     
     .w3-dropdown-content {
         cursor: auto;
         color: #000;
         background-color: #fff;
         display: none;
         position: absolute;
         min-width: 160px;
         margin: 0;
         padding: 0;
         z-index: 1
     }
     
     .w3-check,
     .w3-radio {
         width: 24px;
         height: 24px;
         position: relative;
         top: 6px
     }
     
     .w3-sidebar {
         height: 100%;
         width: 200px;
         background-color: #fff;
         position: fixed !important;
         z-index: 1;
         overflow: auto
     }
     
     .w3-bar-block .w3-dropdown-hover,
     .w3-bar-block .w3-dropdown-click {
         width: 100%
     }
     
     .w3-bar-block .w3-dropdown-hover .w3-dropdown-content,
     .w3-bar-block .w3-dropdown-click .w3-dropdown-content {
         min-width: 100%
     }
     
     .w3-bar-block .w3-dropdown-hover .w3-button,
     .w3-bar-block .w3-dropdown-click .w3-button {
         width: 100%;
         text-align: left;
         padding: 8px 16px
     }
     
     .w3-main,
     #main {
         transition: margin-left .4s
     }
     
     .w3-modal {
         z-index: 3;
         display: none;
         padding-top: 100px;
         position: fixed;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
         overflow: auto;
         background-color: rgb(0, 0, 0);
         background-color: rgba(0, 0, 0, 0.4)
     }
     
     .w3-modal-content {
         margin: auto;
         background-color: #fff;
         position: relative;
         padding: 0;
         outline: 0;
         width: 600px
     }
     
     .w3-bar {
         width: 100%;
         overflow: hidden
     }
     
     .w3-center .w3-bar {
         display: inline-block;
         width: auto
     }
     
     .w3-bar .w3-bar-item {
         padding: 8px 16px;
         float: left;
         width: auto;
         border: none;
         display: block;
         outline: 0
     }
     
     .w3-bar .w3-dropdown-hover,
     .w3-bar .w3-dropdown-click {
         position: static;
         float: left
     }
     
     .w3-bar .w3-button {
         white-space: normal
     }
     
     .w3-bar-block .w3-bar-item {
         width: 100%;
         display: block;
         padding: 8px 16px;
         text-align: left;
         border: none;
         white-space: normal;
         float: none;
         outline: 0
     }
     
     .w3-bar-block.w3-center .w3-bar-item {
         text-align: center
     }
     
     .w3-block {
         display: block;
         width: 100%
     }
     
     .w3-responsive {
         display: block;
         overflow-x: auto
     }
     
     .w3-container:after,
     .w3-container:before,
     .w3-panel:after,
     .w3-panel:before,
     .w3-row:after,
     .w3-row:before,
     .w3-row-padding:after,
     .w3-row-padding:before,
     .w3-cell-row:before,
     .w3-cell-row:after,
     .w3-clear:after,
     .w3-clear:before,
     .w3-bar:before,
     .w3-bar:after {
         content: "";
         display: table;
         clear: both
     }
     
     .w3-col,
     .w3-half,
     .w3-third,
     .w3-twothird,
     .w3-threequarter,
     .w3-quarter {
         float: left;
         width: 100%
     }
     
     .w3-col.s1 {
         width: 8.33333%
     }
     
     .w3-col.s2 {
         width: 16.66666%
     }
     
     .w3-col.s3 {
         width: 24.99999%
     }
     
     .w3-col.s4 {
         width: 33.33333%
     }
     
     .w3-col.s5 {
         width: 41.66666%
     }
     
     .w3-col.s6 {
         width: 49.99999%
     }
     
     .w3-col.s7 {
         width: 58.33333%
     }
     
     .w3-col.s8 {
         width: 66.66666%
     }
     
     .w3-col.s9 {
         width: 74.99999%
     }
     
     .w3-col.s10 {
         width: 83.33333%
     }
     
     .w3-col.s11 {
         width: 91.66666%
     }
     
     .w3-col.s12 {
         width: 99.99999%
     }
     
     @media (min-width:601px) {
         .w3-col.m1 {
             width: 8.33333%
         }
     
         .w3-col.m2 {
             width: 16.66666%
         }
     
         .w3-col.m3,
         .w3-quarter {
             width: 24.99999%
         }
     
         .w3-col.m4,
         .w3-third {
             width: 33.33333%
         }
     
         .w3-col.m5 {
             width: 41.66666%
         }
     
         .w3-col.m6,
         .w3-half {
             width: 49.99999%
         }
     
         .w3-col.m7 {
             width: 58.33333%
         }
     
         .w3-col.m8,
         .w3-twothird {
             width: 66.66666%
         }
     
         .w3-col.m9,
         .w3-threequarter {
             width: 74.99999%
         }
     
         .w3-col.m10 {
             width: 83.33333%
         }
     
         .w3-col.m11 {
             width: 91.66666%
         }
     
         .w3-col.m12 {
             width: 99.99999%
         }
     }
     
     @media (min-width:993px) {
         .w3-col.l1 {
             width: 8.33333%
         }
     
         .w3-col.l2 {
             width: 16.66666%
         }
     
         .w3-col.l3 {
             width: 24.99999%
         }
     
         .w3-col.l4 {
             width: 33.33333%
         }
     
         .w3-col.l5 {
             width: 41.66666%
         }
     
         .w3-col.l6 {
             width: 49.99999%
         }
     
         .w3-col.l7 {
             width: 58.33333%
         }
     
         .w3-col.l8 {
             width: 66.66666%
         }
     
         .w3-col.l9 {
             width: 74.99999%
         }
     
         .w3-col.l10 {
             width: 83.33333%
         }
     
         .w3-col.l11 {
             width: 91.66666%
         }
     
         .w3-col.l12 {
             width: 99.99999%
         }
     }
     
     .w3-rest {
         overflow: hidden
     }
     
     .w3-stretch {
         margin-left: -16px;
         margin-right: -16px
     }
     
     .w3-content,
     .w3-auto {
         margin-left: auto;
         margin-right: auto
     }
     
     .w3-content {
         max-width: 980px
     }
     
     .w3-auto {
         max-width: 1140px
     }
     
     .w3-cell-row {
         display: table;
         width: 100%
     }
     
     .w3-cell {
         display: table-cell
     }
     
     .w3-cell-top {
         vertical-align: top
     }
     
     .w3-cell-middle {
         vertical-align: middle
     }
     
     .w3-cell-bottom {
         vertical-align: bottom
     }
     
     .w3-hide {
         display: none !important
     }
     
     .w3-show-block,
     .w3-show {
         display: block !important
     }
     
     .w3-show-inline-block {
         display: inline-block !important
     }
     
     @media (max-width:1205px) {
         .w3-auto {
             max-width: 95%
         }
     }
     
     @media (max-width:600px) {
         .w3-modal-content {
             margin: 0 10px;
             width: auto !important
         }
     
         .w3-modal {
             padding-top: 30px
         }
     
         .w3-dropdown-hover.w3-mobile .w3-dropdown-content,
         .w3-dropdown-click.w3-mobile .w3-dropdown-content {
             position: relative
         }
     
         .w3-hide-small {
             display: none !important
         }
     
         .w3-mobile {
             display: block;
             width: 100% !important
         }
     
         .w3-bar-item.w3-mobile,
         .w3-dropdown-hover.w3-mobile,
         .w3-dropdown-click.w3-mobile {
             text-align: center
         }
     
         .w3-dropdown-hover.w3-mobile,
         .w3-dropdown-hover.w3-mobile .w3-btn,
         .w3-dropdown-hover.w3-mobile .w3-button,
         .w3-dropdown-click.w3-mobile,
         .w3-dropdown-click.w3-mobile .w3-btn,
         .w3-dropdown-click.w3-mobile .w3-button {
             width: 100%
         }
     }
     
     @media (max-width:768px) {
         .w3-modal-content {
             width: 500px
         }
     
         .w3-modal {
             padding-top: 50px
         }
     }
     
     @media (min-width:993px) {
         .w3-modal-content {
             width: 900px
         }
     
         .w3-hide-large {
             display: none !important
         }
     
         .w3-sidebar.w3-collapse {
             display: block !important
         }
     }
     
     @media (max-width:992px) and (min-width:601px) {
         .w3-hide-medium {
             display: none !important
         }
     }
     
     @media (max-width:992px) {
         .w3-sidebar.w3-collapse {
             display: none
         }
     
         .w3-main {
             margin-left: 0 !important;
             margin-right: 0 !important
         }
     
         .w3-auto {
             max-width: 100%
         }
     }
     
     .w3-top,
     .w3-bottom {
         position: fixed;
         width: 100%;
         z-index: 1
     }
     
     .w3-top {
         top: 0
     }
     
     .w3-bottom {
         bottom: 0
     }
     
     .w3-overlay {
         position: fixed;
         display: none;
         width: 100%;
         height: 100%;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         background-color: rgba(0, 0, 0, 0.5);
         z-index: 2
     }
     
     .w3-display-topleft {
         position: absolute;
         left: 0;
         top: 0
     }
     
     .w3-display-topright {
         position: absolute;
         right: 0;
         top: 0
     }
     
     .w3-display-bottomleft {
         position: absolute;
         left: 0;
         bottom: 0
     }
     
     .w3-display-bottomright {
         position: absolute;
         right: 0;
         bottom: 0
     }
     
     .w3-display-middle {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         -ms-transform: translate(-50%, -50%)
     }
     
     .w3-display-left {
         position: absolute;
         top: 50%;
         left: 0%;
         transform: translate(0%, -50%);
         -ms-transform: translate(-0%, -50%)
     }
     
     .w3-display-right {
         position: absolute;
         top: 50%;
         right: 0%;
         transform: translate(0%, -50%);
         -ms-transform: translate(0%, -50%)
     }
     
     .w3-display-topmiddle {
         position: absolute;
         left: 50%;
         top: 0;
         transform: translate(-50%, 0%);
         -ms-transform: translate(-50%, 0%)
     }
     
     .w3-display-bottommiddle {
         position: absolute;
         left: 50%;
         bottom: 0;
         transform: translate(-50%, 0%);
         -ms-transform: translate(-50%, 0%)
     }
     
     .w3-display-container:hover .w3-display-hover {
         display: block
     }
     
     .w3-display-container:hover span.w3-display-hover {
         display: inline-block
     }
     
     .w3-display-hover {
         display: none
     }
     
     .w3-display-position {
         position: absolute
     }
     
     .w3-circle {
         border-radius: 50%
     }
     
     .w3-round-small {
         border-radius: 2px
     }
     
     .w3-round,
     .w3-round-medium {
         border-radius: 4px
     }
     
     .w3-round-large {
         border-radius: 8px
     }
     
     .w3-round-xlarge {
         border-radius: 16px
     }
     
     .w3-round-xxlarge {
         border-radius: 32px
     }
     
     .w3-row-padding,
     .w3-row-padding>.w3-half,
     .w3-row-padding>.w3-third,
     .w3-row-padding>.w3-twothird,
     .w3-row-padding>.w3-threequarter,
     .w3-row-padding>.w3-quarter,
     .w3-row-padding>.w3-col {
         padding: 0 8px
     }
     
     .w3-container,
     .w3-panel {
         padding: 0.01em 16px
     }
     
     .w3-panel {
         margin-top: 16px;
         margin-bottom: 16px
     }
     
     .w3-code,
     .w3-codespan {
         font-family: Consolas, "courier new";
         font-size: 16px
     }
     
     .w3-code {
         width: auto;
         background-color: #fff;
         padding: 8px 12px;
         border-left: 4px solid #4CAF50;
         word-wrap: break-word
     }
     
     .w3-codespan {
         color: crimson;
         background-color: #f1f1f1;
         padding-left: 4px;
         padding-right: 4px;
         font-size: 110%
     }
     
     .w3-card,
     .w3-card-2 {
         box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)
     }
     
     .w3-card-4,
     .w3-hover-shadow:hover {
         box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)
     }
     
     .w3-spin {
         animation: w3-spin 2s infinite linear
     }
     
     @keyframes w3-spin {
         0% {
             transform: rotate(0deg)
         }
     
         100% {
             transform: rotate(359deg)
         }
     }
     
     .w3-animate-fading {
         animation: fading 10s infinite
     }
     
     @keyframes fading {
         0% {
             opacity: 0
         }
     
         50% {
             opacity: 1
         }
     
         100% {
             opacity: 0
         }
     }
     
     .w3-animate-opacity {
         animation: opac 0.8s
     }
     
     @keyframes opac {
         from {
             opacity: 0
         }
     
         to {
             opacity: 1
         }
     }
     
     .w3-animate-top {
         position: relative;
         animation: animatetop 0.4s
     }
     
     @keyframes animatetop {
         from {
             top: -300px;
             opacity: 0
         }
     
         to {
             top: 0;
             opacity: 1
         }
     }
     
     .w3-animate-left {
         position: relative;
         animation: animateleft 0.4s
     }
     
     @keyframes animateleft {
         from {
             left: -300px;
             opacity: 0
         }
     
         to {
             left: 0;
             opacity: 1
         }
     }
     
     .w3-animate-right {
         position: relative;
         animation: animateright 0.4s
     }
     
     @keyframes animateright {
         from {
             right: -300px;
             opacity: 0
         }
     
         to {
             right: 0;
             opacity: 1
         }
     }
     
     .w3-animate-bottom {
         position: relative;
         animation: animatebottom 0.4s
     }
     
     @keyframes animatebottom {
         from {
             bottom: -300px;
             opacity: 0
         }
     
         to {
             bottom: 0;
             opacity: 1
         }
     }
     
     .w3-animate-zoom {
         animation: animatezoom 0.6s
     }
     
     @keyframes animatezoom {
         from {
             transform: scale(0)
         }
     
         to {
             transform: scale(1)
         }
     }
     
     .w3-animate-input {
         transition: width 0.4s ease-in-out
     }
     
     .w3-animate-input:focus {
         width: 100% !important
     }
     
     .w3-opacity,
     .w3-hover-opacity:hover {
         opacity: 0.60
     }
     
     .w3-opacity-off,
     .w3-hover-opacity-off:hover {
         opacity: 1
     }
     
     .w3-opacity-max {
         opacity: 0.25
     }
     
     .w3-opacity-min {
         opacity: 0.75
     }
     
     .w3-greyscale-max,
     .w3-grayscale-max,
     .w3-hover-greyscale:hover,
     .w3-hover-grayscale:hover {
         filter: grayscale(100%)
     }
     
     .w3-greyscale,
     .w3-grayscale {
         filter: grayscale(75%)
     }
     
     .w3-greyscale-min,
     .w3-grayscale-min {
         filter: grayscale(50%)
     }
     
     .w3-sepia {
         filter: sepia(75%)
     }
     
     .w3-sepia-max,
     .w3-hover-sepia:hover {
         filter: sepia(100%)
     }
     
     .w3-sepia-min {
         filter: sepia(50%)
     }
     
     .w3-tiny {
         font-size: 10px !important
     }
     
     .w3-small {
         font-size: 12px !important
     }
     
     .w3-medium {
         font-size: 15px !important
     }
     
     .w3-large {
         font-size: 18px !important
     }
     
     .w3-xlarge {
         font-size: 24px !important
     }
     
     .w3-xxlarge {
         font-size: 36px !important
     }
     
     .w3-xxxlarge {
         font-size: 48px !important
     }
     
     .w3-jumbo {
         font-size: 64px !important
     }
     
     .w3-left-align {
         text-align: left !important
     }
     
     .w3-right-align {
         text-align: right !important
     }
     
     .w3-justify {
         text-align: justify !important
     }
     
     .w3-center {
         text-align: center !important
     }
     
     .w3-border-0 {
         border: 0 !important
     }
     
     .w3-border {
         border: 1px solid #ccc !important
     }
     
     .w3-border-top {
         border-top: 1px solid #ccc !important
     }
     
     .w3-border-bottom {
         border-bottom: 1px solid #ccc !important
     }
     
     .w3-border-left {
         border-left: 1px solid #ccc !important
     }
     
     .w3-border-right {
         border-right: 1px solid #ccc !important
     }
     
     .w3-topbar {
         border-top: 6px solid #ccc !important
     }
     
     .w3-bottombar {
         border-bottom: 6px solid #ccc !important
     }
     
     .w3-leftbar {
         border-left: 6px solid #ccc !important
     }
     
     .w3-rightbar {
         border-right: 6px solid #ccc !important
     }
     
     .w3-section,
     .w3-code {
         margin-top: 16px !important;
         margin-bottom: 16px !important
     }
     
     .w3-margin {
         margin: 16px !important
     }
     
     .w3-margin-top {
         margin-top: 16px !important
     }
     
     .w3-margin-bottom {
         margin-bottom: 16px !important
     }
     
     .w3-margin-left {
         margin-left: 16px !important
     }
     
     .w3-margin-right {
         margin-right: 16px !important
     }
     
     .w3-padding-small {
         padding: 4px 8px !important
     }
     
     .w3-padding {
         padding: 8px 16px !important
     }
     
     .w3-padding-large {
         padding: 12px 24px !important
     }
     
     .w3-padding-16 {
         padding-top: 16px !important;
         padding-bottom: 16px !important
     }
     
     .w3-padding-24 {
         padding-top: 24px !important;
         padding-bottom: 24px !important
     }
     
     .w3-padding-32 {
         padding-top: 32px !important;
         padding-bottom: 32px !important
     }
     
     .w3-padding-48 {
         padding-top: 48px !important;
         padding-bottom: 48px !important
     }
     
     .w3-padding-64 {
         padding-top: 64px !important;
         padding-bottom: 64px !important
     }
     
     .w3-padding-top-64 {
         padding-top: 64px !important
     }
     
     .w3-padding-top-48 {
         padding-top: 48px !important
     }
     
     .w3-padding-top-32 {
         padding-top: 32px !important
     }
     
     .w3-padding-top-24 {
         padding-top: 24px !important
     }
     
     .w3-left {
         float: left !important
     }
     
     .w3-right {
         float: right !important
     }
     
     .w3-button:hover {
         color: #000 !important;
         background-color: #ccc !important
     }
     
     .w3-transparent,
     .w3-hover-none:hover {
         background-color: transparent !important
     }
     
     .w3-hover-none:hover {
         box-shadow: none !important
     }
     
     /* Colors */
     .w3-amber,
     .w3-hover-amber:hover {
         color: #000 !important;
         background-color: #ffc107 !important
     }
     
     .w3-aqua,
     .w3-hover-aqua:hover {
         color: #000 !important;
         background-color: #00ffff !important
     }
     
     .w3-blue,
     .w3-hover-blue:hover {
         color: #fff !important;
         background-color: #2196F3 !important
     }
     
     .w3-light-blue,
     .w3-hover-light-blue:hover {
         color: #000 !important;
         background-color: #87CEEB !important
     }
     
     .w3-brown,
     .w3-hover-brown:hover {
         color: #fff !important;
         background-color: #795548 !important
     }
     
     .w3-cyan,
     .w3-hover-cyan:hover {
         color: #000 !important;
         background-color: #00bcd4 !important
     }
     
     .w3-blue-grey,
     .w3-hover-blue-grey:hover,
     .w3-blue-gray,
     .w3-hover-blue-gray:hover {
         color: #fff !important;
         background-color: #607d8b !important
     }
     
     .w3-green,
     .w3-hover-green:hover {
         color: #fff !important;
         background-color: #4CAF50 !important
     }
     
     .w3-light-green,
     .w3-hover-light-green:hover {
         color: #000 !important;
         background-color: #8bc34a !important
     }
     
     .w3-indigo,
     .w3-hover-indigo:hover {
         color: #fff !important;
         background-color: #3f51b5 !important
     }
     
     .w3-khaki,
     .w3-hover-khaki:hover {
         color: #000 !important;
         background-color: #f0e68c !important
     }
     
     .w3-lime,
     .w3-hover-lime:hover {
         color: #000 !important;
         background-color: #cddc39 !important
     }
     
     .w3-orange,
     .w3-hover-orange:hover {
         color: #000 !important;
         background-color: #ff9800 !important
     }
     
     .w3-deep-orange,
     .w3-hover-deep-orange:hover {
         color: #fff !important;
         background-color: #ff5722 !important
     }
     
     .w3-pink,
     .w3-hover-pink:hover {
         color: #fff !important;
         background-color: #e91e63 !important
     }
     
     .w3-purple,
     .w3-hover-purple:hover {
         color: #fff !important;
         background-color: #9c27b0 !important
     }
     
     .w3-deep-purple,
     .w3-hover-deep-purple:hover {
         color: #fff !important;
         background-color: #673ab7 !important
     }
     
     .w3-red,
     .w3-hover-red:hover {
         color: #fff !important;
         /*claudio cor principal da pagina*/
         background-color: rgb(240, 12, 12) !important
     }
     
     .w3-sand,
     .w3-hover-sand:hover {
         color: #000 !important;
         background-color: #fdf5e6 !important
     }
     
     .w3-teal,
     .w3-hover-teal:hover {
         color: #fff !important;
         background-color: #009688 !important
     }
     
     .w3-yellow,
     .w3-hover-yellow:hover {
         color: #000 !important;
         background-color: #ffeb3b !important
     }
     
     .w3-white,
     .w3-hover-white:hover {
         color: #000 !important;
         background-color: #fff !important
     }
     
     .w3-black,
     .w3-hover-black:hover {
         color: #fff !important;
         background-color: rgb(105, 96, 96) !important
     }
     
     .w3-grey,
     .w3-hover-grey:hover,
     .w3-gray,
     .w3-hover-gray:hover {
         color: #000 !important;
         background-color: #9e9e9e !important
     }
     
     .w3-light-grey,
     .w3-hover-light-grey:hover,
     .w3-light-gray,
     .w3-hover-light-gray:hover {
         color: #000 !important;
         background-color: #f1f1f1 !important
     }
     
     .w3-dark-grey,
     .w3-hover-dark-grey:hover,
     .w3-dark-gray,
     .w3-hover-dark-gray:hover {
         color: #fff !important;
         background-color: #616161 !important
     }
     
     .w3-pale-red,
     .w3-hover-pale-red:hover {
         color: #000 !important;
         background-color: #ffdddd !important
     }
     
     .w3-pale-green,
     .w3-hover-pale-green:hover {
         color: #000 !important;
         background-color: #ddffdd !important
     }
     
     .w3-pale-yellow,
     .w3-hover-pale-yellow:hover {
         color: #000 !important;
         background-color: #ffffcc !important
     }
     
     .w3-pale-blue,
     .w3-hover-pale-blue:hover {
         color: #000 !important;
         background-color: #ddffff !important
     }
     
     .w3-text-amber,
     .w3-hover-text-amber:hover {
         color: #ffc107 !important
     }
     
     .w3-text-aqua,
     .w3-hover-text-aqua:hover {
         color: #00ffff !important
     }
     
     .w3-text-blue,
     .w3-hover-text-blue:hover {
         color: #2196F3 !important
     }
     
     .w3-text-light-blue,
     .w3-hover-text-light-blue:hover {
         color: #87CEEB !important
     }
     
     .w3-text-brown,
     .w3-hover-text-brown:hover {
         color: #795548 !important
     }
     
     .w3-text-cyan,
     .w3-hover-text-cyan:hover {
         color: #00bcd4 !important
     }
     
     .w3-text-blue-grey,
     .w3-hover-text-blue-grey:hover,
     .w3-text-blue-gray,
     .w3-hover-text-blue-gray:hover {
         color: #607d8b !important
     }
     
     .w3-text-green,
     .w3-hover-text-green:hover {
         color: #4CAF50 !important
     }
     
     .w3-text-light-green,
     .w3-hover-text-light-green:hover {
         color: #8bc34a !important
     }
     
     .w3-text-indigo,
     .w3-hover-text-indigo:hover {
         color: #3f51b5 !important
     }
     
     .w3-text-khaki,
     .w3-hover-text-khaki:hover {
         color: #b4aa50 !important
     }
     
     .w3-text-lime,
     .w3-hover-text-lime:hover {
         color: #cddc39 !important
     }
     
     .w3-text-orange,
     .w3-hover-text-orange:hover {
         color: #ff9800 !important
     }
     
     .w3-text-deep-orange,
     .w3-hover-text-deep-orange:hover {
         color: #ff5722 !important
     }
     
     .w3-text-pink,
     .w3-hover-text-pink:hover {
         color: #e91e63 !important
     }
     
     .w3-text-purple,
     .w3-hover-text-purple:hover {
         color: #9c27b0 !important
     }
     
     .w3-text-deep-purple,
     .w3-hover-text-deep-purple:hover {
         color: #673ab7 !important
     }
     
     .w3-text-red,
     .w3-hover-text-red:hover {
         color: #f44336 !important
     }
     
     .w3-text-sand,
     .w3-hover-text-sand:hover {
         color: #fdf5e6 !important
     }
     
     .w3-text-teal,
     .w3-hover-text-teal:hover {
         color: #009688 !important
     }
     
     .w3-text-yellow,
     .w3-hover-text-yellow:hover {
         color: #d2be0e !important
     }
     
     .w3-text-white,
     .w3-hover-text-white:hover {
         color: #fff !important
     }
     
     .w3-text-black,
     .w3-hover-text-black:hover {
         color: #000 !important
     }
     
     .w3-text-grey,
     .w3-hover-text-grey:hover,
     .w3-text-gray,
     .w3-hover-text-gray:hover {
         color: #757575 !important
     }
     
     .w3-text-light-grey,
     .w3-hover-text-light-grey:hover,
     .w3-text-light-gray,
     .w3-hover-text-light-gray:hover {
         color: #f1f1f1 !important
     }
     
     .w3-text-dark-grey,
     .w3-hover-text-dark-grey:hover,
     .w3-text-dark-gray,
     .w3-hover-text-dark-gray:hover {
         color: #3a3a3a !important
     }
     
     .w3-border-amber,
     .w3-hover-border-amber:hover {
         border-color: #ffc107 !important
     }
     
     .w3-border-aqua,
     .w3-hover-border-aqua:hover {
         border-color: #00ffff !important
     }
     
     .w3-border-blue,
     .w3-hover-border-blue:hover {
         border-color: #2196F3 !important
     }
     
     .w3-border-light-blue,
     .w3-hover-border-light-blue:hover {
         border-color: #87CEEB !important
     }
     
     .w3-border-brown,
     .w3-hover-border-brown:hover {
         border-color: #795548 !important
     }
     
     .w3-border-cyan,
     .w3-hover-border-cyan:hover {
         border-color: #00bcd4 !important
     }
     
     .w3-border-blue-grey,
     .w3-hover-border-blue-grey:hover,
     .w3-border-blue-gray,
     .w3-hover-border-blue-gray:hover {
         border-color: #607d8b !important
     }
     
     .w3-border-green,
     .w3-hover-border-green:hover {
         border-color: #4CAF50 !important
     }
     
     .w3-border-light-green,
     .w3-hover-border-light-green:hover {
         border-color: #8bc34a !important
     }
     
     .w3-border-indigo,
     .w3-hover-border-indigo:hover {
         border-color: #3f51b5 !important
     }
     
     .w3-border-khaki,
     .w3-hover-border-khaki:hover {
         border-color: #f0e68c !important
     }
     
     .w3-border-lime,
     .w3-hover-border-lime:hover {
         border-color: #cddc39 !important
     }
     
     .w3-border-orange,
     .w3-hover-border-orange:hover {
         border-color: #ff9800 !important
     }
     
     .w3-border-deep-orange,
     .w3-hover-border-deep-orange:hover {
         border-color: #ff5722 !important
     }
     
     .w3-border-pink,
     .w3-hover-border-pink:hover {
         border-color: #e91e63 !important
     }
     
     .w3-border-purple,
     .w3-hover-border-purple:hover {
         border-color: #9c27b0 !important
     }
     
     .w3-border-deep-purple,
     .w3-hover-border-deep-purple:hover {
         border-color: #673ab7 !important
     }
     
     .w3-border-red,
     .w3-hover-border-red:hover {
         border-color: #f44336 !important
     }
     
     .w3-border-sand,
     .w3-hover-border-sand:hover {
         border-color: #fdf5e6 !important
     }
     
     .w3-border-teal,
     .w3-hover-border-teal:hover {
         border-color: #009688 !important
     }
     
     .w3-border-yellow,
     .w3-hover-border-yellow:hover {
         border-color: #ffeb3b !important
     }
     
     .w3-border-white,
     .w3-hover-border-white:hover {
         border-color: #fff !important
     }
     
     .w3-border-black,
     .w3-hover-border-black:hover {
         border-color: #000 !important
     }
     
     .w3-border-grey,
     .w3-hover-border-grey:hover,
     .w3-border-gray,
     .w3-hover-border-gray:hover {
         border-color: #9e9e9e !important
     }
     
     .w3-border-light-grey,
     .w3-hover-border-light-grey:hover,
     .w3-border-light-gray,
     .w3-hover-border-light-gray:hover {
         border-color: #f1f1f1 !important
     }
     
     .w3-border-dark-grey,
     .w3-hover-border-dark-grey:hover,
     .w3-border-dark-gray,
     .w3-hover-border-dark-gray:hover {
         border-color: #616161 !important
     }
     
     .w3-border-pale-red,
     .w3-hover-border-pale-red:hover {
         border-color: #ffe7e7 !important
     }
     
     .w3-border-pale-green,
     .w3-hover-border-pale-green:hover {
         border-color: #e7ffe7 !important
     }
     
     .w3-border-pale-yellow,
     .w3-hover-border-pale-yellow:hover {
         border-color: #ffffcc !important
     }
     
     .w3-border-pale-blue,
     .w3-hover-border-pale-blue:hover {
         border-color: #e7ffff !important
     }`;


            /* Create style document */
            var css = document.createElement('style');
            css.type = 'text/css';

            if (css.styleSheet)
                css.styleSheet.cssText = styles;
            else
                css.appendChild(document.createTextNode(styles));

            /* Append style to the tag name */
            document.getElementsByTagName("head")[0].appendChild(css);



            w3_esta_incluso = true;

        } catch (error) {
            print_red("erro ao adicionar o w3 css na tag head da pagina atual: " + error)
        }

    }




    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================




    //funcao para limpar console
    function limpar() {
        console.clear()
    }




    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================



    //iniciando contrução de modal
    function myFunction() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }









    function modal(titulo_modal, copor_modal, cor_modal, id_modal, funcao_opcional_ao_fechar_modal) {







        //adicionar o w3 caso ele nao exista e a modal seja chamada
        if (w3_esta_incluso == false) {
            w3()
            w3_esta_incluso = true;
            console.log("w3 ja esta incluso ativando modal")
        }

        console.log('funcao de criacao de modal KWL ativado')

        console.log('parametros recebidos')

        if (titulo_modal == null) {
            titulo_modal = "";
        }

        console.log('titulo:' + titulo_modal)

        if (cor_modal == null) {
            cor_modal = 'red';
        }

        console.log('corpo modal:' + cor_modal)

        //console.log('rodape moda:l'+rodape_modal)

        if (cor_modal == null) {
            cor_modal = '';
        }

        console.log('cor modal:' + cor_modal)

        if (id_modal == null) {
            id_modal = numero_aleatorio(0, 100000000);
        }

        console.log('id modal:' + id_modal)

        var html_modal = "";


        html_modal = html_modal + '<div id="' + id_modal + '" class="w3-modal">'


        html_modal = html_modal + '<div class="w3-modal-content">'
        html_modal = html_modal + '<header class="w3-container w3-' + cor_modal + '">'


        if (funcao_opcional_ao_fechar_modal != null && funcao_opcional_ao_fechar_modal != "") {
            html_modal = html_modal + `<span onclick='document.getElementById("` + id_modal + `").style.display="none";` + funcao_opcional_ao_fechar_modal + `' class="w3-button w3-display-topright">&times;</span>`
        } else {
            html_modal = html_modal + `<span onclick='document.getElementById("` + id_modal + `").style.display="none"' class="w3-button w3-display-topright">&times;</span>`
        }

        // html_modal = html_modal + `<span onclick='document.getElementById("` + id_modal + `").style.display="none";ao_fechar_modal()' class="w3-button w3-display-topright">&times;</span>`
        html_modal = html_modal + '<h2>' + titulo_modal + '</h2>'
        html_modal = html_modal + '</header>'
        html_modal = html_modal + '<div class="w3-container">'

        html_modal = html_modal + `'<p><div><div>` + copor_modal + `</div></div></p>'`

        html_modal = html_modal + '</div>'
        html_modal = html_modal + '<footer class="w3-container w3-' + cor_modal + '">'
        html_modal = html_modal + '<p></p>'
        html_modal = html_modal + '</footer>'
        html_modal = html_modal + '</div>'
        html_modal = html_modal + '</div></div>'

        //Create the element using the createElement method.
        var myDiv = document.createElement("div");

        //Set its unique ID.
        myDiv.id = 'div_id';

        //Add your content to the DIV
        myDiv.innerHTML = html_modal;

        //Finally, append the element to the HTML body
        document.body.appendChild(myDiv);

        //mostra a modal
        document.getElementById('' + id_modal + '').style.display = 'block';

    }







    function criar_txt(titulo, conteudo) {

        var tem_extensao = a_em_baba(".txt", titulo);

        if (tem_extensao) {
            criar_arquivo(titulo, conteudo);
        } else {
            criar_arquivo(titulo + ".txt", conteudo);
        }

    }














    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    function criar_arquivo(titulo_do_cumento_com_extensao, conteudo_do_arquivo) {
        var element = document.createElement('a');

        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(conteudo_do_arquivo));

        element.setAttribute('download', titulo_do_cumento_com_extensao);

        element.style.display = 'none';

        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

    }










    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================



    var url_padrao;

    function criar_tag_firebase(numero_da_versao_do_firebase, url_padrao, tag_gerada_pelo_firebase) {
        inicia_firebase(numero_da_versao_do_firebase, url_padrao, tag_gerada_pelo_firebase)

    }


    function start_firebase(numero_da_versao_do_firebase, url_padrao, tag_gerada_pelo_firebase) {
        inicia_firebase(numero_da_versao_do_firebase, url_padrao, tag_gerada_pelo_firebase)
    }

    function inicia_firebase(numero_da_versao_do_firebase, url_padrao, tag_gerada_pelo_firebase) {

        //inicia uma url padrão global em todas as paginas que for iniciado o firebase
        url_padrao = url_padrao;

        var element = document.createElement('div');
        element.style.display = 'none';
        element.setAttribute('id', 'tag_padrao_firebase');
        document.body.appendChild(element);

        //<script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-database.js"></script>
        tag_que_nao_vem_junto = '<script src="https://www.gstatic.com/firebasejs/+' + numero_da_versao_do_firebase + '+/firebase-database.js"></script>';

        try {
            document.getElementById('tag_padrao_firebase').innerHTML = tag_gerada_pelo_firebase + tag_que_nao_vem_junto;
            print('tag padrao firebase iniciada com sucesso!')
            print('\r\ntag enviada pelo usuario: ' + tag_gerada_pelo_firebase);
            print('\r\ntag gerada que nao vem junto com o firebase padroa: ' + tag_que_nao_vem_junto);
            print('versao enviada pelo usuario: ' + numero_da_versao_do_firebase);
        } catch (error) {
            print_red('erro ao adicinoar a tag padrao do firebase!')
            print('\r\ntag enviada pelo usuario: ' + tag_gerada_pelo_firebase);
            print('\r\ntag gerada que nao vem junto com o firebase padroa: ' + tag_que_nao_vem_junto);
            print('versao enviada pelo usuario: ' + numero_da_versao_do_firebase);
        }

    }



















    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================

    function firebase_ler(url_de_busca, funcao_para_executar_ao_ler_o_valor) {
        print_blue("Fibarse iniciando busca em " + url_de_busca);
        var p = '';
        let url = url_de_busca;

        if (funcao_para_executar_ao_ler_o_valor != null && funcao_para_executar_ao_ler_o_valor != "") {
            try {
                fetch(url)
                    .then(function (resp) {
                        return resp.json();
                    })
                    .then(function (data) {
                        if (data != null && data != "") {
                            print_blue("resultado da busca em " + url_de_busca + " \r\n data: " + data);

                            setTimeout(function () {
                                funcao_para_executar_ao_ler_o_valor;
                            }, 2000)

                            return data;
                        } else {
                            setTimeout(function () {
                                funcao_para_executar_ao_ler_o_valor;
                            }, 2000)
                            print_red("NADA ENCONTRADO EM " + url_de_busca);
                        }



                    });
            } catch (error) {
                print_red("ERROR: " + error);
            }

        } else {
            try {
                fetch(url)
                    .then(function (resp) {
                        return resp.json();
                    })
                    .then(function (data) {
                        if (data != null && data != "") {
                            print_blue("resultado da busca em " + url_de_busca + " \r\n data: " + data);

                            return data;
                        } else {

                            print_red("NADA ENCONTRADO EM " + url_de_busca);
                        }



                    });
            } catch (error) {
                print_red("ERROR: " + error);
            }
        }



    }


















    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================




    function firebase_salvar(dados_a_serem_salvos, chave_para_buscar_futuramente, caminho_onde_deve_ser_salvo) {
        try {
            firebase.database().ref().child('AME').push().key;
            var chave = chave_para_buscar_futuramente;
            var updates = {};
            updates[caminho_onde_deve_ser_salvo + chave] = dados_a_serem_salvos;
            firebase.database().ref().update(updates);
            //alert("cadastro realizado com sucesso")
            print_blue("Salvo com sucesso")
            return true;
        } catch (error) {
            print_red("erro ao salvar dados retornando False de boolean " + dados_a_serem_salvos)
            return false
        }
    }











































    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================

    function print_red(texto, tamanho_da_letra) {
        if (tamanho_da_letra != null && tamanho_da_letra != '') {
            print_color(texto, "red", tamanho_da_letra);
        } else {
            print_color(texto, "red", "1");
        }
    }















    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    function print_blue(texto, tamanho_da_letra) {
        if (tamanho_da_letra != null && tamanho_da_letra != '') {
            print_color(texto, "blue", tamanho_da_letra);
        } else {
            print_color(texto, "blue", "1");
        }

    }









    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    function print_yellow(texto, tamanho_da_letra) {
        if (tamanho_da_letra != null && tamanho_da_letra != '') {
            print_color(texto, "yellow", tamanho_da_letra);
        } else {
            print_color(texto, "yellow", "1");
        }

    }





    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================

    function print_green(texto, tamanho_da_letra) {
        if (tamanho_da_letra != null && tamanho_da_letra != '') {
            print_color(texto, "green", tamanho_da_letra);
        } else {
            print_color(texto, "green", "1");
        }

    }










    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    function print_color(texto, cor_em_ingles, tamanho_da_letra) {
        if (tamanho_da_letra != null && tamanho_da_letra != "") {
            console.log("%c" + texto, "color:" + cor_em_ingles + ";font-family:system-ui;font-size:" + tamanho_da_letra + "rem;-webkit-text-stroke: 1px black;font-weight:bold");
        } else {
            if (cor_em_ingles != "" && cor_em_ingles != null) {
                console.log("%c" + texto, "color:" + cor_em_ingles + ";font-family:system-ui;font-size:" + numero_aleatorio(1, 4) + "rem;-webkit-text-stroke: 1px black;font-weight:bold");

            } else {
                console.log("%c" + texto, "color:red;font-family:system-ui;font-size:" + numero_aleatorio(1, 4) + "rem;-webkit-text-stroke: 1px black;font-weight:bold");

            }
        }
    }






    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    function numero_aleatorio(numero_inicial, numero_limite) {
        return Math.floor(Math.random() * (numero_inicial - numero_limite)) + numero_limite;
    }





















    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================



    //funções basicas
    function print(texto) {
        console.log("\r\n\r\n\r\n" + texto + "\r\n\r\n\r\n");
    }



















    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    function sleep(tempo) {
        kwl();
        var loopinho = setInterval(function () {
            print("aguardando " + tempo);
        }, tempo * 1000)

        clearInterval(loopinho);
    }
















    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    function aguardar(tempo) {
        sleep(tempo);
    }


















    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    function status(texto) {
        print(texto);
    }


















    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================

    function simular_click(onde_vamos_clicar) {
        click(onde_vamos_clicar);
    }


























    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    function clicar(onde_vamos_clicar) {
        click(onde_vamos_clicar);
    }


















    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================

    function click(onde_vamos_clicar) {
        kwl();
        try {
            document.querySelector(onde_vamos_clicar).click();
        } catch (error) {
            var element = onde_vamos_clicar;
            var eventName = "click";
            var options = extend(defaultOptions, arguments[2] || {});
            var oEvent, eventType = null;

            for (var name in eventMatchers) {
                if (eventMatchers[name].test(eventName)) {
                    eventType = name;
                    break;
                }
            }

            if (!eventType)
                throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

            if (document.createEvent) {
                oEvent = document.createEvent(eventType);
                if (eventType == 'HTMLEvents') {
                    oEvent.initEvent(eventName, options.bubbles, options.cancelable);
                } else {
                    oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
                        options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
                        options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
                }
                element.dispatchEvent(oEvent);
            } else {
                options.clientX = options.pointerX;
                options.clientY = options.pointerY;
                var evt = document.createEventObject();
                oEvent = extend(evt, options);
                element.fireEvent('on' + eventName, oEvent);
            }
            return element;
        }



        function extend(destination, source) {
            for (var property in source)
                destination[property] = source[property];
            return destination;
        }

        var eventMatchers = {
            'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
            'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
        }
        var defaultOptions = {
            pointerX: 0,
            pointerY: 0,
            button: 0,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            bubbles: true,
            cancelable: true

        }


    }




















    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    //funcão para remover espaços obresalentes e quebras de linha
    function remover_quebra_de_linha_e_espacos_a_mais(texto) {
        kwl();
        texto_mega_bruto = texto;
        texto_mega_bruto = (texto_mega_bruto).replaceAll(/(\r\n|\n|\r)/gm, "");
        //removendo quebra de linha
        item_atual = (texto_mega_bruto).replaceAll(/( )+/g, " ");
        return item_atual;
    }




























    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    function kwl() {
        print("KWL javascript por Claudio s. S. versao - 10/06/2021 - 011 99495 - 3116");
    }























    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================

    function a_dentro_de_baba(palavra_que_estamos_procurando_no_texto, texto_onde_vamos_procurar_a_palavra) {
        verifica_se_tem_a_dentro_de_baba(palavra_que_estamos_procurando_no_texto, texto_onde_vamos_procurar_a_palavra)
    }

    function a_em_baba(palavra_que_estamos_procurando_no_texto, texto_onde_vamos_procurar_a_palavra) {
        verifica_se_tem_a_dentro_de_baba(palavra_que_estamos_procurando_no_texto, texto_onde_vamos_procurar_a_palavra)
    }

    function tem_a_em_baba(palavra_que_estamos_procurando_no_texto, texto_onde_vamos_procurar_a_palavra) {
        verifica_se_tem_a_dentro_de_baba(palavra_que_estamos_procurando_no_texto, texto_onde_vamos_procurar_a_palavra)
    }

    function tem_a_dentro_de_baba(palavra_que_estamos_procurando_no_texto, texto_onde_vamos_procurar_a_palavra) {
        verifica_se_tem_a_dentro_de_baba(palavra_que_estamos_procurando_no_texto, texto_onde_vamos_procurar_a_palavra)
    }

    function verifica_se_tem_a_dentro_de_baba(palavra_que_estamos_procurando_no_texto, texto_onde_vamos_procurar_a_palavra) {
        return texto_onde_vamos_procurar_a_palavra.includes(palavra_que_estamos_procurando_no_texto);
    }



























    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================


    //console.log(verifica_se_tem_x_dentro_de_y("a","baba"));

    function pega_valor(de_onde_vamos_pegar) {
        kwl();
        try {
            valor_capiturado = document.querySelector(de_onde_vamos_pegar).textContent;
            if (valor_capiturado != "") {
                return remover_quebra_de_linha_e_espacos_a_mais(valor_capiturado);
            } else {
                valor_capiturado = document.querySelector(de_onde_vamos_pegar).value;
                if (valor_capiturado != "") {
                    return remover_quebra_de_linha_e_espacos_a_mais(valor_capiturado);
                } else {
                    valor_capiturado = document.querySelector(de_onde_vamos_pegar).innerHTML;
                    if (valor_capiturado != "") {
                        return remover_quebra_de_linha_e_espacos_a_mais(valor_capiturado);
                    } else {
                        return "nada_encontrado";
                    }
                }
            }

        } catch (error) {
            console.log(error);
        }
    }

    //selector de onde vamos pegar o valor
    //pega_valor("body > div.container-fluid.bg-casa-civil > div.page-header > h3");


    /*

    Observe que, como um terceiro parâmetro, você pode passar 'opções'. As opções que você não especifica são obtidas de defaultOptions (consulte a parte inferior do script). Portanto, se você deseja, por exemplo, especificar as coordenadas do mouse, pode fazer algo como:

    simulate(document.getElementById("btn"), "click", { pointerX: 123, pointerY: 321 })
    */

    //onde vamos clicar

    //simulate(document.querySelector("#endereco_btn_cep_cliente_0"), "click");


    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================



    function dia_da_semana(inteiro_para_avancar_ou_voltar_dia) {
        print('funcao dia da semana iniciado')

        if (inteiro_para_avancar_ou_voltar_dia == null || inteiro_para_avancar_ou_voltar_dia == "" || inteiro_para_avancar_ou_voltar_dia == NaN) {
            inteiro_para_avancar_ou_voltar_dia = 0;
        }


        print("inteiro_para_avancar_ou_voltar_dia " + inteiro_para_avancar_ou_voltar_dia);


        // Obtém a data/hora atual
        var data = new Date();

        print('data' + data)

        //var dia = data.setDate(data.getDay() + (inteiro_para_avancar_ou_voltar_dia));

        var dia = data.getDay() + (inteiro_para_avancar_ou_voltar_dia);

        print('dia:' + dia)


        if (dia == -7) {
            dia = 'domingo';
        }

        if (dia == -6) {
            dia = 'segunda';
        }

        if (dia == -5) {
            dia = 'terca';
        }

        if (dia == -4) {
            dia = 'quarta';
        }

        if (dia == -3) {
            dia = 'quinta';
        }

        if (dia == -2) {
            dia = 'sexta';
        }

        if (dia == -1) {
            dia = 'sabado';
        }

        if (dia == 0) {
            dia = 'domingo';
        }
        if (dia == 1) {
            dia = 'segunda';
        }
        if (dia == 2) {
            dia = 'terca';
        }
        if (dia == 3) {
            dia = 'quarta';
        }
        if (dia == 4) {
            dia = 'quinta';
        }
        if (dia == 5) {
            dia = 'sexta';
        }
        if (dia == 6) {
            dia = 'sabado';
        }
        if (dia == 7) {
            dia = 'domingo';
        }
        return dia;







    }



    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================





















    function dia(inteiro_para_avancar_ou_voltar_dia) {

        print("funcao kwl DIA ativada e recebeu o prametro: " + inteiro_para_avancar_ou_voltar_dia);



        // Obtém a data/hora atual
        var data = new Date();

        //se tiver um numero para voltar ou adicionar dia
        if (inteiro_para_avancar_ou_voltar_dia != null && inteiro_para_avancar_ou_voltar_dia != "") {

            inteiro_para_avancar_ou_voltar_dia = parseInt(inteiro_para_avancar_ou_voltar_dia);

            if (inteiro_para_avancar_ou_voltar_dia != NaN) {
                data.setDate(data.getDate() + inteiro_para_avancar_ou_voltar_dia);
            }

        }

        // Guarda cada pedaço em uma variável
        var dia = data.getDate(); // 1-31


        return dia



    }

















    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================







    function mes(inteiro_para_avancar_ou_voltar_mes) {

        print("funcao kwl MES ativada e recebeu o prametro: " + inteiro_para_avancar_ou_voltar_mes);



        // Obtém a data/hora atual
        var data = new Date();

        // Guarda cada pedaço em uma variável
        var mes = data.getMonth(); // 0-11 (zero=janeiro)

        //se tiver um numero para voltar ou adicionar dia
        if (inteiro_para_avancar_ou_voltar_mes != null && inteiro_para_avancar_ou_voltar_mes != "") {

            inteiro_para_avancar_ou_voltar_mes = parseInt(inteiro_para_avancar_ou_voltar_mes);

            if (inteiro_para_avancar_ou_voltar_mes != NaN) {


                // data.setDate(data.getDate() + inteiro_para_avancar_ou_voltar_mes);

                mes = (parseInt(mes) + 1) + inteiro_para_avancar_ou_voltar_mes //janeiro 1 && dezembro 12 


            }

        } else {
            mes = parseInt(mes) + 1 //janeiro 1 && dezembro 12 
        }





        return mes



    }




















    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================




    function ano(inteiro_para_avancar_ou_voltar_ano) {

        print("funcao kwl ANO ativada e recebeu o prametro: " + inteiro_para_avancar_ou_voltar_ano);



        // Obtém a data/hora atual
        var data = new Date();

        // Guarda cada pedaço em uma variável
        var ano = data.getFullYear(); // 4 dígitos

        //se tiver um numero para voltar ou adicionar dia
        if (inteiro_para_avancar_ou_voltar_ano != null && inteiro_para_avancar_ou_voltar_ano != "") {

            inteiro_para_avancar_ou_voltar_ano = parseInt(inteiro_para_avancar_ou_voltar_ano);

            if (inteiro_para_avancar_ou_voltar_ano != NaN) {


                // data.setDate(data.getDate() + inteiro_para_avancar_ou_voltar_mes);

                ano = (parseInt(ano) + 1) + inteiro_para_avancar_ou_voltar_ano


            }

        } else {
            ano = parseInt(ano) //janeiro 1 && dezembro 12 
        }





        return ano



    }




























    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================




    function hora(inteiro_para_avancar_ou_voltar_hora) {

        print("funcao kwl hora ativada e recebeu o prametro: " + inteiro_para_avancar_ou_voltar_hora);



        // Obtém a data/hora atual
        var data = new Date();

        // Guarda cada pedaço em uma variável
        var hora = data.getHours(); // 0-23


        //se tiver um numero para voltar ou adicionar dia
        if (inteiro_para_avancar_ou_voltar_hora != null && inteiro_para_avancar_ou_voltar_hora != "") {

            inteiro_para_avancar_ou_voltar_hora = parseInt(inteiro_para_avancar_ou_voltar_hora);

            if (inteiro_para_avancar_ou_voltar_hora != NaN) {


                // data.setDate(data.getDate() + inteiro_para_avancar_ou_voltar_mes);

                hora = (parseInt(hora) + 1) + inteiro_para_avancar_ou_voltar_hora


            }

        } else {
            hora = parseInt(hora) + 1 //janeiro 1 && dezembro 12 
        }





        return hora



    }

































    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================




    function minuto(inteiro_para_avancar_ou_voltar_minuto) {

        print("funcao kwl minuto ativada e recebeu o prametro: " + inteiro_para_avancar_ou_voltar_minuto);



        // Obtém a data/hora atual
        var data = new Date();

        // Guarda cada pedaço em uma variável
        var minuto = data.getMinutes(); // 0-59

        //se tiver um numero para voltar ou adicionar dia
        if (inteiro_para_avancar_ou_voltar_minuto != null && inteiro_para_avancar_ou_voltar_minuto != "") {

            inteiro_para_avancar_ou_voltar_minuto = parseInt(inteiro_para_avancar_ou_voltar_minuto);

            if (inteiro_para_avancar_ou_voltar_minuto != NaN) {


                // data.setDate(data.getDate() + inteiro_para_avancar_ou_voltar_mes);

                minuto = (parseInt(minuto) + 1) + inteiro_para_avancar_ou_voltar_minuto


            }

        } else {
            minuto = parseInt(minuto) + 1 //janeiro 1 && dezembro 12 
        }





        return minuto



    }

























    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================
    //===============================================================================================================




    function segundo(inteiro_para_avancar_ou_voltar_segundo) {

        print("funcao kwl segundo ativada e recebeu o prametro: " + inteiro_para_avancar_ou_voltar_segundo);



        // Obtém a data/hora atual
        var data = new Date();

        // Guarda cada pedaço em uma variável
        var segundo = data.getSeconds(); // 0-59


        //se tiver um numero para voltar ou adicionar dia
        if (inteiro_para_avancar_ou_voltar_segundo != null && inteiro_para_avancar_ou_voltar_segundo != "") {

            inteiro_para_avancar_ou_voltar_segundo = parseInt(inteiro_para_avancar_ou_voltar_segundo);

            if (inteiro_para_avancar_ou_voltar_segundo != NaN) {


                // data.setDate(data.getDate() + inteiro_para_avancar_ou_voltar_mes);

                segundo = (parseInt(segundo) + 1) + inteiro_para_avancar_ou_voltar_segundo


            }

        } else {
            segundo = parseInt(segundo) + 1 //janeiro 1 && dezembro 12 
        }





        return segundo



    }



} catch (error) {
    console.log('erro no kwl:' + error)
}





























