 // Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput =        document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

//Tabela de Multiplicação
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable =  document.querySelector("#multiplication-operations");

//Tabela de Soma
const somaTitle = document.querySelector("#soma-title span");
const somaTable =  document.querySelector("#soma-operations");

//Tabela de Subtração
const subtracaoTitle = document.querySelector("#subtracao-title span");
const subtracaoTable =  document.querySelector("#subtracao-operations");

//Tabela de Divisão
const divisaoTitle = document.querySelector("#divisao-title span");
const divisaoTable =  document.querySelector("#divisao-operations");



 // Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";
    somaTable.innerHTML = "";
    subtracaoTable.innerHTML = "";
    divisaoTable.innerHTML = "";

    // For para os itens de multiplicação
    // Começar a iterar por 1, ate ser igual o menor que variavel
    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = 
            `<div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
  
            </div>`;

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")
        multiplicationTable.appendChild(row);
    }

    // For para os itens de soma
    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number + i;

        const template = 
            `<div class="row">
                <div class="operation">${number} + ${i} = </div>
                <div class="result">${result}</div>
            </div>`;

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")
        somaTable.appendChild(row);
    }

    // For para os itens de Subtração
    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number - i;

        const template = 
            `<div class="row">
                <div class="operation">${number} - ${i} = </div>
                <div class="result">${result}</div>
            </div>`;

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")
        subtracaoTable.appendChild(row);
    }

    // For para os itens de Divisão
    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number / i;

        const template = 
            `<div class="row">
                <div class="operation">${number} / ${i} = </div>
                <div class="result">${result.toFixed(2)}</div>
            </div>`;

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")
        divisaoTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
    somaTitle.innerText = number;
    subtracaoTitle.innerText = number;
    divisaoTitle.innerText = number;

};

 //Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    console.log(multiplicationNumber, multiplicatorNumber);

    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);

});    