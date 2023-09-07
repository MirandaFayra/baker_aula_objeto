console.log('Salveeee Baker')

//-------------- RELEMBRANDO ------------

// Variável espaço na memória em que guardamos os dados

// Funções, trechos de código reutilizável 
// function imprimirObjeto (){} || const imprimirObjeto = ()=>{}

// ARRAY = LISTA de variáveis

//let arraybacker = [1,'fayra','baker', false] //array inicia com indice zero

//console.log(arraybacker)

// PUSH => Insere o elemento no final do array 

//arraybacker.push("bananinha")
//console.log(arraybacker)

// POP => Retira o elemento no final do array

//arraybacker.pop()
//console.log(arraybacker)

// SPLICE (i,n)=>  Remove ou substitui elementos em um array  - array.splice({índice onde iniciar},{quantos itens remover},{itens a serem adicionados} )

//arraybacker.splice(1,2,'Helooo','Salve') // a partir do elemento de indice 1, tire 2 itens e troque por Helooo
//console.log(arraybacker)

//-------------- CONCEITOS. OBJETOS ---------

//const modulos_labenu = ['fundamentos','frontend', 'backend', 'full-stack']


// Como Declar um objeto => propriedade : valor
/*
const caixaDeOculos ={
    cor : 'vermelho',
    formato : 'oval',
    largura : 0.05,
    comprimento: 0.18,
    altura: 0.03,
    material: 'plastico',
    donaFayra:true
}


const pessoaEstudante ={
    nome:'Júnior',
    cpf:123434567, 
    modulo:modulos_labenu[0]
} 

console.log(pessoaEstudante)

*/
// Copiando um Array e mudando as propriedades

/*
const pessoaEstudanteCopia ={
    ...pessoaEstudante,  //onde copiamos pessoaEstudante
    nome:'Fayra',
    cpf:233434567,
    modulo:modulos_labenu[1] 
}

console.log(pessoaEstudante)
console.log(pessoaEstudanteCopia)
*/

// Mudar a propriedade do elemento 

//pessoaEstudanteCopia.modulo = modulos_labenu[2]


// Acessando uma propriedade do objeto
//console.log(pessoaEstudanteCopia.modulo)

// Criar um array (uma lista) de Objetos
/*
const listaDeEstudantesLabenu = [
    pessoaEstudante,
    pessoaEstudanteCopia,
    {
        nome:'Deah',
        cpf:523434567, 
        modulo:modulos_labenu[3]
    },
    {
        nome:'Isra',
        cpf:673834567, 
        modulo:modulos_labenu[2]
    }
]

console.log(listaDeEstudantesLabenu)


// Inserindo um novo elemento no array de objetos 


let novaPessoaEstudante = {
    ...pessoaEstudante,
    nome:'Clara',
    cpf:987434567,
    modulo:modulos_labenu[0] 
}

listaDeEstudantesLabenu.push(novaPessoaEstudante)
console.log(listaDeEstudantesLabenu)
*/

// Acessando um propriedade em um array de objeto

//console.log(listaDeEstudantesLabenu[1].nome)

//-------------- EXERCICIO 1 -------------

/*
function imprimirObjeto (){
    const estudante ={
        nome:'Amanda',
        sobrenome: 'Garcia',
        numeroDeMatricula :'123456',
        notasDoBimestre: [10,5,9]
    }

    console.log(estudante)

}

imprimirObjeto()
*/ 


//-------------- EXERCICIO 2 -------------

/*
const modulos_labenu = ['fundamentos','frontend', 'backend', 'full-stack']

function imprimirObjeto (){
    const estudante ={
        nome:'Amanda',
        sobrenome: 'Garcia',
        numeroDeMatricula :'123456',
        notasDoBimestre: [10,5,9],
        modulo :modulos_labenu[0] 
    }

    //estudante.modulo = modulos_labenu[0] 

    console.log(estudante)

    console.log(`O nome da pessoa estudante é : ${estudante.nome}. No segundo bimestre, essa pessoa estudante teve como nota : ${estudante.notasDoBimestre[1]}. Essa pessoa está no módulo : ${estudante.modulo} `)

}

imprimirObjeto()
*/
//-------------- EXERCICIO 3 -------------

