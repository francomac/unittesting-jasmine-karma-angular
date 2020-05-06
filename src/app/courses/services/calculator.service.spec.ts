import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';

describe('CalculatorService', () => {

    let calculator: CalculatorService, loggerSpy: any;

    beforeEach( () => {

        console.log('calling beforeEach');

        loggerSpy = jasmine.createSpyObj('loggerService', ['log']);

        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: LoggerService, useValue: loggerSpy}
            ]
        });

        calculator = TestBed.get(CalculatorService);

    });

    it('shoud add two numbers', () => {

        console.log('calling addTest');
        
        const result = calculator.add(2, 2);

        expect(result).toBe(4);

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('shoud substract two numbers', () => {

        console.log('calling substractTest');

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0);
    });

});
