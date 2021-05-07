const Manager = require('../lib/manager');

describe("Manager Test Sequence", () => {
    it('Can set office number via constructor', () => {
        let number = '123456789';

        let manager = new Manager(' ', ' ', ' ', number);
        expect(manager.officeNumber).toEqual('123456789');
    })
    it('getRole() should return "Manager"', () => {

        let manager = new Manager();
        expect(manager.getRole()).toEqual('Manager');
    })
    it('Can get office number via getOfficeNumber()', () => {
        let number = '123456789';

        let manager = new Manager(' ', ' ', ' ', number);
        expect(manager.getOfficeNumber()).toEqual('123456789');
    })
})