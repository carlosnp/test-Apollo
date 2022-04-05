import { Injectable } from '@angular/core';
import { Apollo, gql} from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApolloResponse } from 'src/app/shared/models/apollo-response.models';

const QUERY_RATES = gql`
{
  rates(currency: "USD") {
    currency
    rate
    name
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  /**
   * CONSTRUCTOR DEL SERVICIO
   * @param apollo Instancia de Apollo
   */
  constructor(
    private apollo: Apollo
  ) { }
  getExchangeRates(): Observable<ApolloResponse> {
    return this.apollo.watchQuery({
        query: QUERY_RATES,
      })
      .valueChanges
      .pipe(
        map((result: ApolloResponse) => {
          console.log('RESULT', result);
          const data = result ? result.data ? result.data.rates : [] : [];
          const loading = result.loading;
          const error = result.error;
          const networkStatus = result.networkStatus
          return {data, loading, error, networkStatus}
        })
      )
  }
}
