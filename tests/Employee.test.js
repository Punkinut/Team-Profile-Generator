const Employee = require('../lib/employee');

describe("Class Test Sequence", () => {
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
    // it('Can get name via getName()', () => {
    //     let name = 'Smith';

    //     let employ = new Employee(name);
    //     expect(employ.name).toEqual('example@gmail.com');
    // })
})