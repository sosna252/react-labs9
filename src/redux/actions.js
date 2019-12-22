import {
  EMPLOYEES_LOADED,
  EMPLOYEE_ADD,
  EMPLOYEES_LOADING,
  EMPLOYEES_LOADING_ERROR,
} from "./constants";
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

export const employeesLoading=()=>{
  return{
    type: EMPLOYEES_LOADING,
    payload: {}
  };
};

export const LoadingError = error => {
  return{
    type: EMPLOYEES_LOADING_ERROR,
    payload: {
      error
    }
  };
};

export const loadEmployees=()=>{
  return(dispatch)=>{
    dispatch(loadEmployees())
    fetch('http://localhost:3004/employees')
    .then((data) => data.json())
    .then(
    (employees) => dispatch(employeesLoaded(employees)),
    (error)=>dispatch(employeesLoadingError(error))
    );
  };
  }