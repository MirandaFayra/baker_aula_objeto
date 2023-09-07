console.log('Salveeee Baker')

//-------------- RELEMBRANDO ------------

// Variável espaço na memória em que guardamos os dados

// Funções, trechos de código reutilizável 

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


//-------------- EXERCICIO 1 ---------
//-------------- EXERCICIO 2 ---------
//-------------- EXERCICIO 3 ---------
//-------------- EXERCICIO EXTRA ---------