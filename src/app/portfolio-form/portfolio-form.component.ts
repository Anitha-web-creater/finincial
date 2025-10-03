import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.css']
})
export class PortfolioFormComponent {
  reviewMode = false;
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    type: ['Stock', Validators.required],
    quantity: [1, [Validators.required, Validators.min(1)]],
    purchasePrice: [0, [Validators.required, Validators.min(0.01)]],
    purchaseDate: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private ps: PortfolioService) {}

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.reviewMode = true;
  }

  confirm() {
    const val = this.form.value;
    this.ps.addPortfolio(val);
    this.form.reset({ type:'Stock', quantity:1, purchasePrice:0 });
    this.reviewMode = false;
  }
}
