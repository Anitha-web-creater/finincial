import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyPortfolioComponent } from './lazy-portfolio.component';

@NgModule({
  declarations: [LazyPortfolioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LazyPortfolioComponent }])
  ]
})
export class LazyPortfolioModule {}
