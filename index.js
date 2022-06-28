const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const mongoose = require('mongoose');

const typeDefs = require("./models/typedefs");
const resolvers = require("./models/resolvers")


async function startServer() {
    const app = express();

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    await mongoose.connect('mongodb://localhost:27017/graphql');
    app.listen({port:4000},()=>{
        console.log('Server is ready')
    })
}

startServer().then(() => console.log('Server Established http:://localhost:4000/graphql'));



