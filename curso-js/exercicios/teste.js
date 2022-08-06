let techs = ["html","css","js"]
let techs2 = ["html","css","js"]
//Adicionar um item no fim
techs.push("react");
//Adicionar um item no começo
techs.unshift("vue");
// Remover do fim
techs.pop();
//Remover do começo
techs.shift();
//Pegar somente alguns elementos do Array
techs.slice(1,3);  //[ 'css', 'js' ]
//Remover 1 ou mais itens em qualquer posição do Array
console.log(techs2.slice(1,2));
//Encontrar a posição de um elemento no array
let index = techs.indexOf("css");
console.log(index);