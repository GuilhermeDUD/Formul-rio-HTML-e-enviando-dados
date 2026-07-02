document.getElementById('parcelasForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores digitados
    var valorTotal = parseFloat(document.getElementById('valorTotal').value);
    var numParcelas = parseFloat(document.getElementById('numParcelas').value);
    var taxaJuros = parseFloat(document.getElementById('taxaJuros').value);

    // Calcula o valor total com juros (juros simples sobre o valor da compra)
    var valorComJuros = valorTotal + (valorTotal * (taxaJuros / 100) * numParcelas);

    // Calcula o valor de cada parcela
    var valorParcela = valorComJuros / numParcelas;

    // Exibe os resultados na página
    document.getElementById('valorParcela').textContent = valorParcela.toFixed(2);
    document.getElementById('valorTotalPagar').textContent = valorComJuros.toFixed(2);
});
