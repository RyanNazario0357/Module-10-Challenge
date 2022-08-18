const Employee = require('../lin/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Steve', 1, 'steve@domain.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})