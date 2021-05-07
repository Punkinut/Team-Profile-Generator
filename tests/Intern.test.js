const Intern = require('../lib/intern');

describe("Intern Test Sequence", () => {
    it('Can set school via constructor', () => {
        let school = 'Sydney';

        let intern = new Intern(' ', ' ', ' ', school);
        expect(intern.school).toEqual('Sydney');
    })
    it('getRole() should return "Intern"', () => {

        let intern = new Intern();
        expect(intern.getRole()).toEqual('Intern');
    })
    it('Can get school via getSchool()', () => {
        let school = 'Sydney';

        let intern = new Intern(' ', ' ', ' ', school);
        expect(intern.getSchool()).toEqual('Sydney');
    })
})