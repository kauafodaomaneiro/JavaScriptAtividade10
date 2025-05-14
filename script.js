//Verificação de Número Positivo ou Negativo:
//Crie uma função chamada verificarSinal que receba um número como parâmetro e imprima "Positivo", "Negativo" ou "Zero" conforme o caso.

let numero = parseInt(prompt('Digite seu numero'));

function verificarSinal(numero){

 
 if(numero == 0){
    console.log(numero + " é zero.")
 }else{
    if(numero > 0){
        console.log(numero + " é positivo.");


    }else{
        console.log(numero + " é negativo.");
    }
 }
    

}

verificarSinal(numero);