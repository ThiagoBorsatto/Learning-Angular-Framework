import { Component, Input, SimpleChanges, inject} from '@angular/core';
import { UserInputs } from '../user-input/user-input.model';
import { InvestmentResultsService } from './investment-results.service';
import { InvestmentResultsModel } from './investment-results.model';


@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
 
  private investmentResultsService = inject(InvestmentResultsService);

  @Input() ReceiverDataDad!: UserInputs;
  resultInvestment: InvestmentResultsModel[] = [];
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['ReceiverDataDad'] && this.ReceiverDataDad) {
      this.calculate();
    }
  }

  calculate() {
    this.resultInvestment = this.investmentResultsService.calculateInvestmentResults(this.ReceiverDataDad);
    console.log(this.resultInvestment);
  }
  
}
