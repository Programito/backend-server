var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
};



var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'El correo es necesario'] },
    password: { type: String, required: [true, 'La contraseña es necesaria'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos }
});

// cambiar mensaje para duplicados
usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
});

// primer parametro nombre en la coleccion y segundo el schema
module.exports = mongoose.model('Usuario', usuarioSchema);