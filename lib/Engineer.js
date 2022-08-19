const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = ggithub;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}