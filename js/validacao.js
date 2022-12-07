function validaChute(chute) {
    const numero = +chute;

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido! Fale um número por favor!</div>`
        
    }
    if (numeroMaiorOuMenorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido! O número secreto está entre ${menorValor} e ${maiorValor}</div>`
        
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `<h2>Você acertou!</h2><h3>O número secreto era ${numeroSecreto}</h3>
        <button id="botao" class="btn">Jogar novamente</button>`
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    };
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", e => {
    if(e.target.id == 'btn') {
        window.location.reload;
    }
})