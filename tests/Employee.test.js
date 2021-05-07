const Employee = require('../lib/employee');

describe("Employee Test Sequence", () => {
    it('Can set name via constructor arguements', () => {
        let name = 'Josh';

        let employ = new Employee(name);
        expect(employ.name).toEqual('Josh');
    })
    it('Can set id via constructor arguements', () => {
        let id = '3';

        let employ = new Employee(' ', id);
        expect(employ.id).toEqual('3');
    })
    it('Can set email via constructor arguements', () => {
        let email = 'example@gmail.com';

        let employ = new Employee(' ', ' ', email);
        expect(employ.email).toEqual('example@gmail.com');
    })
    it('Can get name via getName()', () => {
        let name = 'Smith';

        let employ = new Employee(name);
        expect(employ.getName()).toEqual('Smith');
    })
    it('Can get id via getId()', () => {
        let id = '3';

        let employ = new Employee(' ', id);
        expect(employ.getId()).toEqual('3');
    })
    it('Can get email via getEmail()', () => {
        let email = 'example@gmail.com';

        let employ = new Employee(' ', ' ', email);
        expect(employ.getEmail()).toEqual('example@gmail.com');
    })
    it('getRole() should return "Employee"', () => {
        let employ = new Employee();
        expect(employ.getRole()).toEqual('Employee');
    })
})