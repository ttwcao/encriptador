//criação array para receber os valores
let textoDigitado = [];
let novoTexoDigitado = [];

let textoDescriptografado;
let novoTextoDescriptografado;

//definição do título da pagina
let titulo = document.querySelector('title');
//inserir texto no título
titulo.innerHTML = 'Desafio Alura - Decodificador';


//definição de mensagem, instrução, imagem inical, botão copiar

//imagem
let imagemInicialFigura = '<img src="img/backgroudImg.jpg" alt="Nenhuma mensagem encontrada">';
let imagemInicialGet = document.getElementById('apresentacao__conteudo__direita__img');
imagemInicialGet.innerHTML = imagemInicialFigura;

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
let botaoCopiar ='<button onclick="copiar()">Copiar</button>';
let botaoCopiarGet = document.getElementById('ExibeBotaoCopia');


//função criptografar
function criptografar(){

    //zerar elementos inicais da tela
    imagemInicialGet.innerHTML = '';
    tituloH4.innerHTML = '';
    instrucaoInicialGet.innerHTML = '';
    botaoCopiarGet.innerHTML = botaoCopiar;

    //selecionar o textarea
    textoDigitado = document.getElementById('texto').value;

    //contar caracteres no texto
    let quantidadeCaracteres = textoDigitado.length;
    
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
        let textoCriptorafado = document.getElementById('resultado');
        //aqui o .join('') utilizado porque se trata de um array
        textoCriptorafado.innerHTML = novoTexoDigitado.join('');
    }
}

//função descriptografar
function descriptografar(){

    //selecionar o textarea
    frase = document.getElementById('texto').value;
    
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

    //exibir dados
    let fraseDescriptografada = document.getElementById('resultado');
    fraseDescriptografada.innerHTML = frase;

}


//função copiar
function copiar(){

  // obter os dados de textfiled
  var capturarDados = document.getElementById("resultado");

  // selecionar os dados
  capturarDados.select();
  capturarDados.setSelectionRange(0, 99999); 

  // copiar os dados
  navigator.clipboard.writeText(capturarDados.value);
  
}