console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const readline = require('readline-sync')

const db = require('./database')

const {produtos} = db

// ordenação dos produtos por preco
produtos.sort((a,b) => a.preco - b.preco)

console.table(produtos)

console.log("__________________")

let continuar;
let cupom;


const list = new Array();
class Pedidos {
    constructor(list){
        this.products = list
        this.data = new Date ()
        this.subtotal = 0
    }

    calcularSubtotal() {
        this.subtotal = this.products.reduce((acumulador, item)=>acumulador + (item.preco * item.quantidade), 0)
    }
   
}



do {
    const produtoDesejado = parseFloat(readline.question('Digite o id do produto desejado: '))
    const quantidade = parseFloat(readline.question('Digite a quantidade que gostaria de adquirir: '))

    const procurar = (produto) => produto.id === produtoDesejado
    const produtoEncontrado = produtos.find(procurar)
    
    
    if (!produtoEncontrado) {
        console.log("ERRO o ID informado não foi localizado");
    }else if(quantidade < 1){
    console.log('A quantidade é invalida');
    } else {
        const productPedido = {...produtoEncontrado, quantidade: quantidade}
        list.push(productPedido)
        
    }

    continuar = readline.question('Deseja continuar comprando? S ou N: ')

} while (continuar.toUpperCase() === "S");




do{
    cupom = parseFloat(readline.question('Possui cupom de desconto: '))
    if(cupom >= 16 ){
        console.log(`valor maximo de desconto aceito é 15%`)
    }
} while (cupom > 15 )



const pedido = new Pedidos (list)
console.table(pedido.products)
pedido.calcularSubtotal()

console.log(`Subtotal: R$ ${(pedido.subtotal).toFixed(2).replace('.',',')}`)
console.log(`Cupom: ${cupom}%`)

const desconto = (pedido.subtotal * cupom) / 100
console.log(`Desconto: R$ ${desconto}`)

const totalGeral = (pedido.subtotal - desconto).toFixed(2).replace('.',',')





console.log(`Total: R$ ${totalGeral}`)











/*
    
    const subTotal = produtoEncontrado.preco * quantidade

    console.log(`o total é ${subTotal}`);
    
    const desconto = ((subTotal * cupom) /100)  
    
    const total = subTotal - desconto
    
    console.log(total)
    


/*

// interação com o usuario
function pergunta1 () {

    const prodDesejado = parseFloat(readline.question('Digite o id do produto desejado: '))
    const procurar = (produto) => produto.id === prodDesejado;
    const produtoEncontrado = produtos.find(procurar)

    if(!produtoEncontrado) {
        console.log("erro");
}        
    }
    const continuar = parseFloat(readline.question('Deseja continuar comprando? S ou N: ')) 
    if (continuar == S) {

    }
      


    const quantidade = parseFloat(readline.question('Digite a quantidade que gostaria de adquirir: '))
    if(quantidade < 1 ) {
        console.log("erro");
        quantidade = parseFloat(readline.question('Digite a quantidade que gostaria de adquirir: '))

    }
    const continuar = parseFloat(readline.question('Deseja continuar comprando? S ou N: '))
    const cupom = parseFloat(readline.question('Possui cupom de desconto: '))
}

perguntas()

/*
const prodDesejado = parseFloat(readline.question('Digite o id do produto desejado: '))

function validar(prodDesejado){
    if(prodDesejado != produto.id) {
        console.log(`Erro`);
    }
}

const prodDesejado = parseFloat(readline.question('Digite o id do produto desejado: '))
const quantidade = parseFloat(readline.question('Digite a quantidade que gostaria de adquirir: '))
const continuar = parseFloat(readline.question('Deseja continuar comprando? S ou N: '))
const cupom = parseFloat(readline.question('Possui cupom de desconto: '))


// calculo valores

const procurar = (produto) => produto.id === prodDesejado;

const produtoEncontrado = produtos.find(procurar)

const subTotal = produtoEncontrado.preco * quantidade

console.log(`o total é ${subTotal}`);

const desconto = ((subTotal * cupom) /100)  

const total = subTotal - desconto

console.log(total);




/*console.log(produtoEncontrado)

const subTotal = produtoEncontrado.preco * quantidade

console.log(`o total é ${subTotal}`);


/*
do {
    const prodDesejado = parseFloat(readline.question('Digite o id do produto desejado: '))
    const quantidade = parseFloat(readline.question('Digite a quantidade que gostaria de adquirir: '))
    
    const procurar = (produto) => produto.id === prodDesejado
    
    const produtoEncontrado = produtos.find(procurar)
    
    if(!produtoEncontrado){
        console.log(`ERRO! o ID informado não foi encontrado, por favor verifique os produtos disponiveis e informe um ID valido`);
        
    }else{
       
        const produtosPedido = {...produtoEncontrado, quant: quantidade};
        Array.push(produtosPedido)

    }

    continuar = parseFloat(readline.question('Deseja continuar comprando? S ou N: '))


}while(continuar.toUpperCase() === 'S')

/*

const procurar = (produto) => produto.id === prodDesejado;

const produtoEncontrado = produtos.find(procurar)*/

/*console.log(produtoEncontrado)*/


