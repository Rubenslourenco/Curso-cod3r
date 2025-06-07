const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove o ultimo item
console.log("------");
console.log(pilotos);

pilotos.push('Verstappen') //Adiciona na ultima linha 
console.log("------");
console.log(pilotos);

pilotos.shift()  //Remove o premeiro indice
console.log("------");
console.log(pilotos);

pilotos.unshift('Hamiltom')  //Adicona no primeiro indice
console.log("------");
console.log(pilotos);

//splice pode adiconar e remver elementos
//adiconar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log("------");
console.log(pilotos);

//remover
pilotos.splice(3, 1)
console.log("------");
console.log(pilotos);

const algunsPilotos = pilotos.slice(2)//Novo Array
console.log("------");
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4)
console.log("------");
console.log(algunsPilotos2);