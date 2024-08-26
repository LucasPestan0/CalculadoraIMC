// evento que captura o formulario do html
const form = document.querySelector(".formulario");

//evento que remove o erro padrão de enviar e ja adiciona a função que vai dar vida ao formulario
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    //evento que seleciona o peso e altura dos inputs 
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");
    
    //evento onde vai transformar o texto do input em um numero
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value); 
    
    //função para dar o retorno dentro do formulario
    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }
    if (!altura) {
        setResultado('Peso invalido', false);
        return;
    };

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é: ${imc} (${nivelImc}).`;

    setResultado(msg, true);

});

//Um array para pegar qual resultado vai ser retornado referente as informações inicial do Resultado
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade classe 1','Obesidade classe 2','Obesidade classe 3'];
    //Função para retornar o valor referente ao imc
    if (imc >= 39.9) {
        return nivel[5];
    } else if (imc >= 34.9) {
        return nivel[4];
    } else if (imc >= 29.9) {
        return nivel[3];
    } else if (imc >= 24.9) {
        return nivel[2];
    } else if (imc >= 18.5) {
        return nivel[1];
    } else if (imc < 18.5) {
        return nivel[0];
    }
};

// Função para calcular o IMC
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

// Função para cria o paragrafo de retorno do indice 
function criaP(){
    const p = document.createElement('p');
    return p;
};

//Função para exibir a mensagem de retorno 
function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''

    //Função para adicionar a mensagem no formulario
    const p = criaP();
        if (isValid){
            p.classList.add('paragrafo-resultado')
        } else {
            p.classList.add('bad')
        }
        p.innerHTML = msg;
        resultado.appendChild(p);


};
