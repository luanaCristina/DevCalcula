// VARIÁVEL DE ESTADO (NOVA)
// Esta variável vai "lembrar" se o último clique foi em "="
let calculoRealizado = false;

// Função para limpar o visor
function limpar() {
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('historico-visor').innerHTML = ""; // Limpa o histórico
    calculoRealizado = false; // Reseta o estado
}

// Função para apagar o último caractere
function voltar() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
    calculoRealizado = false; // Qualquer edição reseta o estado
}

// Função para inserir números e operadores
function inserir(botao) {
    let resultadoElement = document.getElementById('resultado');
    let historicoElement = document.getElementById('historico-visor');
    
    // Verifica se o botão clicado é um operador
    const isOperator = ['/', '*', '-', '+'].includes(botao);

    // CONDIÇÃO 1 (NOVA): Se um cálculo foi feito E o usuário clica em um NÚMERO
    // A calculadora deve limpar o visor antes de inserir o novo número.
    if (calculoRealizado && !isOperator) {
        resultadoElement.innerHTML = botao;
        historicoElement.innerHTML = ""; // Limpa o histórico antigo
        calculoRealizado = false; // Reseta o estado
    } 
    // CONDIÇÃO 2: Comportamento normal
    // Ou se um cálculo foi feito e o usuário clica em um OPERADOR (para continuar o cálculo)
    // Ou se nenhum cálculo foi feito
    else {
        resultadoElement.innerHTML = resultadoElement.innerHTML + botao;
        // Se o usuário clicou em um operador, resetamos o flag
        if(isOperator) {
            calculoRealizado = false;
        }
    }
}

// Função para calcular o resultado
function calcular() {
    let resultadoElement = document.getElementById('resultado');
    let historicoElement = document.getElementById('historico-visor');
    let caixinha = resultadoElement.innerHTML;
    
    if (caixinha) {
        try {
            let resultadoCalculo = eval(caixinha);
            
            // ATUALIZA O HISTÓRICO (NOVO)
            historicoElement.innerHTML = caixinha + " =";
            
            // ATUALIZA O VISOR PRINCIPAL
            resultadoElement.innerHTML = resultadoCalculo;
            
            // ATUALIZA O ESTADO (NOVO)
            calculoRealizado = true;

        } catch (e) {
            resultadoElement.innerHTML = "Erro";
            historicoElement.innerHTML = "";
            calculoRealizado = false;
        }
    } else {
        resultadoElement.innerHTML = "nada ...";
        historicoElement.innerHTML = "";
        calculoRealizado = false;
    }
}
