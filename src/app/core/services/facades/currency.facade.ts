import { Injectable } from '@angular/core';
import { CurrencyService } from '../../../data/api/currency.service';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { CurrencyApiDataModel } from '../../../data/models/currency.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyFacadeService {

  constructor(private currencyService: CurrencyService) { }

  /**
   * 
   * @param currencyName 
   * @returns 
   */
  getCurrencyData(currencyName: string): Observable<CurrencyApiDataModel> {
    return this.currencyService.getCurrencyData(currencyName)
      .pipe(
        catchError((err) => {
          return throwError(err);
        }),
        shareReplay()
      );
  }

}
