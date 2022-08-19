const Intern = require('../lib/Intern');

test('create intern object from employee', () => {
    const intern = new Intern('Steve, 1, "steve@domain.com', 'UCF');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));

    console.log(`Intern Name: ${intern.name}`);
    console.log(`Intern ID: ${intern.id}`);
    console.log(`Intern Email: ${intern.email}`);
});

test('recieve github information', () => {
    const engineer = new Engineer('Steve', 1, 'steve@domain.com', 'tvoisyabr');
    expect(engineer.github).toEqual(expect.any(String));
});

test('create engineer role', () => {
    const engineer = new Engineer('Steve', 1, 'steve@domain.com', 'tvoisyabr');
    expect(engineer.getRole()).toBe('Engineer');
});