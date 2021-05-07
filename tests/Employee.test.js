const Employee = require('./employee');

describe("Employee", () => {
    it('Should set a name via constructor arguements'), () => {
        let name = 'Josh';

        let employ = new Employee(name);
        expect(employ.name).toEqual('Josh');
    }
})