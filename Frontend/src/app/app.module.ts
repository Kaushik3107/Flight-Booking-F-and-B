import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

import { AppComponent } from './app.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookedListComponent } from './booked-list/booked-list.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFlightComponent,
    BookedListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Make sure this is before ApolloModule
    ApolloModule, // Ensure this is imported after HttpClientModule
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://flight-booking-backend-nine.vercel.app/graphql', // GraphQL endpoint
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
