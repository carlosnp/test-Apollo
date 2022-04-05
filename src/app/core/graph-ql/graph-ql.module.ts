import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphQLRoutingModule } from './graph-ql-routing.module';


import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GraphQLRoutingModule,
    ApolloModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://48p1r2roz4.sse.codesandbox.io',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
