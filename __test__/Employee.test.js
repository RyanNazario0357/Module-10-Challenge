const Employee = require('../lin/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Steve', 1, 'steve@domain.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

    console.log('Employee Name: ${employee.name}');
    console.log('Employee ID: ${employee.id}');
    console.log('Employee E-Mail: ${employee.email}');
});

test('gets employee name', () => {
    const employee = new Employee('Steve', 1, "steve@domain.com");
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Steve', 1, "steve@domain.com");
    expect(employee.getID()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Steve', 1, "steve@domain.com");
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('create employee role', () => {
    const employee = new Employee('Steve', 1, "steve@domain.com");
    expect(employee.getRole()).toBe('Employee');
});