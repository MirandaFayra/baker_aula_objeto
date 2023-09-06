console.log('Salveeee Baker')

//-------------- RELEMBRANDO ------------

// Variável espaço na memória em que guardamos os dados

// Funções, trechos de código reutilizável 

// ARRAY = LISTA de variáveis

//let arraybacker = [1,'fayra','baker', false] //array inicia com indice zero

//console.log(arraybacker)

// PUSH => Insere o elemento no final do array 

//arrayExplicacao.push("bananinha")
//console.log(arraybacker)

// POP => Retira o elemento no final do array

//arrayExplicacao.pop()
//console.log(arraybacker)

// SPLICE (i,n)=>  Remove ou substitui elementos em um array  - array.splice(ind, qtd, 'elemento')

//arrayExplicacao.splice(1,2,'Helooo') // a partir do elemento de indice 1, tire 2 itens e troque por Helooo
//console.log(arraybacker)

//-------------- CONCEITOS. OBJETOS ---------

const modulos_labenu = ['fundamentos','frontend', 'backend', 'full-stack']


// Como Declar um objeto => propriedade : valor

const pessoaEstudante ={
    nome:'Júnior',
    cpf:123434567, 
    modulo:modulos_labenu[0]
} 

console.log(pessoaEstudante)

// Copiando um Array e mudando as propriedades

const pessoaEstudanteCopia ={
    ...pessoaEstudante, 
    nome:'Fayra',
    cpf:233434567,
    modulo:modulos_labenu[1] 
}

console.log(pessoaEstudante)
console.log(pessoaEstudanteCopia)


// Mudar a propriedade do elemento 
pessoaEstudanteCopia.modulo = modulos_labenu[2]


// Acessando uma propriedade do objeto
console.log(pessoaEstudanteCopia.modulo)

// Criar um array (uma lista) de Objetos

const listaDeEstudantesLabenu = [
    pessoaEstudante,
    pessoaEstudanteCopia,
    pessoaEstudante2 ={

    }
]


//-------------- EXERCICIO 1 ---------
//-------------- EXERCICIO 2 ---------
//-------------- EXERCICIO 3 ---------
//-------------- EXERCICIO EXTRA ---------