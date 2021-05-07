const Engineer = require('../lib/engineer');

describe("Engineer Test Sequence", () => {
    it('Can set Github account via constructor', () => {
        let github = 'Punkinut';

        let engineer = new Engineer(' ', ' ', ' ', github);
        expect(engineer.github).toEqual('Punkinut');
    })
    it('getRole() should return "Engineer"', () => {

        let engineer = new Engineer();
        expect(engineer.getRole()).toEqual('Engineer');
    })
    it('Can get GitHub username via getGithub()', () => {
        let github = 'Punkinut';

        let engineer = new Engineer(' ', ' ', ' ', github);
        expect(engineer.getGithub()).toEqual('Punkinut');
    })
})