function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

function invertirCadenaDinamico() {
  const cadena = document.getElementById("cadenaInput").value;
  document.getElementById("invertirCadena").textContent =
    invertirCadena(cadena);
}

function esNumeroPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

function esNumeroPrimoDinamico() {
  const numero = parseInt(document.getElementById("numeroInput").value, 10);
  document.getElementById("numeroPrimo").textContent = esNumeroPrimo(numero);
}

function eliminarDuplicados(arreglo) {
  return [...new Set(arreglo)];
}

function eliminarDuplicadosDinamico() {
  const arreglo = document
    .getElementById("arregloInput")
    .value.split(",")
    .map(Number);
  document.getElementById("eliminarDuplicados").textContent = JSON.stringify(
    eliminarDuplicados(arreglo)
  );
}

function factorial(numero) {
  if (numero === 0) return 1;
  return numero * factorial(numero - 1);
}

function factorialDinamico() {
  const numero = parseInt(document.getElementById("factorialInput").value, 10);
  document.getElementById("factorial").textContent = factorial(numero);
}

function contarVocales(cadena) {
  const vocales = "aeiouAEIOU";
  let contador = 0;
  for (let char of cadena) {
    if (vocales.includes(char)) {
      contador++;
    }
  }
  return contador;
}

function contarVocalesDinamico() {
  const cadena = document.getElementById("vocalesInput").value;
  document.getElementById("contarVocales").textContent = contarVocales(cadena);
}

function sumarNumeros(arreglo) {
  return arreglo.reduce((acumulador, numero) => acumulador + numero, 0);
}

function sumarNumerosDinamico() {
  const arreglo = document
    .getElementById("sumarNumerosInput")
    .value.split(",")
    .map(Number);
  document.getElementById("sumarNumeros").textContent = sumarNumeros(arreglo);
}

function maximoArreglo(arreglo) {
  return Math.max(...arreglo);
}

function maximoArregloDinamico() {
  const arreglo = document
    .getElementById("maximoArregloInput")
    .value.split(",")
    .map(Number);
  document.getElementById("maximoArreglo").textContent = maximoArreglo(arreglo);
}
