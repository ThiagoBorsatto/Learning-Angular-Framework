// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it
import { Injectable } from "@angular/core";
import { UserInputs } from "../user-input/user-input.model";

@Injectable({providedIn: 'root'})
export class InvestmentResultsService {

    public dadosDoUsuario = [];

    calculateInvestmentResults(userIput: UserInputs) 
        {
    const annualData = [];
    let investmentValue = userIput.initialInvestment;

    for (let i = 0; i < userIput.duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (userIput.expectedReturn / 100);
        investmentValue += interestEarnedInYear + userIput.anualInvestment;
        const totalInterest =
        investmentValue - userIput.anualInvestment * year - userIput.initialInvestment;
        annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        anualInvestment: userIput.anualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userIput.initialInvestment + userIput.anualInvestment * year,
        });
    }

    console.log(annualData);
    return annualData;
    }

}
