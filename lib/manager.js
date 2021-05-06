const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, phone) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email
        this.officeNumber = phone
    }

    getOfficeNumber () {
        return this.officeNumber
    }

    getRole () {
        return 'Manager'
    }
}

module.exports = Manager;