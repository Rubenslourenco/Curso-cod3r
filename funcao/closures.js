//closure é o escopo criado quando uma função é delcarada
//Esse escopo permite a função acessar e manipular variaveis externas a função

const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
