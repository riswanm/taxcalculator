import { Component } from '@angular/core';
import { TaxCalculatorService } from './services/taxcalculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tax Calculator';
  experienceInYears : number = 0;
  professionId : number = 1;
  locationId : number = 2;
  incomeYear : number = 2019
  salaryAfterTax : number = 0;

  constructor(private readonly taxCalculatorService: TaxCalculatorService){

  }

  onCalculateSalary(){
    this.salaryAfterTax = this.taxCalculatorService.getSalaryAfterTax(this.professionId,this.experienceInYears,this.locationId, this.incomeYear)
  }

}
