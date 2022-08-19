const Engineer = require('../lib/Engineer');

test('creates engineer object from employee', () => {
    const engineer = new Engineer('Steve, 1, "steve@domain.com', 'tvoisyabr');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));

    console.log(`Engineer Name: ${engineer.name}`);
    console.log(`Engineer ID: ${engineer.id}`);
    console.log(`Engineer Email: ${engineer.email}`);
});

test('recieve github information', () => {
    const engineer = new Engineer('Steve', 1, 'steve@domain.com', 'tvoisyabr');
    expect(engineer.github).toEqual(expect.any(String));
});

