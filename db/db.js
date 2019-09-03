import mongoose from 'mongoose';

mongoose.Promise = global.Promise
mongoose. connect('mongodb://localhost/clientes', {useNewUrlParse: true});

// Defijnir el schema de cleintes

const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    emails: Array,
    tipo: String,
})

const Clientes = mongoose.model('clientes', clienteSchema);

export { Clientes };
