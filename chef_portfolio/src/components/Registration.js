import React from 'react'
import { connect } from 'react-redux';
import { registration } from '../actions'


class Registration extends React.Component {
      state = {
        userInfo: {
            firstName: '',
            lastName: '',
            email: '',
            location: ''
    }
  };

  componentDidMount() {
      this.props.registration()
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
    this.props.addUser(this.state.userInfo).then(res => {
      if (res) {
        this.props.history.push('/login');
      }
    });
  };

    render() { 
        return ( 
            <div>
                <h1>Registration</h1>
                <form>
                    <p>First Name </p>
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.userInfo.firstName}
                        onChange={this.handleChanges}
                    ></input>
                    <p>Last Name: </p>
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.userInfo.lastName}
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
                    <button>
                        {/* {this.props.registration ? (
                          <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                        ) : (
                         'Register'
                        )} */}
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
  { registration }
)(Registration);