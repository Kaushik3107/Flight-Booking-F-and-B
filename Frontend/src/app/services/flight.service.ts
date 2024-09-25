import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private apollo: Apollo) {}

  bookFlight(flightData: any) {
    const BOOK_FLIGHT = gql`
      mutation bookFlight($input: FlightInput!) {
        bookFlight(input: $input) {
          firstName
          lastName
          email
          mobile
          source
          destination
          date
          time
        }
      }
    `;

    return this.apollo.mutate<any>({
      mutation: BOOK_FLIGHT, // Correct usage
      variables: {
        input: flightData,
      },
    });
  }

  getBookedFlights() {
    const GET_BOOKED_FLIGHTS = gql`
      query {
        bookedFlights {
          firstName
          lastName
          source
          destination
          date
          time
        }
      }
    `;

    return this.apollo.watchQuery<any>({
      query: GET_BOOKED_FLIGHTS, // Correct usage
    }).valueChanges;
  }
}
