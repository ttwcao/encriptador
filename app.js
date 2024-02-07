//criação array para receber os valores
let textoDigitado = [];
let novoTexoDigitado = [];

let textoDescriptografado;
let novoTextoDescriptografado;

//definição do título da pagina
let titulo = document.querySelector('title');
//inserir texto no título
titulo.innerHTML = 'Desafio Alura - Decodificador';

//obter resolução da tela para ajustar elementos textarea
let resolucaoLargura = window.innerWidth;
function AjustaTextarea(){
    if (resolucaoLargura > 1100){
        document.getElementById('texto').style.height='600px';
       // document.getElementby('resultado').style.height='600px';
    } else if (resolucaoLargura <= 1100){
        document.getElementById('texto').style.height='300px';
       // document.getElementById('resultado').style.height='600px';
    } else if(resolucaoLargura <= 450){
        document.getElementById('texto').style.height='200px';
       // document.getElementById('resultado').style.height='200px';
    }
}

AjustaTextarea();

//definição de mensagem, instrução, imagem inical, botão copiar
//título h4
let tituloH4Texto = 'Nenhuma mensagem encontrada';
let tituloH4 = document.querySelector('h4');
//inserir mensagem no título
tituloH4.innerHTML = tituloH4Texto;

//instrução
let instrucaoInicialTexto = 'Digite um texto que você deseja criptografar ou descriptografar.';
let instrucaoInicialGet = document.getElementById('instrucao');
//inserir instrução
instrucaoInicialGet.innerHTML = instrucaoInicialTexto;

//botao copiar
let botaoCopiar ='<button legenf onclick="funcaoCopiar()" id="botaoCopiar">copiar</button>';
let botaoCopiarGet = document.getElementById('ExibeBotaoCopia');

//mensagem de copia
document.getElementById('mensagemCopia').style.display='none';


//limpa input value
function criptando(){
    let inputTextInicial = document.getElementById('texto');
    inputTextInicial.value = '';
    textoCampoInput = '';
}

//bonus: botão copiar

function escondeCopiaInfo(){
    document.getElementById('mensagemCopia').style.display='none';
}

function funcaoCopiar() {
    let submit = document.getElementById("botaoCopiar")
    submit.addEventListener('click', function(){
        var copyText = document.getElementById("resultado");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);

        document.getElementById('mensagemCopia').style.display='block';
        let copiaInfo = 'Texto copiado';
        document.getElementById('mensagemCopia').innerHTML=copiaInfo;
    }
    );
    setTimeout(escondeCopiaInfo, 2000);
}

//função criptografar
function criptografar(){

    //validar textearea
    if(document.getElementById('texto').value==''){  
        document.getElementById('texto').focus();
        document.getElementById('descriptografarBotao').style.cursor='not-allowed';
        document.getElementById("descriptografarBotao").disabled = true;
        document.getElementById('texto').placeholder='Informe o texto a ser Criptografado';
    } else {
                
        document.getElementById('descriptografarBotao').style.cursor='auto';
        document.getElementById("descriptografarBotao").disabled = false;
        

        //zerar elementos inicais da tela
        document.getElementById('apresentacao__conteudo__direita__img').style.background='#FFF';
        document.getElementById('apresentacao__conteudo__direita__img').style.height='1px';
        let imagemInicialGet = '';
        imagemInicialGet.innerHTML= '';
        tituloH4.innerHTML = '';
        instrucaoInicialGet.innerHTML = '';
        botaoCopiarGet.innerHTML = botaoCopiar;

        //selecionar o textarea
        converteLoweGet = document.getElementById('texto').value;
        textoDigitado = converteLoweGet.toLocaleLowerCase();

        //contar caracteres no texto
        let quantidadeCaracteres = textoDigitado.length;

        //limpar margin section direita 
        document.getElementById('apresentacao__conteudo__direita__img').style.margin='0';
        document.getElementById('apresentacao__conteudo__direita__info').style.margin='0';
        document.getElementById('instrucao').style.margin='0';
        instrucao
        
        //loop para realizar a criptografia
        for(let i=0; i<quantidadeCaracteres; i++) {
            
            if(textoDigitado[i] == 'e') {
                novoTexoDigitado[i] = 'enter';
            }else if(textoDigitado[i] == 'i'){
                novoTexoDigitado[i] = 'imes';
            }
            else if(textoDigitado[i] == 'a'){
                novoTexoDigitado[i] = 'ai';
            }
            else if(textoDigitado[i] == 'o'){
                novoTexoDigitado[i] = 'ober';
            }
            else if (textoDigitado[i] == 'u') {
                novoTexoDigitado[i] = 'ufat';
            }else {
                novoTexoDigitado[i] = textoDigitado[i];
            }



            //exibir dados
            let textoCriptorafado = document.getElementById('MostraCriptoDescripto');
            let textoCriptorafadoRows = document.querySelector('textarea');

            //ajuste do textarea lado direito
            if (resolucaoLargura > 1100){
                textoCriptorafado.innerHTML = '<textarea minlength="1" style="height: 655px;" maxlength="380" disabled id="resultado">'+novoTexoDigitado.join('')+'</textarea>';
            } else if (resolucaoLargura <= 1100){
                textoCriptorafado.innerHTML = '<textarea minlength="1" style="height: 300px;" maxlength="380" disabled id="resultado">'+novoTexoDigitado.join('')+'</textarea>';
            } else if(resolucaoLargura <= 450){
                textoCriptorafado.innerHTML = '<textarea minlength="1" style="height: 200px;" maxlength="380" disabled id="resultado">'+novoTexoDigitado.join('')+'</textarea>';
            }
            AjustaTextarea();
        }
    } 
}

