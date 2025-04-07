const fs = require('fs');
const path = require('path');

// IMPRIMIR País y Continente

const rutaLocalidades = path.join(__dirname, '_Localidades.json');
let cadenaLocalidades = fs.readFileSync(rutaLocalidades, 'utf-8');
let objetoLocalidades = JSON.parse(cadenaLocalidades);

// Usar for...in para recorrer las claves del objeto
for (const propiedad in objetoLocalidades) {
    const localidad = objetoLocalidades[propiedad];  // Obtener el objeto de la localidad
    // Acceder a las propiedades País y Continente
    console.log(propiedad);
    console.log(`País: ${localidad.País}`);
    console.log(`Continente: ${localidad.Continente}`);
    console.log('------------------------');
}
