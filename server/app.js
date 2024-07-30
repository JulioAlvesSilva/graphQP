import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import conectaNaDatabase from './conectDB.js';

import typeDefs from './schemas/clienteSchema.js';
import resolvers from './resolvers/clienteResolver.js';

const app = express();

const startServer = async () => {
    // Conectar ao banco de dados
    await conectaNaDatabase();

    // Criar e configurar o Apollo Server
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    // Iniciar o servidor Express
    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
};

// Chamar a função para iniciar o servidor
startServer();
