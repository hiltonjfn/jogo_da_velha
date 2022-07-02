var jogador = "p1";
var contabilizar_jogadas = 0;
var pc = true;


var pc_jogadas = ['a','b','c','d','e','f','g','h','i']


function escolha(x){

    /*pc_jogadas contabiliza quais lugares foram jogados*/
    pc_jogadas.splice(pc_jogadas.indexOf(x), 1);

    remever_quadrado(x);
    

    /*Contabiliza quantas jogadas foram feitas*/
    contabilizar_jogadas++

    if(jogador == "p1"){
        jogada(x,'background-color: red;','x');    
        jogador = "p2";
        if(jogador == "p2"){
            if(pc == true){setTimeout(bot ,1000);} 
        }
            
        
        
    }
    else{;
        jogada(x,'background-color: blue;','o');jogador = "p1"
    }
    
}



function jogada(id,cor,valor){
    var caixa = window.document.getElementById(id);
    caixa.setAttribute('style',cor);
    caixa.setAttribute('value',valor);
    verificar(valor);
       
    
}


function verificar(valor){

    var vitoria = String(a.value) == String(b.value) && String(b.value) ==  String(c.value) && String(c.value) == valor  ||
    String(d.value) == String(e.value) && String(e.value) ==  String(f.value) && String(f.value) == valor ||
    String(g.value) == String(h.value) && String(h.value) ==  String(i.value) && String(i.value) == valor ||

    String(a.value) == String(d.value) && String(d.value) ==  String(g.value) && String(g.value) == valor ||
    String(b.value) == String(e.value) && String(e.value) ==  String(h.value) && String(h.value) == valor ||
    String(c.value) == String(f.value) && String(f.value) ==  String(i.value) && String(i.value) == valor ||

    String(a.value) == String(e.value) && String(e.value) ==  String(i.value) && String(i.value) == valor ||
    String(c.value) == String(e.value) && String(e.value) ==  String(g.value) && String(g.value) == valor;




    if(vitoria == true){
        alert(valor + " ganhou!!!");
        
    }
    if(contabilizar_jogadas == 9 && vitoria == false){
        alert("deu velha")
    }
    


}


function bot(){
    return estrategia();          
}


function estrategia(){
    var bot_jogada;

    if(String(a.value) == String(b.value) && String(c.value) == '' && String(a.value) != '' ){
        bot_jogada = 'c';
        return escolha(bot_jogada);
    }

    if(String(a.value) == String(c.value) && String(b.value) == '' && String(a.value) != ''){
        bot_jogada = 'b';
        return escolha(bot_jogada);
    }

    if(String(b.value) == String(c.value) && String(a.value) == '' && String(b.value) != ''){
        bot_jogada = 'a';
        return escolha(bot_jogada);
    }

    if(String(d.value) == String(e.value) && String(f.value) == '' && String(d.value) != ''){
        bot_jogada = 'f';
        return escolha(bot_jogada);
    }
    
    if(String(d.value) == String(f.value) && String(e.value) == '' && String(d.value) != ''){
        bot_jogada = 'e';
        return escolha(bot_jogada);
    }

    if(String(f.value) == String(e.value) && String(d.value) == '' && String(f.value) != ''){
        bot_jogada = 'd';
        return escolha(bot_jogada);
    }

    if(String(i.value) == String(h.value) && String(g.value) == '' && String(i.value) != ''){
        bot_jogada = 'g';
        return escolha(bot_jogada);
    }
    
    if(String(i.value) == String(g.value) && String(h.value) == '' && String(i.value) != ''){
        bot_jogada = 'h';
        return escolha(bot_jogada);
    }

    if(String(g.value) == String(h.value) && String(i.value) == '' && String(g.value) != ''){
        bot_jogada = 'i';
        return escolha(bot_jogada);
    }


    if(String(a.value) == String(d.value) && String(g.value) == '' && String(a.value) != ''){
        bot_jogada = 'g';
        return escolha(bot_jogada);
    }

    if(String(a.value) == String(g.value) && String(d.value) == '' && String(a.value) != ''){
        bot_jogada = 'd';
        return escolha(bot_jogada);
    }

    if(String(d.value) == String(g.value) && String(a.value) == '' && String(d.value) != ''){
        bot_jogada = 'a';
        return escolha(bot_jogada);
    }

    if(String(b.value) == String(e.value) && String(h.value) == '' && String(b.value) != ''){
        bot_jogada = 'h';
        return escolha(bot_jogada);
    }

    if(String(b.value) == String(h.value) && String(e.value) == '' && String(b.value) != ''){
        bot_jogada = 'e';
        return escolha(bot_jogada);
    }

    if(String(h.value) == String(e.value) && String(b.value) == '' && String(h.value) != ''){
        bot_jogada = 'b';
        return escolha(bot_jogada);
    }

    if(String(c.value) == String(f.value) && String(i.value) == '' && String(c.value) != ''){
        bot_jogada = 'i';
        return escolha(bot_jogada);
    }

    if(String(c.value) == String(i.value) && String(f.value) == '' && String(c.value) != ''){
        bot_jogada = 'f';
        return escolha(bot_jogada);
    }

    if(String(f.value) == String(i.value) && String(c.value) == '' && String(f.value) != ''){
        bot_jogada = 'c';
        return escolha(bot_jogada);
    }

    if(String(a.value) == String(e.value) && String(i.value) == '' && String(a.value) != ''){
        bot_jogada = 'i';
        return escolha(bot_jogada);
    }

    if(String(a.value) == String(i.value) && String(e.value) == '' && String(a.value) != ''){
        bot_jogada = 'e';
        return escolha(bot_jogada);
    }

    if(String(e.value) == String(i.value) && String(a.value) == '' && String(e.value) != ''){
        bot_jogada = 'a';
        return escolha(bot_jogada);
    }

    if(String(c.value) == String(e.value) && String(g.value) == '' && String(c.value) != ''){
        bot_jogada = 'g';
        return escolha(bot_jogada);
    }

    if(String(c.value) == String(g.value) && String(e.value) == '' && String(c.value) != ''){
        bot_jogada = 'e';
        return escolha(bot_jogada);
    }

    if(String(g.value) == String(e.value) && String(c.value) == '' && String(g.value) != ''){
        bot_jogada = 'c';
        return escolha(bot_jogada);
    }

    else{
        var bot_jogada = pc_jogadas[Math.floor(Math.random()*pc_jogadas.length)];
        return escolha(bot_jogada);}
}

function remever_quadrado(x){
    var botao = window.document.getElementById(x);
    botao.setAttribute('onclick','alerta_de_jogada()')
}

function alerta_de_jogada(){
    alert("Vc ja jogou ai sua anta!!!")
}

function resetar(){
    var tabuleiro = window.document.getElementById('tabuleiro');
    tabuleiro.innerHTML = 
    ` <input onclick="escolha('a')" type="button" id="a" value="">
    <input onclick="escolha('b')" type="button" id="b" value="">
    <input onclick="escolha('c')" type="button" id="c" value="">
    <input onclick="escolha('d')" type="button" id="d" value="">
    <input onclick="escolha('e')" type="button" id="e" value="">
    <input onclick="escolha('f')" type="button" id="f" value="">
    <input onclick="escolha('g')" type="button" id="g" value="">
    <input onclick="escolha('h')" type="button" id="h" value="">
    <input onclick="escolha('i')" type="button" id="i" value="">`;

    return pc_jogadas = ['a','b','c','d','e','f','g','h','i'];
}