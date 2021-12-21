let listaDeEstudantes = ["Helena", "Chico", "Mário", "josé", "Maria"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if( quantidadeDeEstudantes<5){
        listaDeEstudantes.push("João") ;
        console.log(listaDeEstudantes);          
}else{
        console.log("Não é possivel inserir mais alunos nessa turma");
}