// Manager class that returns valid information along with their Office Number and role
const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email
        this.officeNumber = officeNumber
    }

    getOfficeNumber () {
        return this.officeNumber
    }

    getRole () {
        return 'Manager'
    }
}

module.exports = Manager;

