import mongoose from 'mongoose'
import { Clientes } from './db';
import { rejects } from 'assert';

class Cliente {
    constructor(id, { nombre, apellido, emails, tipo }) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.emails = emails;
        this.tipo = tipo;
    }
}

export const resolvers = {
    Query: {
        getClientes: (root, { limite }) => {
            return Clientes.find({}).limit(limite);
        },
        getCliente: (root, { id }) => {
            return new Promise((resolve, object) => {
                Clientes.findById(id, (error, cliente) => {
                    if(error) rejects(error)
                    else resolve(cliente)
                })
            });
        },
    },
    Mutation: {
        crearCliente: (root, { input }) => {
            const nuevoCliente = new Clientes({
                nombre: input.nombre,
                apellido: input.apellido,
                edad: input.edad,
                emails: input.emails,
                tipo: input.tipo
            });
            nuevoCliente.id =nuevoCliente._id;
            return new Promise((resolve, object) => {
                nuevoCliente.save((error) => {
                    if(error) rejects(error)
                    else resolve(nuevoCliente)
                })
            });
        },
        actualizarCliente: (root, { input }) => {
            return new Promise((resolve, object) => {
                Clientes.findOneAndUpdate({_id: input.id}, input, {new: true}, (error,cliente) => {
                    if(error) rejects(error)
                    else resolve(cliente)
                })
            });
        },
        eliminarCliente: (root, { id }) => {
            return new Promise((resolve, object) => {
                Clientes.findOneAndRemove({_id: id}, (error) => {
                    if(error) rejects(error)
                    else resolve("Se elimino correctamente")
                })
            });
        }
    }
}