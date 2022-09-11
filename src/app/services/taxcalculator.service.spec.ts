import { TestBed } from "@angular/core/testing";
import { TaxCalculatorService } from "./taxcalculator.service"

describe('getSalaryAfterTax',()=>{
    let service: TaxCalculatorService;

    beforeEach(() => {
        service = TestBed.inject(TaxCalculatorService);
    }

    )
    it('when No of years 0, profession is developer, location is stockholm and income year 2019 should return 21000 ',()=>{
        const expected = 21000;
        const actual = service.getSalaryAfterTax(1,0,1,2019);
        expect(expected).toBe(actual);
    });
    it('when No of years 2, profession is teacher, location is stockholm and income year 2019 should return 18900 ',()=>{
        const expected = 18900;
        const actual = service.getSalaryAfterTax(2,2,1,2019);
        expect(expected).toBe(actual);
    });
    it('when No of years 3, profession is cachier, location is stockholm and income year 2019 should return 17500 ',()=>{
        const expected = 17500;
        const actual = service.getSalaryAfterTax(3,3,1,2019);
        expect(expected).toBe(actual);
    });

    it('when No of years 1, profession is developer, location is gotternberg and income year 2020 should return 23400 ',()=>{
        const expected = 23400;
        const actual = service.getSalaryAfterTax(1,1,2,2020);
        expect(expected).toBe(actual);
    });

    it('when No of years 3, profession is cachier, location is gotternberg and income year 2019 should return 2019 ',()=>{
        const expected = 18750;
        const actual = service.getSalaryAfterTax(3,3,2,2019);
        expect(expected).toBe(actual);
    });

    it('when No of years 3, profession is cachier, location is gotternberg and income year 2019 should return 18750 ',()=>{
        const expected = 18750;
        const actual = service.getSalaryAfterTax(3,3,2,2019);
        expect(expected).toBe(actual);
    });

    it('when No of years 5, profession is Teacher, location is Stockholm and income year 2020 should return 23004 ',()=>{
        const expected = 23004;
        const actual = service.getSalaryAfterTax(2,5,1,2020);
        expect(expected).toBe(actual);
    });

    it('when No of years 5, profession is developer, location is gotternberg and income year 2020 should return 28080 ',()=>{
        const expected = 28080;
        const actual = service.getSalaryAfterTax(1,5,2,2020);
        expect(expected).toBe(actual);
    });

    it('when No of years 8, profession is teacher, location is Gothenberg and income year 2019 should return 27900 ',()=>{
        const expected = 27900;
        const actual = service.getSalaryAfterTax(2,8,2,2019);
        expect(expected).toBe(actual);
    });

    it('when No of years 12, profession is developer, location is Gothenberg and income year 2020 should return 33480 ',()=>{
        const expected = 33480;
        const actual = service.getSalaryAfterTax(1,12,2,2020);
        expect(expected).toBe(actual);
    });
})