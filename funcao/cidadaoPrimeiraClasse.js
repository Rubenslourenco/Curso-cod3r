//criar de forma literal
function func1() { }

//armazenar em uma variavel
const func2 = function() { }

//armazenar em um array
const array = [function (a, b) {return a + b}, func1, func2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//Passar função como parametro
function run(fun) {
    fun()
}

run(function() {console.log('executando...') })

//uma função pode retornar/conter uma função
function soma (a, b) {
    return function(c) {
        console.log(a + b + c);
        
    }
}
soma(2,5)(7)
const n1 = soma(8,2)
n1(10)