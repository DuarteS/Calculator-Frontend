import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone : false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expression = '';
  calculations: any[] = [];

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit() {
    this.fetchCalculations();
  }

  calculate() {
    if (!this.expression.trim()) return;

    this.calculatorService.sendCalculation(this.expression).subscribe(result => {
      this.fetchCalculations();
    });
  }

  fetchCalculations() {
    this.calculatorService.getPreviousCalculations().subscribe(data => {
      this.calculations = data;
    });
  }
}
