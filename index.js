console.log("Bienvenido al sistema de reinscripciones de la Universidad Gatuna de México");
var promedio = window.prompt("¿Cuál es tu promedio?");
var colegiaturaTotal = 1000;
var colegiaturaConDescuento = colegiaturaTotal - 300;
if (promedio>=9) {
    console.log("El costo de la colegiatura es de " + colegiaturaConDescuento + " peso");
} else {
    console.log("El costo de la colegiatura es de " + colegiaturaTotal + " peso");
}