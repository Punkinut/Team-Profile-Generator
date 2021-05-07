const Employee = require('../lib/employee');

describe("Class Test Sequence", () => {
    it('Should set a name via constructor arguements'), () => {
        let name = 'Josh';

        let employ = new Employee(name);
        expect(employ.name).toEqual('Josh');
    }
})