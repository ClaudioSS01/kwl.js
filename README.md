# kwl.js
kwl.js é uma biblioteca javascript com varias funções para ajudar ao criar paginas web
#
# =======================
# =======================
#
#                    KWL javascript por Claudio s. S. versao - 22/09/2021 - 011 99495 - 3116
#
# =======================
# =======================
#
# comandos principais
#
# =======================
# =======================
sleep(tempo);<br />
aguardar(tempo);<br />
status(texto);<br />
simular_click(onde_vamos_clicar);<br />
clicar(onde_vamos_clicar);<br />
click(onde_vamos_clicar);<br />
pega_valor(de_onde_vamos_pegar); //pega valor da pagina html via id, class ou qq outro parametro<br />
criar_arquivo(titulo_do_cumento_com_extensao,conteudo_do_arquivo) // criar_arquivo("teste.txt","funcionando");<br />
limpar() para limpar o terminal<br />
buscar_texto_na_pagina(palavra_que_estamos_procurando_na_pagina); <br />
pegar_id_pelo_class(class_do_elemento_que_vamos_pegar_o_id) //retorna o id do elemento que vc fornecer o class<br />
# =======================
# print
# =======================
print(texto);<br />
print_color(texto,cor_em_ingles,tamanho_da_letra) //printa no console colorido<br />
print_red(texto,tamanho_da_letra_opcional)<br />
print_green(texto,tamanho_da_letra_opcional)<br />
print_blue(texto,tamanho_da_letra_opcional)<br />
print_yellow(texto,tamanho_da_letra_opcional)<br />
# =======================<br />
# trabalhando com texto 
# =======================
verifica_se_tem_a_dentro_de_baba("a","baba"); //true<br />
a_em_baba("a","baba") // true<br />
tem_a_dentro_de_baba("a","baba") //true<br />
remover_quebra_de_linha_e_espacos_a_mais(texto);<br />
encontre("tag do elemento ex: span","texto que estamos procurando","todos ou 1") //retorna a class do texto que estamos procurando ou a lista do texto<br />
# =======================
# trabalhando com numero 
# =======================
numero_aleatorio(numero_inicial,numero_limite);<br />
# =======================
# trabalhando com data 
# =======================
dia() => retorna o dia de hoje<br />
dia(-1) => retorna o dia de ontem<br />
dia(+1) => retorna o dia de amanha<br />
mes() //segue o mesmo processo do dia acima<br />
ano() //segue o mesmo processo do mês e do dia<br />
dia_da_semana(inteiro_para_avancar_ou_voltar_dia) // retorna segunda, terca, quarta etc<br />
# =======================
# trabalhando com hora 
# =======================
hora() //retorna a hora atual <br />
hora(-1) //retorna uma hora antes <br />
hora(+1) //retorna uma hora depois<br />
minuto() //segue o mesmo processo de hora <br />
segundo() //segue o mesmo processo de hora e minuto<br />
# =======================
# trabalhando com firebase 
# =======================
firebase_salvar(dados_a_serem_salvos,chave_para_buscar_futuramente,caminho_onde_deve_ser_salvo)<br />
exemplo da funçao acima  firebase_salvar("Joao","nome","funcionario/ti/")<br />
firebase_ler(url_de_busca,funcao_opcional_a_ser_executada_ao_ler_o_valor)<br />
exemplo firebase_ler('https://sistemadesenhas-f7261-default-rtdb.firebaseio.com/senha/face.json?',print_yellow('funcinando'));<br />
start_firebase(numero_da_versao_do_fireba,url_padrao,tag_gerada_pelo_firebase)<br />
inicia_firebase(numero_da_versao_do_firebase,url_padrao,tag_gerada_pelo_firebase) <br />
exemplo<br />
start_firebase("8.7.1","https://sistemadesenhas-f7261-default-rtdb.firebaseio.com/","tag que vem do firebase dentro de uma variavel")<br />
exemplo<br />
inicia_firebase("8.7.1","https://sistemadesenhas-f7261-default-rtdb.firebaseio.com/","tag que vem do firebase dentro de uma variavel")<br />
criar_tag_firebase(numero_da_versao_do_firebase, url_padrao, tag_gerada_pelo_firebase)<br />
# =======================
# trabalhar com arquivos 
# =======================
criar_txt("meu_arquivo","conteudo dentro do txt")<br />
criar_arquivo("meu_novo.html","conteudo do meu novo html")<br />
# =======================
# criando modal
# =======================
modal(titulo_modal,copor_modal,cor_modal,id_modal)<br />
exemplo
modal('usuarios','<h1>meus usuarios</h1>','red','meu_id')<br />
# =======================
# CSS 
# =======================
alterando um elemento class<br />
alterar_class(id_do_elemento_que_vamos_mudar_o_class,class_que_vamos_adicionar)<br />
adicionar nosso proprio css<br />
kwl_css()<br />
w3css()<br />
w3()<br />
adicionar_w3css();<br />
# =======================
# som trabalhando com sons 
# =======================
som(nota_ou_frenquencia,tempo_de_duracao_do_toque)<br />
exemplo:<br />
som('do') //chamar pela nota<br />
som('do',1000)  //alterar a frequencia com a qual o som sera chamado<br />
som(135) //mudar a frenquencia do som<br />
# =======================
# recarregar pagina
# =======================
recarregar()<br />
recarregar_pagina()<br />
reload_page()<br />
# =======================
# trabalhando com local storage
# =======================
salvar_local('chave para lermos depois','valor que queremos guardar')<br />
ler_local('chave do que queremos ler')<br />
apagar_local('chave do que queremos apagar')<br />
# =======================
# texto em voz 
# =======================
fale('texto que desejo que o robo fale')<br />
# =======================
# trabalhando com dinheiro
# =======================
dinheiro('10.50','10.75','soma')<br />
dinheiro('10.50','10.75','subtrai')<br />
dinheiro('10.50','10.75','mais')<br />
dinheiro('10.50','10.75','menos')<br />
dinheiro('10.50', '3','divide')<br />
dinheiro('10.50','4','multiplica')<br />
dinheiro('10.50','10.75','+')<br />
dinheiro('10.50','10.75','-')<br />
dinheiro('10.50','5','*')<br />
dinheiro('10.50','5','/')<br />
