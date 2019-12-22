import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { employeesLoaded, loadEmployees } from "../redux/actions";

const EmployeeLine = ({ employee }) => (
<div>{employee.name} ({employee.age} yrs old): {employee.company}</div>
)
class PageEmployeesList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      isLoading: false
    };
  }

  componentDidMount() {
    if(this.props.fetchedData)
      return;
      this.props.loadEmployees();
  }

  render() {
    const { Loading } = this.props;
    const { employees } = this.props;

    if(Loading) {
      return <p>Loading ...</p>
    }
    
    return (
      <div>
        <h1>Employees List:</h1>
        {employees && employees.map((employee => <EmployeeLine key={employee.id} employee={employee} />))}
        <Link to="/new">
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps */) => {
  return {
    employees: state.employees,
    Loading: state.loading,
    fetchedData: state.fetchedData
  }
}

const mapDispatchToProps = (dispatch) => ({
  //employeesLoaded: employees => dispatch(employeesLoaded(employees)),
  loadEmployees: ()=> dispatch(loadEmployees())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEmployeesList)