// função de calculo para os 4 tipos de operação matematicos
function calcular() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var operacao = document.getElementById('operacao').value;
    var resultado = 0;

    if (operacao === 'soma') {
        resultado = parseFloat(numero1) + parseFloat(numero2);
    } else if (operacao === 'subtracao') {
        resultado = parseFloat(numero1) - parseFloat(numero2);
    } else if (operacao === 'multiplicacao') {
        resultado = parseFloat(numero1) * parseFloat(numero2);
    } else if (operacao === 'divisao') {
        resultado = parseFloat(numero1) / parseFloat(numero2);
    }

    document.getElementById('resultado').innerHTML = "Resultado: " + resultado;
}
