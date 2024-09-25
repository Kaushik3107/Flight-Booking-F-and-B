// src/schemas/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Flight {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    mobile: String!
    source: String!
    destination: String!
    date: String!
    time: String!
  }

  input FlightInput {
    firstName: String!
    lastName: String!
    email: String!
    mobile: String!
    source: String!
    destination: String!
    date: String!
    time: String!
  }

  type Query {
    bookedFlights: [Flight!]!
  }

  type Mutation {
    bookFlight(input: FlightInput!): Flight
  }
`;

module.exports = typeDefs;
