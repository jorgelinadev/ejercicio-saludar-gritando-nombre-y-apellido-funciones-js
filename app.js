//alert('mi archivo funciona');

//saludarGritando(nombre, apellido)
//Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

//saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!
//TIP: recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante

//const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
//const saludo = saludar(nombreCompleto)
//const grito = gritar(saludo)
//console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!

const ingresarNombreApellido = ('Nombre', 'Apellido');

const obtenerNombreCompleto = (nombre, apellido) => {
        return `${nombre} ${apellido}`;
}

const saludar = (obtenerNombreCompleto) => {
    return `Hola ${obtenerNombreCompleto}, un gusto conocerte`;
}

const gritar = (saludar) => {
    return `¡¡¡${saludar}!!!`;
}

const saludarGritando = (gritar) => {
    return `${gritar}`;
}

console.log(saludarGritando(gritar(saludar(obtenerNombreCompleto('Jorgelina', 'Alberti')))));
console.log(saludarGritando(gritar(saludar(obtenerNombreCompleto('Martín', 'Andrada')))));
console.log(saludarGritando(gritar(saludar(obtenerNombreCompleto('Matías', 'Andrada')))));
console.log(saludarGritando(gritar(saludar(obtenerNombreCompleto('Ignacio', 'Andrada')))));