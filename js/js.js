



function escolha(id){
    var caixa = window.document.getElementById(id);
    caixa.setAttribute('style','background-color: red;');
    caixa.setAttribute('value','x');
    verificar();
   

}


    


function verificar(){
    if(String(a.value) &&  String(b.value) &&  String(c.value) == 'x' ||
       String(d.value) &&  String(e.value) &&  String(f.value) == 'x' ||
       String(g.value) &&  String(h.value) &&  String(i.value) == 'x' ||

       String(a.value) &&  String(d.value) &&  String(g.value) == 'x' ||
       String(b.value) &&  String(e.value) &&  String(h.value) == 'x' ||
       String(c.value) &&  String(f.value) &&  String(i.value) == 'x' ||

       String(a.value) &&  String(e.value) &&  String(i.value) == 'x' ||
       String(c.value) &&  String(e.value) &&  String(g.value) == 'x' 
       
       ){
        alert("Vc ganhou");
    }


}







