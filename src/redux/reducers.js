import { EMPLOYEES_LOADED, EMPLOYEE_ADD, EMPLOYEES_LOADING, EMPLOYEES_LOADING_ERROR } from "./constants";

export const initialState = {
  employees: [],
  fetchedData: false,
  error: null,
  loading:false
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees, fetchedData: true, error: false, loading:false });
    }
    case EMPLOYEE_ADD:{
      const { employee } = action.payload;
      const newemployee=[...state.employees,employee]
      return Object.assign({}, state, { employees: newemployee });
    }
    case EMPLOYEES_LOADING:{
      return Object.assign({},state, { loading:true, error:null});
    }
    case EMPLOYEES_LOADING_ERROR:{
      const {error}=action.payload;
      return Object.assign({},state, { loading:true, error});
    }
    default:
      return state;
  }
};

export default appReducer;
