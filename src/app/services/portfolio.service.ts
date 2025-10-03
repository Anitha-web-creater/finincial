import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PortfolioService {
  private _portfolios = new BehaviorSubject<any[]>([
    { name: 'Acme Corp', type: 'Stock', quantity: 10, purchasePrice: 120, purchaseDate: '2024-01-01' },
    { name: 'Gov Bond', type: 'Bond', quantity: 5, purchasePrice: 1000, purchaseDate: '2023-06-15' }
  ]);
  portfolios$ = this._portfolios.asObservable();

  addPortfolio(p:any) {
    const cur = this._portfolios.getValue();
    this._portfolios.next([...cur, p]);
  }
}
