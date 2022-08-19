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

test('recieve school information', () => {
    const intern = new Intern('Steve', 1, 'steve@domain.com', 'UCF');
    expect(intern.school).toEqual(expect.any(String));
    console.log(intern.school);
});

test('create intern role', () => {
    const intern = new Intern('Steve', 1, 'steve@domain.com', 'UCF');
    expect(intern.getRole()).toBe('Intern');
    console.log(intern.getRole());
});