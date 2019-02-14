/* @flow */
const fs = require('fs');
const path = require('path');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const config = require('../config/app.json');

// Construct a schema, using GraphQL schema language
const query = require('./graphql/query');
const typeDefs = gql`${query}`;

// Provide resolver functions for your schema fields
const resolvers = require('./graphql/resolvers');

const server = express();
const gqlServer = new ApolloServer({ typeDefs, resolvers });
gqlServer.applyMiddleware({ app: server });

server.listen({ port: config.server.port }, () =>
  console.log(`🚀 Server ready at http://localhost:${config.server.port}${gqlServer.graphqlPath}`)
);