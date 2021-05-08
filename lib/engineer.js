// Engineer that returns valid information along with their GitHub username and role
const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return 'Engineer';
    }
}

module.exports = Engineer;