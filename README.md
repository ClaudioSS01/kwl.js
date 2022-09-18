# kwl.js
kwl.js é uma biblioteca javascript com varias funções para ajudar ao criar paginas web

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
