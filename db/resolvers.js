import mongoose from 'mongoose'
import { Users } from './db';
import { rejects } from 'assert';

class User {
    constructor(id, { name, lastname, age, emails, avatar, type }) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.emails = emails;
        this.avatar = avatar;
        this.type = type;
    }
}

export const resolvers = {
    Query: {
        getUsers: (root, { limite }) => {
            return Users.find({}).limit(limite);
        },
        getUser: (root, { id }) => {
            return new Promise((resolve, object) => {
                Users.findById(id, (error, user) => {
                    if(error) rejects(error)
                    else resolve(user)
                })
            });
        },
    },
    Mutation: {
        createUser: (root, { input }) => {
            const nuevoUser = new Users({
                name: input.name,
                lastname: input.lastname,
                age: input.age,
                emails: input.emails,
                avatar: input.avatar,
                type: input.type
            });
            nuevoUser.id =nuevoUser._id;
            return new Promise((resolve, object) => {
                nuevoUser.save((error) => {
                    if(error) rejects(error)
                    else resolve(nuevoUser)
                })
            });
        },
        updateUser: (root, { input }) => {
            return new Promise((resolve, object) => {
                Users.findOneAndUpdate({_id: input.id}, input, {new: true}, (error,user) => {
                    if(error) rejects(error)
                    else resolve(user)
                })
            });
        },
        deleteUser: (root, { id }) => {
            return new Promise((resolve, object) => {
                Users.findOneAndRemove({_id: id}, (error) => {
                    if(error) rejects(error)
                    else resolve("Se elimino correctamente")
                })
            });
        }
    }
}