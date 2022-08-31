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
            .then(managerData => {
                const manager = new Manager (managerData.name, managerData.id, managerData.email, managerData.officeNumber);
                teamArray.push(manager);
            })
        };

        const addEmployee = () => {
            console.log(`
            ==================
            Add a Team Member
            ==================
            `);
            return inquirer.prompt([
                {
                    type:'input',
                    name: 'name',
                    message: 'Add a Team Member?',
                    when: (choice) =>choice.role !== 'Finish Building Team',
                    validate: employeeName => {
                        if (employeeName) {
                            return true;
                        } else {
                            console.log('Enter Name');
                        }
                        }
                    },
                {
                    type:'input',
                    name:'id',
                    message:'Enter Employee ID',
                    when: (choice) =>choice.role !== 'Finish Building Team',
                    validate: employeeId => {
                        if (employeeId) {
                            return true;
                        } else {
                            console.log('Enter Valid ID');
                        }
                    }
                },
                    {
                        type:'input',
                        name:'email',
                        message:'Employee E-Mail Address',
                        when: (choice) =>choice.role !== 'Finish Building Team',
                        validate: employeeEmail => {
                            if (employeeEmail){
                                return true;
                            } else {
                                console.log('Enter Email Address');
                            }
                        }
                    },
                        {
                            type:'input',
                            name: 'github',
                            message: 'Github Username',
                            when: (choice) =>choice.role !== 'Engineer',
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log('Enter a Github Username');
                                }
                            }
                        },
                        {
                            type:'input',
                            name: 'school',
                            message: 'Enter Interns School',
                            when: (choice) =>choice.role !== 'Intern',
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log('Enter a School');
                                }
                            }
                        },
                        {
                            type:'confirm',
                            name: 'addEmployee',
                            message: 'Would you like to add another Employee?',
                            when: (choice) =>choice.role !== 'Finish Building Team',
                            default: true
                        }
                    ])
                    .then(employeeData => {
                        if(employeeData.role === 'Engineer') {
                            const engineer = new Engineer (employeeData.name,employeeData.id,employeeData.email,employeeData.github);
                            teamArray.push(engineer);
                        }else if (employeeData.role === 'Intern') {
                            const intern = new Intern  (employeeData.name,employeeData.id,employeeData.email,employeeData.school);
                            teamArray.push(intern);
                        }

                        if (employeeData.addEmployee) {
                            return addEmployee(teamArray);
                        } else {
                            return teamArray;
                        }
                        })
                        };

                        const createFile = (fileName, teamArray) => {
                            return new Promise((resolve, reject) => {
                                fs.writeFile('./dist/index.html', fileName, err => {
                                    if (err) {
                                        reject(err);
                                        return;
                                    }
                                    resolve({
                                        ok: true,
                                        message:'Congrats! A New Team Member has been Added'
                                    });
                                });
                            });
                        };