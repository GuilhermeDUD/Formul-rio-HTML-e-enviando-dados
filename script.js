document.getElementById('numeroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém o valor do número digitado
    var numero = parseFloat(document.getElementById('numero').value);

    // Obtém a operação escolhida no select
    var operacao = document.getElementById('operacao').value;

    var resultado;

    if (operacao === 'quadrado') {
        resultado = calcularQuadrado(numero);
    } else {
        resultado = calcularCubo(numero);
    }

    // Exibe o resultado na página
    document.getElementById('resultado').textContent = resultado;
});

function calcularQuadrado(numero) {
    return numero * numero;
}

function calcularCubo(numero) {
    return numero * numero * numero;
}
