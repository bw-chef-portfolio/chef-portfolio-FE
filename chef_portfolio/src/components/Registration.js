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
            <div>
                <h1>Registration</h1>
                <form>
                    <p>Username: </p>
                    <input
                        type="text"
                        name="username"
                        value={this.state.userInfo.username}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Password: </p>
                    <input
                        type="text"
                        name="password"
                        value={this.state.userInfo.password}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Email: </p>
                    <input
                        type="text"
                        name="email"
                        value={this.state.userInfo.email}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Location: </p>
                    <input
                        type="text"
                        name="location"
                        value={this.state.userInfo.location}
                        onChange={this.handleChanges}
                    ></input>
                    <button onClick={this.registration}>
                        {this.props.addUser ? (
                          <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                        ) : (
                         'Register'
                        )}
                        Register
                    </button>
                </form>
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