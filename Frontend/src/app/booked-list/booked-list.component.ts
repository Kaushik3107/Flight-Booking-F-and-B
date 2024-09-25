import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const GET_BOOKED_FLIGHTS = gql`
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
`;

@Component({
  selector: 'app-booked-list',
  templateUrl: './booked-list.component.html',
  styleUrls: ['./booked-list.component.css'],
})
export class BookedListComponent implements OnInit {
  bookedFlights: any[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.fetchBookedFlights();
  }

  fetchBookedFlights() {
    this.apollo
      .watchQuery({
        query: GET_BOOKED_FLIGHTS,
      })
      .valueChanges.subscribe(
        (result: any) => {
          this.bookedFlights = result?.data?.bookedFlights;
        },
        (error) => {
          console.error('Error fetching booked flights', error);
        }
      );
  }
}
