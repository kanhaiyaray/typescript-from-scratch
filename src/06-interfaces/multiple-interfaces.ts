interface Employee {
  employeeCode: number;
  department: string;
}

interface Manager {
  teamSize: number;
  managementLevel: string;
}

class DepartmentManager implements Employee, Manager {
  employeeCode: number;
  department: string;
  teamSize: number;
  managementLevel: string;

  constructor(
    employeeCode: number,
    department: string,
    teamSize: number,
    managementLevel: string
  ) {
    this.employeeCode = employeeCode;
    this.department = department;
    this.teamSize = teamSize;
    this.managementLevel = managementLevel;
  }
}

const manager = new DepartmentManager(
  7001,
  "Engineering",
  12,
  "Senior"
);

console.log(manager.employeeCode);
console.log(manager.department);
console.log(manager.teamSize);
console.log(manager.managementLevel);