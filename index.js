const inquirer = require('inquirere');
const fs = require('fs');
const generateCards = require('./src/generatePage.js');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const teamArray = [];

const addManager = () => {
    console.log(`
    ==================
    Add a Team Manager
    ==================
    `);
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: 'Team Manager Name',
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log('Enter Name');
                }
                }
            }
        };
        {}
    ])
}