🧮 Calculadora de Workshop (HTML, CSS & JS)
Este é o projeto de uma calculadora web funcional, desenvolvida como o projeto principal de um workshop prático sobre desenvolvimento front-end com HTML5, CSS3 e JavaScript.

O projeto foi criado a partir do conteúdo apresentado por Luana Cristina  e, posteriormente, melhorado para incluir funcionalidades mais avançadas, como um visor de histórico e um gerenciamento de estado mais inteligente.

🚀 Demonstração (Live Demo)
Você pode testar a calculadora funcionando em tempo real no GitHub Pages:

[https://luanacristina.github.io/calc/](https://luanacristina.github.io/DevCalcula/)

✨ Funcionalidades (Features)
Visor Duplo: Um visor principal (#resultado) para o número atual e um visor secundário (#historico-visor) para exibir a operação anterior.

Operações Básicas: Adição, subtração, multiplicação e divisão.

Funções de Controle:

L (Limpar): Apaga o visor principal e o histórico.

V (Voltar/Backspace): Apaga o último dígito inserido.

Gerenciamento de Estado Inteligente: Após um cálculo ser realizado (clicando em =), se o usuário digitar um novo número, o visor é automaticamente limpo para iniciar um novo cálculo. Se o usuário clicar em um operador, ele continua o cálculo usando o resultado anterior.

🛠️ Tecnologias Utilizadas
HTML5: Para a estrutura semântica da calculadora, incluindo os botões e visores.

CSS3: Para toda a estilização, tornando a calculadora responsiva e visualmente agradável, com botões arredondados e efeitos hover.

JavaScript (ES6+): Para toda a lógica funcional, manipulação do DOM e gerenciamento de estado da calculadora.

📂 Estrutura do Projeto
O projeto é organizado de forma limpa, separando responsabilidades:

/calc
├── 📄 index.html   (A estrutura da calculadora)
├── 🎨 style.css     (Todos os estilos visuais)
└── ⚙️ calc.js       (Toda a lógica e funções)
🧠 Como o Código Funciona
1. index.html (A Estrutura)
A estrutura é simples, contendo um div principal (.background) que envolve os visores e os botões.

Os visores são duas tags <p> com IDs distintos: #historico-visor e #resultado.

Os botões são organizados usando uma <table> para criar a grade.

Cada <button> possui um atributo onclick="" que chama uma função JavaScript específica (ex: onclick="inserir('7')", onclick="calcular()", etc.).

2. style.css (O Estilo)
O corpo (body) usa display: flex para centralizar a calculadora vertical e horizontalmente na página.

O visor #resultado tem uma fonte maior e fundo claro, enquanto o #historico-visor é mais sutil, para indicar hierarquia.

A classe .botao define o visual principal dos botões, incluindo o border-radius que os torna circulares. 

A pseudo-classe .botao:hover aplica um efeito de transform: scale() para dar feedback visual ao usuário quando o mouse está sobre o botão.

3. calc.js (A Lógica)
Este é o cérebro da aplicação. Toda a interatividade é controlada aqui.

Gerenciamento de Estado A parte mais importante é a variável de estado:

JavaScript
`
let calculoRealizado = false;
`
Essa variável "lembra" se a última ação do usuário foi clicar em "Igual".

Funções Principais

`inserir(botao)`

Verifica se `calculoRealizado` é `true`.

Se for `true` E o usuário clicar em um número, a função entende que um novo cálculo está começando. Ela limpa o visor (`resultadoElement.innerHTML = botao;`) e reseta o estado (`calculoRealizado = false;`).

Se for `false` OU o usuário clicar em um operador (como `+` ou `-`), a função simplesmente anexa o novo caractere ao visor (`innerHTML = ... + botao`).

`calcular()`

Pega a string de texto do visor (ex: "2+10").

Usa a função `eval()` para calcular o resultado dessa string. 

Melhoria 1: Atualiza o #historico-visor para mostrar a conta que acabou de ser feita (ex: "2+10 =").

Melhoria 2: Atualiza o visor `#resultado` com o valor calculado (ex: 12).

Define `calculoRealizado = true;` para que a função inserir() saiba o que fazer a seguir.

`limpar() e voltar()`

São funções de utilidade que limpam os visores e sempre resetam o estado calculoRealizado = false;, garantindo que a calculadora volte ao seu estado inicial de digitação.
