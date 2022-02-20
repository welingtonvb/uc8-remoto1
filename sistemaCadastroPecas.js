console.clear()
console.log("Sistema de cadastro de peças - SCP")
console.log("----------------------------------");
console.log();

var listaDePecas = ["pneu","farol","amortecedor","volante","rele","parafuso da roda","buzina","lampada","retrovisor","fio"]  

var listaPesoDePecas = ["2000","300","2500","2000","50","50","500","10","1500","1000"]                    

let i = 0

while (i < 10) {
    console.log("Item : ",i+1)

    let nomePeca = listaDePecas[i]
    let pesoPeca = listaPesoDePecas[i]

    if (pesoPeca < 100) {
        console.log("A peça [" + nomePeca + "] deve pesar no minimo 100 gramas")
    } else {
        console.log("A peça [" + nomePeca + "] tem o peso adequado") 
    }

    console.log
    if (nomePeca.length > 3) {
        console.log("Nome da peça [" + nomePeca + "] esta adequado para o cadastro")
    } else if (nomePeca.length == 0) {
        console.log("Nome da peça [" + nomePeca + "] não pode ser vazio")
    } else {
        console.log("O nome da peca [" + nomePeca + "] deve ter mais de 3 caracteres. Digite um nome adequado.")
    }
    console.log()
    i = i + 1   
}

console.log("Peças na caixa :")
console.table(listaDePecas)

if (listaDePecas.length < 10) {
    console.log("É possivel cadastrar mais peças para uma caixa")
} else {
    console.log("Não tem mais espaço na lista para uma caixa completa!!!") 
}

console.log()
