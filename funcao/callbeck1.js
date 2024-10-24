const fabricantes = ["Mercedes", "Adi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
    
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
fabricantes.forEach(function(fabricante) {
    console.log(fabricante);
    
})