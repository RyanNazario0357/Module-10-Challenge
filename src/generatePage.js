const generateCards = data => {
    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        let employee = data[i];
        let role = employee.getrole();

        if (role === 'Manager') {
            const managerInfo = generateManager(employee);
            cardArray.push(managerinfo);
        }
        if (role === 'Engineer') {
            const engineerInfo = generateEngineer(employee);
            cardArray.push(engineerinfo);
        }
        if (role === 'intern') {
            const internInfo = generateIntern(employee);
            cardArray.push(interninfo);
        }
    }
    const employeeInfo = cardArray.join('');

    const createTeam = generatePage(employeeInfo);
    return createTeam;
};

//manager card
const generateManager = manager => {
    if (!manager) {
        return '';
    }
    return `<div class="col-md-4">
    <div class="card">
    <div class="card-header">
    <h2>${manager.name}</h2>
    <h5 class="card-title"><i class ="fa-solid fa-mug-hot"></i>  ${manager.getRole()}</h5>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">E-mail: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
    <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
    </ul>
    </div>
    </div>
    </div>
    `;
};

//intern card
const generateIntern = intern => {
    if (!intern) {
        return '';
    }
    return `<div class="col-md-4">
    <div class="card">
        <div class="card-header">
            <h2>${intern.name}</h2>
            <h5 class="card-title"><i class ="fa-solid fa-mug-hot"></i>  ${intern.getRole()}</h5>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">E-mail: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    </div>
    `;
};

const generatePage = data => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <title>Team Profile</title>
</head>
<body>
    
<div class="container-fluid>"
    <div cllass="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">Team</h1>
    </div>
</div>
`

}