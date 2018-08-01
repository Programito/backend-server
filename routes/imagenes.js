var express = require('express');
var app = express();
var fs = require('fs');
//para el sendFile
const path = require('path');


// //Rutas
app.get('/:tipo/:img', (req, res, next) => {

    var tipo = req.params.tipo;
    var img = req.params.img;

    // sendfile es deprecated
    /*var path = `./uploads/${tipo}/${img}`;
    console.log(path);

    fs.exists(path, existe => {
        if (!existe) {
            path = './assets/no-image.jpg';
        }

        res.sendfile(path);

    });
    */

    let pathImagen = path.resolve(__dirname, `../uploads/${tipo}/${img}`);
    console.log(pathImagen);

    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        let noImagePath = path.resolve(__dirname, '../assets/no-image.jpg');
        res.sendFile(noImagePath);
    }

});


module.exports = app;