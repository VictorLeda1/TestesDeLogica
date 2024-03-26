// Dada a seguinte arvore binária de palavras, faça uma função que busque nessa arvore pela
// palavra-chave. O output da sua função deve ser o caminho até chegar no item procurado. Por
// exemplo, se o input de buscar for “goiaba” o output deve ser uma string “Maça -&gt; morango -&gt;
// Goiaba”.

let resultadoApresentacao = document.getElementById("resultado");

//Arvore Binaria de Frutas com Nome e Valor.
let arvore = {
    fruta: {
        valor: 4,
        nome: "Maça",
    },
    right:{
        fruta: {
            valor: 5,
            nome: "Pera",
        },
            right:{
                fruta: {
                    valor: 6,
                    nome: "Abacaxi",
                },
                    right:{
                        fruta: {
                            valor: 8,
                            nome: "Laranja",
                        },
                        right:{
                            fruta: {
                                valor: 9,
                                nome: "Cebola",
                            },
                        },
                        left:{
                            fruta: {
                                valor: 7,
                                nome: "Banana",
                            },
                        },
                    },
            },
    },

    left: {
        fruta: {
            valor: 2,
            nome: "Morango",
        },
        right:{
            fruta: {
                valor: 3,
                nome: "Limão",
            }
        },
        left:{
            fruta: {
                valor: 1,
                nome: "Goiaba",
            }
        },
    },
}

//1° encontra o valor da fruta pelo nome.
function encontrarValorPorNome(arvore, nome) {
    if (arvore) {
        if (arvore.fruta.nome === nome) {
            return arvore.fruta.valor;
        }
        let leftResult = encontrarValorPorNome(arvore.left, nome);
        if (leftResult !== undefined) {
            return leftResult;
        }
        let rightResult = encontrarValorPorNome(arvore.right, nome);
        if (rightResult !== undefined) {
            return rightResult;
        }
    }
    return undefined;
}

//2° encontra a posição do valor e adiciona o caminho.
function buscarValor(arvore, valor) {
    if (arvore === null || arvore.fruta.valor === undefined) {
        return [];
    }

    let valores = [arvore.fruta.nome];

    if (valor < arvore.fruta.valor) {
        return valores.concat(buscarValor(arvore.left, valor));
    }
    else if (valor > arvore.fruta.valor) {
        return valores.concat(buscarValor(arvore.right, valor));
    }
    else {
        return valores;
    }
}

//Recebe o nome da Fruta buscada 
//e formata o nome com a primeira letra maiuscula.
var fruta = prompt("Digite um fruta que consta na arvore: ");
fruta = fruta.charAt(0).toUpperCase() + fruta.slice(1)

//Executa as funções
let valor = encontrarValorPorNome(arvore, fruta);
let resultado = buscarValor(arvore, valor);

//Verifica se a fruta procurada existe e então apresenta a resposta.
if (valor !== undefined) {
    resultadoApresentacao.innerHTML = resultado.join(' => ');
} else {
    resultadoApresentacao.innerHTML = "A fruta " + fruta + " não foi encontrada na árvore.";
}


