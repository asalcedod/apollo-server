import express from 'express';
// GraphQL
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './db/schema';
import { resolvers } from './db/resolvers'

const app = express();
const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app});

app.listen({port: 4000}, () => console.log(`Servidor esta Corriendo http://localhost:4000${server.graphqlPath}`))