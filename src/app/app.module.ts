import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { PortfolioService } from './services/portfolio.service';
import { MockHeaderInterceptor } from './services/mock-interceptor.service';
import { ShortNumberPipe } from './shared/short-number.pipe';
import { HighlightDirective } from './shared/highlight.directive';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: PortfolioFormComponent },
  { path: 'detail', loadChildren: () => import('./lazy-portfolio/lazy-portfolio.module').then(m => m.LazyPortfolioModule) },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PortfolioFormComponent,
    ShortNumberPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PortfolioService,
    { provide: HTTP_INTERCEPTORS, useClass: MockHeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
