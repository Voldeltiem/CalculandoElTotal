// funcion para generar los calculos correspondientes junto con su interaccciones
function operation() {
    let cantidadIn = Number(document.getElementById("cantidadIn").value);
    let colorIn = document.getElementById("colorIn").value;
    let total = cantidadIn*355990;
    let totalOut = document.getElementById("total");
    let cantidadOut = document.getElementById("cantidadOut");
    totalOut.innerHTML = "Total: $"+total;
    cantidadOut.innerHTML = "Cantidad: "+cantidadIn;
    document.getElementById("colorOut").style.backgroundColor = colorIn;

}