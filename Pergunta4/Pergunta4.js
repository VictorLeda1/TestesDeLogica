// Dado o array [9, 2, 3, 1, 4] encontre todos os números que estão faltando para completar o
// intervalo 0 a n, onde n é o maior número dentro do array. Adicione os números faltando dentro
// do array.

let resultado = document.getElementById("resultado");

let array = [9, 2, 3, 1, 4];
let n = 9;

//Loop passa o array inteiro verificando se o valor de i existe no array
//Se não existe adiciona i ao final
for(let i = 0; i <= n; i++){
    if(!array.includes(i)){
        array.push(i)
    }
}

//Apresenta resultado
resultado.innerHTML = "Resultado: " + array;