//função descriptografar
function descriptografar(){

    if(document.getElementById('texto').value==''){  
        document.getElementById('texto').focus();
        document.getElementById('texto').placeholder='Informe o texto a ser Criptografado';
    } else {

        document.getElementById('descriptografarBotao').style.cursor='auto';
        document.getElementById("descriptografarBotao").disabled = false;

        //zerar elementos inicais da tela
        document.getElementById('apresentacao__conteudo__direita__img').style.background='#FFF';
        document.getElementById('apresentacao__conteudo__direita__img').style.height='1px';
        let imagemInicialGet = '';
        imagemInicialGet.innerHTML= '';
        tituloH4.innerHTML = '';
        instrucaoInicialGet.innerHTML = '';
        botaoCopiarGet.innerHTML = botaoCopiar;

        //selecionar o textarea
        converteLoweGet = document.getElementById('texto').value;
        frase = converteLoweGet.toLocaleLowerCase();

        //limpar margin section direita 
        document.getElementById('apresentacao__conteudo__direita__img').style.margin='0';
        document.getElementById('apresentacao__conteudo__direita__info').style.margin='0';
        document.getElementById('instrucao').style.margin='0';
        instrucao        
        
        //loop para realizar a descriptografia
        do {
            let letraA = /ai/i;
            let novaFraseA = (frase.replace(letraA, 'a'));
            frase = novaFraseA;
        } while (frase.indexOf("ai") !== -1);
    
        do {
            let letraE = /enter/i;
            let novaFraseE = (frase.replace(letraE, 'e'));
            frase = novaFraseE;
        } while (frase.indexOf("enter") !== -1);

        do {
            let letraI = /imes/i;
            let novaFraseI = (frase.replace(letraI, 'i'));
            frase = novaFraseI;
        } while (frase.indexOf("imes") !== -1);

        do {
            let letraO = /ober/i;
            let novaFraseO = (frase.replace(letraO, 'o'));
            frase = novaFraseO;
        } while (frase.indexOf("ober") !== -1);    

        do {
            let letraU = /ufat/i;
            let novaFraseU = (frase.replace(letraU, 'u'));
            frase = novaFraseU;
            let novaFrase = frase;
        } while (frase.indexOf("ufat") !== -1);
        
        //tamano do textarea
        tamanhoTela = window.screen.width;
        if (tamanhoTela <= 1100){
            let textArearows = 8; 
        } else if (tamanhoTela <= 450){
            let textArearows = 4; 
        } else{
            let textArearows = 15; 
        }

        //exibir dados
        let fraseDescriptografada = document.getElementById('MostraCriptoDescripto');

        //ajuste do textarea lado direito
        if (resolucaoLargura > 1100){
            fraseDescriptografada.innerHTML = '<textarea minlength="1" style="height: 655px;" maxlength="380" disabled id="resultado">'+frase+'</textarea>';
        } else if (resolucaoLargura <= 1100){
            fraseDescriptografada.innerHTML = '<textarea minlength="1" style="height: 300px;" maxlength="380" disabled id="resultado">'+frase+'</textarea>';
        } else if(resolucaoLargura <= 450){
            fraseDescriptografada.innerHTML = '<textarea minlength="1" style="height: 300px;" maxlength="200" disabled id="resultado">'+frase+'</textarea>';
        }
        AjustaTextarea();
    }

}