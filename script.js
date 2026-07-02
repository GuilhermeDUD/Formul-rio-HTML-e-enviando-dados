document.getElementById('numeroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém o valor do número digitado
    var numero = parseFloat(document.getElementById('numero').value);

    // Chama as funções para calcular o quadrado e o cubo
    var quadrado = calcularQuadrado(numero);
    var cubo = calcularCubo(numero);

    // Exibe os resultados na página
    document.getElementById('resultadoQuadrado').textContent = quadrado;
    document.getElementById('resultadoCubo').textContent = cubo;
});

function calcularQuadrado(numero) {
    return numero * numero;
}

function calcularCubo(numero) {
    return numero * numero * numero;
}
