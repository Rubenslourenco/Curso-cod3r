const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 42
    }],
    calcularValorseguro: function() {

    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = "Av brasil"
console.log(carro);

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorseguro
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);


