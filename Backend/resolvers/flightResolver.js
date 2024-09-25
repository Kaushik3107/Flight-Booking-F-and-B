// src/resolvers/flightResolver.js
const Flight = require('../models/flight');

const resolvers = {
  Query: {
    bookedFlights: async () => {
      try {
        return await Flight.find();
      } catch (error) {
        throw new Error('Error fetching flights: ' + error.message);
      }
    },
  },
  Mutation: {
    bookFlight: async (parent, { input }) => {
      try {
        const newFlight = new Flight(input);
        return await newFlight.save();
      } catch (error) {
        throw new Error('Error booking flight: ' + error.message);
      }
    },
  },
};

module.exports = resolvers;
