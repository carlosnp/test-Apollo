import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRateService } from 'src/app/core/graph-ql/services/exchange-rate.service';
import { ApolloResponse } from 'src/app/shared/models/apollo-response.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  rates$: Observable<ApolloResponse>
  constructor(
    private apoloSrv: ExchangeRateService
  ) {
    this.rates$ = this.apoloSrv.getExchangeRates();
  }
}
