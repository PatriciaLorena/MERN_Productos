const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "el titulo es requerido"],
        minlength: [3, "el titulo debe tener al menos 3 caracteres"], 
        validate: {
            validator: (value) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
            .test(value),
            message: "El titulo solo puede contener letras"
        }
    },
    price:{
        type: Number,
        required: [true, "el precio es requerido"],
    },
    description: { 
        type: String,
        required: [true, "la descripcion es requerido"],
        minlength: [10, "la descripcion debe tener al menos 10 caracteres"],
    }    
}, { timestamps: true });
module.exports.ProductModel = mongoose.model('Product', ProductSchema);

