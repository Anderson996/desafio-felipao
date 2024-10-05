//Variáveis base do desafio
const nomeHeroi = "Link"
let qtdExp = 0

//Laço de repetição
for (i = 0; i < 9; i++)
{

//Estruturas de decisão (dentro do laço de repetição)
if(qtdExp <= 1000){
    nivelHeroi = "ferro"
}
else if(qtdExp > 1000 && qtdExp <= 2000){
    nivelHeroi = "bronze"
}
else if(qtdExp > 2000 && qtdExp <= 3000){
    nivelHeroi = "prata"
}
else if(qtdExp > 3000 && qtdExp <= 4000){
    nivelHeroi = "ouro"
}
else if(qtdExp > 4000 && qtdExp <= 5000){
    nivelHeroi = "platina"
}
else if(qtdExp > 5000 && qtdExp <= 6000){
    nivelHeroi = "diamante"
}
else if(qtdExp > 6000 && qtdExp <= 7000){
    nivelHeroi = "ascendente"
}
else if(qtdExp > 7000 && qtdExp <= 8000){
    nivelHeroi = "imortal"
}
else if(qtdExp > 8000){
    nivelHeroi = "radiante"
}
qtdExp += 1001
console.log ("O herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + "!")
}