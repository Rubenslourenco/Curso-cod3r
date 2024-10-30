let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);


aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length);

aprovados[9] = 'Paulo'
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
console.log(aprovados.sort()); //sorte  = ordena a lista do arrayf

delete aprovados[1]
console.log(aprovados[1]);

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Element2') //splice = o mesmo pode remover como adicionar
console.log(aprovados);




