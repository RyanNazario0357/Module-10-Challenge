const Engineer = require('../lib/Engineer');

test('creates engineer object from employee', () => {
    const engineer = new Engineer('Steve, 1, "steve@domain.com', 'tvoisyabr');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
})