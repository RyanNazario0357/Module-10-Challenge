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
            },
        {
            type:'input',
            name:'id',
            message:'Enter Manager ID',
            validate: managerId => {
                if (managerId) {
                    return true;
                } else {
                    console.log('Enter Valid ID');
                }
            }
        },
            {
                type:'input',
                name:'email',
                message:'Manager E-Mail Address',
                validate: managerEmail => {
                    if (managerEmail){
                        return true;
                    } else {
                        console.log('Enter Email Address');
                    }
                }
            },
                {
                    type:'input',
                    name: 'officeNumber',
                    message: 'Managers office number',
                    validate: managerOfficeNumber => {
                        if (managerOfficeNumber) {
                            return true;
                        } else {
                            console.log('Enter a Valid Number');
                        }
                    }
                }
            ])