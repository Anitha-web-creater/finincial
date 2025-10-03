import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  portfolios = [];
  totalValue = 0;
  constructor(private ps: PortfolioService) {}

  ngOnInit(): void {
    this.ps.portfolios$.subscribe(list => {
      this.portfolios = list;
      this.totalValue = list.reduce((s:any, p:any) => s + (p.quantity * p.purchasePrice), 0);
    });
  }

  getBenchmark() {
    return this.totalValue * 0.98;
  }

  generatePoints() {
    const base = this.totalValue || 1000;
    const pts = [];
    for (let i=0;i<8;i++){
      const x = (i/7)*300;
      const y = 80 - ( (base * (0.8 + i*0.05)) % 80 );
      pts.push(`${x},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  }
}