// Algoritimo do ex : 
// 1. Criar um novo objeto 
// 3. Utilizando o spreed operator/ espalhamento vou fazer a cópia
// 4. Depois de feita a cópia, alterar o nome
// 5. Vou ter que copiar o array de notas
// 6. Na cópia desse array de notas, vou adicionar a nota 9 
// 7. Verificar qual é o módulo atual da pessoa estudante , e ir para o próximo 
// 8. Imprimir o objeto copiado com as atualizacoes 
// 9. Criar um array de estudantesLabenu
// 10. Nesse novo array inserir essa nova pessoa estudante 


const modulos_labenu = ['fundamentos','frontend', 'backend', 'full-stack']


function imprimirObjeto (){
    const estudante ={
        nome:'Amanda',
        sobrenome: 'Garcia',
        numeroDeMatricula :'123456',
        notasDoBimestre: [10,5,9],
        modulo :modulos_labenu[0] 
    }

    const copiaEstudante ={
        ...estudante, 
        nome: 'Caio',
        sobrenome: 'Santos',
        numeroDeMatricula :'223456',
        notasDoBimestre:[10,10,9],
        modulo :modulos_labenu[1]
    }
    console.log(copiaEstudante);

    let estudantesLabenu = [
        {
            ...estudante, 
            nome: 'Gustavo',
            sobrenome: 'Soares',
            numeroDeMatricula :'323456',
            notasDoBimestre:[8,10,9],
            modulo :modulos_labenu[2]
        },
        {
            ...estudante, 
            nome: 'Hugo',
            sobrenome: 'Luiz',
            numeroDeMatricula :'423456',
            notasDoBimestre:[8,7,10],
            modulo :modulos_labenu[1]
        },
        {
            ...estudante, 
            nome: 'Leila',
            sobrenome: 'Daine',
            numeroDeMatricula :'523456',
            notasDoBimestre:[8,10,10],
            modulo :modulos_labenu[3]
        },
        {
            ...estudante, 
            nome: 'Leonardo',
            sobrenome: 'Soares',
            numeroDeMatricula :'623456',
            notasDoBimestre:[7,10,9],
            modulo :modulos_labenu[2]
        }
     ]
    
    //estudantesLabenu.push(estudante, copiaEstudante) 
    estudantesLabenu.unshift(estudante, copiaEstudante)
    console.log(estudantesLabenu)
}

imprimirObjeto ()

//-------------- EXERCICIO EXTRA ---------
// 1. Criar uma funcao chamada imprimir compra
// 2. Criar um objeto chamado compra
// 3. Passar a propriedade nome, e valor 
// 4. Passar a propriedade forma, e valor 
// 5. Passar a propriedade endereco, e valor 
// 6. Dentro obj compra , adiciona a propriedade produtos (lista de produtos comprados) 
// 7. Cada produto deverá ser um objeto ===  conjunto de caractriaticas
// 8. Passar a propriedade nome, e valor 
// 9. Passar a propriedade preco, e valor 
// 10. Passar a propriedade quantidade, e valor 
// 11. Imprimir a compra 
// 12. Acessar a lista de produtos e imprimir a quantidade 
// 13. Criar um novo item a ser presentiado
// 14. Copiar  a compra 
// 15. Passar a propriedade nome, e valor 
// 16. Passar a propriedade forma, e valor 
// 17. Passar a propriedade endereco, e valor
// 18. Imprimir os dois 

const imprimirCompra =()=>{
    let compra ={
        nome : 'Fayra',
        forma : 'Credito',
        endereco: 'Rua : Bananinha city - Flórida',
        produtos :[
            {
                nome:'Abacaxi',
                preco:10,
                quantidade:1
            },
            {
                nome:'Abacate',
                preco:5,
                quantidade:3
            }
            ,
            {
                nome:'Tomate',
                preco:16,
                quantidade:8
            },
            {
                nome:'Cebola',
                preco:10,
                quantidade:3
            }
        ]
    }
    console.log(compra.produtos.length) // Verificando a qtn - pass12
    
    let compraPresente ={  
        ...compra,
        nome : 'Jr',
        forma : 'Cartao Presente',
        endereco: 'Rua : Belchior - Sobral',
    }

    console.log(compra)
    console.log(compraPresente)

}

imprimirCompra()
