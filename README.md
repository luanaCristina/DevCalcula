# 🧮 Calculadora de Workshop (HTML, CSS & JS)
Este é o projeto de uma calculadora web funcional, desenvolvida como o projeto principal de um workshop prático sobre desenvolvimento front-end com HTML5, CSS3 e JavaScript.

O projeto foi criado a partir do conteúdo apresentado por Luana Cristina  e, posteriormente, melhorado para incluir funcionalidades mais avançadas, como um visor de histórico e um gerenciamento de estado mais inteligente.

## 🚀 Demonstração (Live Demo)
Você pode testar a calculadora funcionando em tempo real no GitHub Pages:

[https://luanacristina.github.io/DevCalcula/](https://luanacristina.github.io/DevCalcula/)

## ✨ Funcionalidades (Features)
Visor Duplo: Um visor principal (#resultado) para o número atual e um visor secundário (#historico-visor) para exibir a operação anterior.

Operações Básicas: Adição, subtração, multiplicação e divisão.

### Funções de Controle:

L (Limpar): Apaga o visor principal e o histórico.

V (Voltar/Backspace): Apaga o último dígito inserido.

Gerenciamento de Estado Inteligente: Após um cálculo ser realizado (clicando em =), se o usuário digitar um novo número, o visor é automaticamente limpo para iniciar um novo cálculo. Se o usuário clicar em um operador, ele continua o cálculo usando o resultado anterior.

## 🛠️ Tecnologias Utilizadas
HTML5: Para a estrutura semântica da calculadora, incluindo os botões e visores.

CSS3: Para toda a estilização, tornando a calculadora responsiva e visualmente agradável, com botões arredondados e efeitos hover.

JavaScript (ES6+): Para toda a lógica funcional, manipulação do DOM e gerenciamento de estado da calculadora.

## 📂 Estrutura do Projeto
O projeto é organizado de forma limpa, separando responsabilidades:

```
/calc
- ├── 📄 index.html   (A estrutura da calculadora)
- ├── 🎨 styles.css     (Todos os estilos visuais)
- └── ⚙️ calc.js       (Toda a lógica e funções)
```

## 🧠 Como o Código Funciona
### 1. index.html (A Estrutura)
A estrutura é simples, contendo um div principal (.background) que envolve os visores e os botões.

Os visores são duas tags <p> com IDs distintos: #historico-visor e #resultado.

Os botões são organizados usando uma <table> para criar a grade.

Cada <button> possui um atributo onclick="" que chama uma função JavaScript específica (ex: onclick="inserir('7')", onclick="calcular()", etc.).

### 2. styles.css (O Estilo)
O corpo (body) usa display: flex para centralizar a calculadora vertical e horizontalmente na página.

O visor #resultado tem uma fonte maior e fundo claro, enquanto o #historico-visor é mais sutil, para indicar hierarquia.

A classe .botao define o visual principal dos botões, incluindo o border-radius que os torna circulares. 

A pseudo-classe .botao:hover aplica um efeito de transform: scale() para dar feedback visual ao usuário quando o mouse está sobre o botão.

### 3. calc.js (A Lógica)
Este é o cérebro da aplicação. Toda a interatividade é controlada aqui.

Gerenciamento de Estado A parte mais importante é a variável de estado:


```JavaScript
let calculoRealizado = false;
```
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


# 🇬🇧 🇬🇧 🇬🇧 🇬🇧 🇬🇧 🇬🇧 🇬🇧 English Version: 🇬🇧 🇬🇧 🇬🇧 🇬🇧 🇬🇧 🇬🇧 
# 🧮 Workshop Calculator (HTML, CSS & JS)

This is a functional web calculator project, developed as the main project for a hands-on workshop on front-end development with HTML5, CSS3, and JavaScript.

The project was created based on content presented by Luana Cristina and was later improved to include more advanced features, such as a history display and smarter state management.

## 🚀 Live Demo

You can test the calculator running live on GitHub Pages:
https://luanacristina.github.io/DevCalcula/

## ✨ Features

* **Dual Display:** A main display (`#resultado`) for the current number and a secondary display (`#historico-visor`) to show the previous operation.
* **Basic Operations:** Addition, subtraction, multiplication, and division.
* **Control Functions:**
    * `L` (Clear): Clears the main display and history.
    * `V` (Back/Backspace): Deletes the last inserted digit.
* **Smart State Management:** After a calculation is performed (by clicking `=`), if the user types a new number, the display is automatically cleared to start a new calculation. If the user clicks an operator, it continues the calculation using the previous result.

## 🛠️ Technologies Used

* **HTML5:** For the calculator's semantic structure, including the buttons and displays.
* **CSS3:** For all the styling, making the calculator responsive and visually appealing with rounded buttons and hover effects.
* **JavaScript (ES6+):** For all the functional logic, DOM manipulation, and state management of the calculator.

## 📂 Project Structure

The project is organized cleanly, separating responsibilities:

```

/calc
- ├── 📄 index.html   (The calculator's structure)
- ├── 🎨 styles.css   (All visual styles)
- └── ⚙️ calc.js       (All logic and functions)

````

## 🧠 How the Code Works

### 1. index.html (The Structure)

* The structure is simple, containing a main `div` (`.background`) that wraps the displays and buttons.
* The displays are two `<p>` tags with distinct IDs: `#historico-visor` and `#resultado`.
* The buttons are organized using a `<table>` to create the grid.
* Each `<button>` has an `onclick=""` attribute that calls a specific JavaScript function (e.g., `onclick="inserir('7')"`, `onclick="calcular()"`).

### 2. styles.css (The Style)

* The `body` uses `display: flex` to center the calculator vertically and horizontally on the page.
* The `#resultado` display has a larger font and a light background, while the `#historico-visor` is more subtle to indicate hierarchy.
* The `.botao` class defines the main look of the buttons, including the `border-radius` that makes them circular.
* The `.botao:hover` pseudo-class applies a `transform: scale()` effect to give visual feedback to the user when hovering over a button.

### 3. calc.js (The Logic)

This is the brain of the application. All interactivity is controlled here.

**State Management**
The most important part is the state variable:
```javascript
let calculoRealizado = false;
````

This variable "remembers" if the user's last action was clicking "Equals".

**Main Functions**

  * `inserir(botao)`

      * Checks if `calculoRealizado` is `true`.
      * **If it's `true` AND** the user clicks a *number*, the function understands that a new calculation is beginning. It clears the display (`resultadoElement.innerHTML = botao;`) and resets the state (`calculoRealizado = false;`).
      * **If it's `false` OR** the user clicks an *operator* (like `+` or `-`), the function simply appends the new character to the display (`innerHTML = ... + botao`).

  * `calcular()`

      * Gets the text string from the display (e.g., `"2+10"`).
      * Uses the `eval()` function to calculate the result of that string.
      * **Improvement 1:** Updates the `#historico-visor` to show the operation that was just performed (e.g., `"2+10 ="`).
      * **Improvement 2:** Updates the `#resultado` display with the calculated value (e.g., `12`).
      * Sets `calculoRealizado = true;` so the `inserir()` function knows what to do next.

  * `limpar()` and `voltar()`

      * These are utility functions that clear the displays and always reset the `calculoRealizado = false;` state, ensuring the calculator returns to its initial typing state.

