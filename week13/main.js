// Problem 1: Create JSON for each employee
const employees = [
    {
      name: 'Sam',
      team: 'Tech',
      job: 'Manager',
      salary: 40000,
      raise: true
    },
    {
      name: 'Mary',
      team: 'Finance',
      job: 'Trainee',
      salary: 18500,
      raise: true
    },
    {
      name: 'Bill',
      team: 'HR',
      job: 'Executive',
      salary: 21200,
      raise: false
    }
  ];
  
  // Problem 2: Create JSON for the company
  const company = {
    companyName: 'Tech Stars',
    site: 'www.techstars.site',
    employees: employees
  };
  
  // Problem 3: Add a new employee
  const newEmployee = {
    name: 'Anna',
    team: 'Tech',
    job: 'Executive',
    salary: 25600,
    raise: false
  };
  employees.push(newEmployee);
  
  // Problem 4: Calculate total salary for all employees
  let totalSalary = 0;
  employees.forEach(employee => {
    totalSalary += employee.salary;
  });
  console.log(`Total salary for all employees: ${totalSalary}`);
  
  // Problem 5: Raise salary for eligible employees
  employees.forEach(employee => {
    if (employee.raiseEligible) {
      employee.salary = employee.salary * 1.1;
      employee.raiseEligible = false;
    }
  });
  
  // Problem 6: Update working from home status
  const workingFromHome = ['Anna', 'Sam'];
  employees.forEach(employee => {
    employee.wfh = workingFromHome.includes(employee.firstName);
  });
  
  console.log(company);