// let infos [
//     [31, 432,["hilitchul", 4000, 325, 99,"físico"]],
//     [34, 472,["lawachurl", 157200, 1670, 103,"Geo"]],
//     [31, 432,["slime", 7600, 233, 87,"dendro"]],
// ];
// for (let i=0; i>=3;i++){
//     console.log("a posição é: ", infos[i][i]);
//     for (let n=0; n>=5;n++){
//         console.log("o monstro é: ", infos[i][i][[n]]]);
    
//     }   
//     console.log("--------------------");
// }

// parte que eu fiz acima parte corrigida do chat abaixo
let infos = [
    [31, 432, ["hilitchurl", 4000, 325, 99, "físico"]],
    [34, 472, ["lawachurl", 157200, 1670, 103, "Geo"]],
    [31, 432, ["slime", 7600, 233, 87, "dendro"]],
];

for (let i = 0; i < infos.length; i++) {
    let x = infos[i][0];
    let y = infos[i][1];
    let monstro = infos[i][2];

    console.log("A posição é: x =", x, ", y =", y);
    console.log("O monstro é:", monstro[0]);
    console.log("HP:", monstro[1]);
    console.log("Ataque:", monstro[2]);
    console.log("Defesa:", monstro[3]);
    console.log("Elemento:", monstro[4]);
    console.log("--------------------");
}
