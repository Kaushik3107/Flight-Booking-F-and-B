// src/app.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./resolvers/flightResolver');
const connectDB = require('./config');
require('dotenv').config();

const startServer = async () => {
  const app = express();
  
  // Connect to MongoDB
  await connectDB();

  // Create Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Apply Apollo middleware to Express
  await server.start();
  server.applyMiddleware({ app });

  // Start Express server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();
