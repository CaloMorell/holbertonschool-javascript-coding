#!/usr/bin/node
const fs = require('fs');

// Verifica si se proporciona el número correcto de argumentos
if (process.argv.length !== 3) {
console.error('Uso: node readfile.js <ruta_del_archivo>');
process.exit(1);
}

const filePath = process.argv[2];

// Lee el contenido del archivo en utf-8
fs.readFile(filePath, 'utf-8', (err, data) => {
if (err) {
    console.error('Error al leer el archivo:', err);
} else {
    console.log('Contenido del archivo:');
    console.log(data);
}
});
