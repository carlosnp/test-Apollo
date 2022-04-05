import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphQLRoutingModule } from './graph-ql-routing.module';


import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache, ApolloClientOptions} from '@apollo/client/core';

/**
 * Url del servidor de graphQL
 */
const URI_GRAPHQL = 'https://48p1r2roz4.sse.codesandbox.io';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    cache: new InMemoryCache(),
    link: httpLink.create({
      uri: URI_GRAPHQL,
    }),
  };
}



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
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
