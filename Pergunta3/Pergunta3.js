// Dado o array de números inteiros [1, 15, 2, 7, 2, 5, 7, 1, 4] crie uma função que recebe um
// argumento X e retorne true ou false caso haja no array uma combinação de soma entre dois
// números que resulte no input X. Exemplo: Se X=2, a função deve retornar true pois existem dois
// números 1 dentro do array 1+1 = 2. Caso X=1231 a função deve retornar false pois não existe
// uma combina de dois números capazes de somar 1231.

let resultado = document.getElementById("resultado");
let arrayValores = [1, 15, 2, 7, 2, 5, 7, 1, 4];

//Verifica se há pelo menos um par de números no array cuja soma seja igual ao valor dado
function indentificaPares(array, valor) {
    const passado = new Set();
    for (let numero of array) {
        const complemento = valor - numero;
        if (passado.has(complemento)) {
            return true;
        }
        passado.add(numero);
    }
    return false;
}

//Apresenta o resultado
let valorPassado = prompt("Insira um número para verificarmos se há pares somados que resultam nele:");
resultado.innerHTML = "Resultado: " + indentificaPares(arrayValores, valorPassado);
