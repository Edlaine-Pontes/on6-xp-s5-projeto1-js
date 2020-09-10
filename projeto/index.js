console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const readline = require('readline-sync')

const db = require('./database')

const {produtos} = db
  produtos.sort((a,b) => a.preco - b.preco)
console.table(produtos)
console.log("__________________")



const prodDesejado = parseFloat(readline.question('Digite o id do produto desejado: '))

const quantidade = parseFloat(readline.question('Digite a quantidade que gostaria de adquirir: '))

const continuar = parseFloat(readline.question('Deseja continuar comprando? S ou N: '))

const cupom = parseFloat(readline.question('Possui cupom de desconto: '))

function procurar(produto) {
    return produto.id === prodDesejado
    
}

const produtoEncontrado = produtos.find(procurar)

console.log(produtoEncontrado);

const subTotal = produtoEncontrado.preco * quantidade

console.log(`o total é ${subTotal}`);
