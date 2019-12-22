import {
  EMPLOYEES_LOADED,
  EMPLOYEE_ADD,
  EMPLOYEES_LOADING,
  EMPLOYEES_LOADING_ERROR,
  LOGGING
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

export const Logging=(login)=>{
  return{
    type: LOGGING,
    payload: login
  };
}; 


export const loadEmployees=()=>{
  return(dispatch)=>{
    dispatch(employeesLoading())
    fetch('http://localhost:3004/employees')
    .then((data) => data.json())
    .then(
    (employees) => dispatch(employeesLoaded(employees)),
    (error)=>dispatch(employeesLoadingError(error))
    );
  };
  }