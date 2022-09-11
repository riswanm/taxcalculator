import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TaxCalculatorService{

    getSalaryAfterTax(professionId: number, experienceInYears: number, cityId : number, incomeYear: number){
     
        const basicSalary = this.getBasicSalaryByProfession(professionId);
        const basicTaxRate = this.getBasicTaxRateByYearAndCity(cityId,incomeYear);
        const salaryAfterExperience = this.getSalaryAfterIncreaseByExperience(basicSalary,experienceInYears);
 
        let taxedAmount = 0;

        // this code blocks calculates tax in more configurable with scalability and expandability in mind ( in future if there is any tax range, 
        // percentage chnage or new range introduced, it code can be easily extended just by changing the taxRange variable without changing actual logic)

        const taxRanges : number[][] = [[0, 36000, basicTaxRate], [36000, 45000, 50], [45000, Number.MAX_VALUE, 70  ]]; // [minrange, maxrange, taxpercentage]
        for (const range of taxRanges ){
            if (salaryAfterExperience >= range[0] && salaryAfterExperience < range[1]){
                taxedAmount = taxedAmount + this.getTaxedAmount(salaryAfterExperience - range[0], range[2]);
                break ;
               }
               else{
                taxedAmount = taxedAmount + this.getTaxedAmount(range[1] - range[0], range[2]);
               }
        }
       
 
        // This commented code the other approach with more conventional approach
        
        // if (salaryAfterExperience < 36000){
        //  taxedAmount = this.getTaxedAmount(salaryAfterExperience,basicTaxRate);
        // }
        // else{
        //   const taxedAmountInitial = this.getTaxedAmount(36000,basicTaxRate);
 
        //   if (salaryAfterExperience >= 36000 && salaryAfterExperience <= 45000){
        //          taxedAmount = taxedAmountInitial + this.getTaxedAmount((salaryAfterExperience-36000), 50)
        //   }
        //   else if (salaryAfterExperience > 45000){
        //      const taxedAmountSecondStage = taxedAmountInitial + this.getTaxedAmount((45000-36000), 50);
        //      taxedAmount = taxedAmountSecondStage + this.getTaxedAmount((salaryAfterExperience-45000), 70)
        //   }
 
        // }
 
        return salaryAfterExperience - taxedAmount;
 
     }

     private getSalaryAfterIncreaseByExperience(basicSalary: number, experienceInYears : number) : number {
        if (experienceInYears <= 3){
            return basicSalary;
        } 
        else if (experienceInYears >= 4 && experienceInYears <= 7){
            return (basicSalary*120)/100;
        }
        else if (experienceInYears >= 8 && experienceInYears <= 10){
            return (basicSalary*140)/100;
        }
        
        return (basicSalary*160)/100;
    }



    private getTaxedAmount(salary:number, taxRate: number){
        return (salary*taxRate)/100;
    }

    private getBasicSalaryByProfession(professionId: number){
        if (professionId == 1){ // developer
            return 30000;
        }
        else if (professionId == 2){ // teacher
            return 27000;
        }
        else if (professionId == 3){ // cachier
            return 25000;
        }
        return 0;
    }

    private getBasicTaxRateByYearAndCity( cityID : number, incomeYear: number){
        if (cityID == 1){ // Stockholm 
            if (incomeYear == 2019){
                return 30;
            }
            else if (incomeYear == 2020){
                return 29;
            }
        }
        else if (cityID == 2) { //Gothenburg 
            if (incomeYear == 2019){
                return 25;
            }
            else if (incomeYear == 2020){
                return 22;
            }
        }

        return 0;
    }
}