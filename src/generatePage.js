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
    const employeeInnfo = cardArray.join('');

    const createTeam = generatePage(employeeInfo);
    return createTeam;
};