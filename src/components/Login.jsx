import React from 'react'
import { Logging } from '../redux/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Login  extends React.Component {
    constructor(props){
        super(props);
        this.state={
            login:null
        }
        this.Changed=this.Changed.bind(this);
        this.Logging=this.Logging.bind(this);
    }
    Changed(event)
    {
    this.setState({login:event.target.value});
    }

    Logging(event)
    {
    event.preventDefault();
    var user;
    fetch('http://localhost:3004/users')
      .then((data) => data.json())
      .then(
          (users) => { 
              user=users.find((x)=>x.username==this.state.login)
              if(user)
              {
                  console.log(user)
                  this.props.Logging(user);
                  this.props.history.push("/list");
          }})
    }

    render(){
    return(
        <form onSubmit={this.Logging}>
            <p>Login:</p> 
            <input placeholder="login" onChange={this.Changed}></input>
            <button type="submit">Submit</button>
        </form>
    )

}
}
const mapStateToProps = (state) => {
    return {
    };
  };

  const mapDispatchToProps = dispatch => ({
    Logging: (login)=> dispatch(Logging(login))
  });

  export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Login)); 