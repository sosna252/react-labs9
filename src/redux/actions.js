import { EMPLOYEES_LOADED, EMPLOYEE_ADD } from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
};

export const employeeAdd = employee => {
  return {
    type: EMPLOYEE_ADD,
    payload: {
      employee
    }
  };
};