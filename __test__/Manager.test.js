const Manager = require('../lib/Manager');

test('create manager object from employee', () => {
    const manager = new Manager('Steve, 1, "steve@domain.com', '867-5309');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));

    console.log(`Manager Name: ${manager.name}`);
    console.log(`Manager ID: ${manager.id}`);
    console.log(`Manager Email: ${manager.email}`);
});

test('office number created', () => {
    const manager = new Manager('Steve', 2, 'steve@domain.com', '867-5309');
    expect(manager.officeNumber).toEqual(expect.any(String));
    console.log('office Number: ${manager.officeNumber}');
});

test('create manager role', () => {
    const manager = new Manager('Steve', 2, 'steve@domain.com', '867-5309');
    expect(manager.getRole()).toBe('Manager')
});