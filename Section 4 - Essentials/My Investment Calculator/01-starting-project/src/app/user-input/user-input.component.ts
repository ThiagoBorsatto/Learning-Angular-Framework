import { Component, EventEmitter, inject, Input, Output, output,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputs } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Input() userInputs!: UserInputs;
  @Output() sendingData = new EventEmitter();

  initialInvestment = 0;
  anualInvestment = 0;
  expectedReturn = 0;
  duration = 0;


  sendData() {
    this.userInputs = {
      initialInvestment: this.initialInvestment,
      anualInvestment: this.anualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    }
      
    this.sendingData.emit(this.userInputs);
    console.log(this.userInputs);
  }
}
