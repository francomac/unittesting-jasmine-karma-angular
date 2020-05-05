import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {

    it('shoud add two numbers', () => {
        const logger = jasmine.createSpyObj('loggerService', ['log']);

        const calculator = new CalculatorService(logger);

        const result = calculator.add(2, 2);

        expect(result).toBe(4);

        expect(logger.log).toHaveBeenCalledTimes(1);
    });

    it('shoud substract two numbers', () => {
        const logger = jasmine.createSpyObj('loggerService', ['log']);

        const calculator = new CalculatorService(logger);

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0);
    });

});
