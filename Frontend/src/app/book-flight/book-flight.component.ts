import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';

const BOOK_FLIGHT = gql`
  mutation BookFlight($input: FlightInput!) {
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

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
})
export class BookFlightComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  mobile: string = '';
  source: string = '';
  destination: string = '';
  date: string = '';
  time: string = '';

  constructor(private apollo: Apollo, private router: Router) {}

  bookFlight() {
    this.apollo
      .mutate({
        mutation: BOOK_FLIGHT,
        variables: {
          input: {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            mobile: this.mobile,
            source: this.source,
            destination: this.destination,
            date: this.date,
            time: this.time,
          },
        },
        // Refetch the query that fetches the list of booked flights
        refetchQueries: [
          {
            query: gql`
              query GetBookedFlights {
                bookedFlights {
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
            `,
          },
        ],
      })
      .subscribe(
        (response) => {
          alert('Flight booked successfully');
          this.router.navigate(['/booked-list']); // Redirect to booked list
        },
        (error) => {
          console.error('Error booking flight', error);
          alert('Error booking flight');
        }
      );
  }
}
