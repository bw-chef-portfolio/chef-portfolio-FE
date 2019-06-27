import React from 'react'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { addUser } from '../actions'


class Registration extends React.Component {
      state = {
        userInfo: {
            username: '',
            password: '',
            email: '',
            location: ''
    }
  };

  componentDidMount() {
      this.props.addUser()
  }

  handleChanges = e => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };

   registration = e => {
    e.preventDefault();
    console.log(this.state.userInfo)
    this.props.addUser(this.state.userInfo)
      this.props.history.push('/login');
   
  };

    render() { 
        return ( 
            <div className="registration">
                
                <div className="register-form">
                  <h1>Registration</h1>
                <form className="form-1">
                    <p>Username </p>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.userInfo.username}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Password </p>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.userInfo.password}
                        onChange={this.handleChanges}
                    ></input>
                  
                
                
                    <p>Email </p>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={this.state.userInfo.email}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Location </p>
                    <input
                        type="text"
                        name="location"
                        placeholder="location"
                        value={this.state.userInfo.location}
                        onChange={this.handleChanges}
                    ></input>
                    <button onClick={this.registration}>
                        Register
                    </button>
                </form>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = state => ({
  error: state.error,
  addUser: state.addUser,
  fetchingData: state.fetchingData
});

export default connect(
  mapStateToProps,
  { addUser }
)(Registration);