var textoEntrada = document.querySelector("#texto-entrada")
var textoSaida = document.querySelector("#resultado")

function criptografar() {
    var texto = textoEntrada.value;

    var resultadoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/, "ufat");

    document.getElementById('resultado').innerHTML = '<textarea readonly id="texto-entrada">' + resultadoCripto + '</textarea>' + '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar() {
    var texto = textoEntrada.value;

    var resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

        document.getElementById('resultado').innerHTML = '<textarea readonly id="texto-entrada">' + resultadoDescripto + '</textarea>' + '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCopiar = document.getElementById('texto-entrada');

    textoCopiar.select();
    document.execCommand('copy');
    alert("Texto copiado");
}