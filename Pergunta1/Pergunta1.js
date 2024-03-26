// Dado o Array de inteiros abaixo, ordene-o de tal forma que os números “1” estejam à esquerda.
// Os itens devem ser modificados no lugar, ou seja, você não ira trocar posições e sim colocar os
// números “1” no inicio do Array.
// [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21]

const arrPegunta1 = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21];

//Loop passa o array inteiro 
//se encotrar o numero 1 adiciona ao inicio do array e remove a posição anterior
for (var i = 0; i < arrPegunta1.length; i++){
    if(arrPegunta1[i] == 1){
        arrPegunta1.splice(i, 1);
        arrPegunta1.unshift(1);
    }
}

//Apresenta o resultado
let resultado = document.getElementById("resultado")
resultado.innerHTML = "<h4>Resultado: ["+ arrPegunta1 +"] </h4>";