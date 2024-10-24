//usando a notação literal
const obj1 = {}
console.log(obj1);

// Object em js
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

//funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto())

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * ( 30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joão', 7880, 4)
const f2 = criarFuncionario('maria', 7880, 1)
console.log(f1.getSalario() , f2.getSalario());


//objeto.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

//Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON);










