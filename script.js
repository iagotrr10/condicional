//Condicionais são uma formade tomar decisões.

// (if) significa "se"
// (else) significa "senão"

// if (condição) {código que será executado}


// variáveis
// 3 var, let e const
// prompt pergunta algo ao usuário;
// sempre que usamos dados textuais  ""
//let nome = prompt("Qual é o seu nome?");

//alert usamos para exibir uma mensagem

//alert("Seja bem vindo (a)," + nome)

//let idade = prompt("Quantos anos você tem?")

//if (idade >= 18) {
    //alert("Você já pode tirar a carteira de motorista!")
//}else{
    //alert("Infelizmente você ainda não idade para dirigir!")

    let gostarDePizza = prompt("Você gosta de pizza? responda (sim ou não)");
    // === estritamente igual
    if (gostarDePizza === "sim"){
        alert("Que Ótimo! Vamos comer juntos!")
    }else{
        alert("Tudo bem, talvez você goste de outro sabor...");
    }