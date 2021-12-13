// Nome do aluno - n1 - n2 - media - Aprovado/Reprovado

var nomes = ["Pedro", "Celyna", "Alex"];
var notasA = [10.0, 9.5, 7];
var notasB = [10.0, 10.0, 2];

function media(n1,n2) {
    return (n1+n2)/2;
}

function passou(media){

    var resultado = "Reprovado";

    if (media > 7){
        resultado = "Aprovado";
    }

    return resultado;
}


for(var index in nomes){
    
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2);

    console.log(

                nomes[index] + 
                    " - " +
                nota1 + 
                    " - " +
                nota2 +
                    " - " +
                m   +
                    " - " +
                passou(m));
}
