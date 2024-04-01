const mongoose = require('mongoose');
const db_name = "product_fullStack"
mongoose.connect(`mongodb://localhost/${db_name}`)
    .then(()=> console.log(`conexion establecida a la base de datos ${db_name}`))
    .catch(err => console.log(`no se pudo conectar a la BD ${db_name}`,err));