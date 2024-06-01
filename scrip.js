function calcularIMC() {
    
    var peso = document.getElementById('peso').value;
    var estatura = document.getElementById('estatura').value;

    
    if (!peso || !estatura) {
        document.getElementById('resultado').innerHTML = 'Por favor, ingresa valores válidos para el peso y la estatura.';
        return;
    }
    var imc = peso / (estatura * estatura);
    
    
    var categoria = '';
    if (imc < 18.5) {
        categoria = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidad';
    }
    
    var resultado = 'Tu IMC es ' + imc.toFixed(2) + '.<br>Estás en: : ' + categoria + '.';
    document.getElementById('resultado').innerHTML = resultado;
}