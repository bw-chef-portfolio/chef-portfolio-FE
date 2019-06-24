import React from 'react'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';


class Registration extends React.Component {
      state = {
        userInfo: {
            firstName: '',
            lastName: '',
            email: '',
            location: ''
    }
  };

  handleChanges = e => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };

//    login = e => {
//     e.preventDefault();
//     this.props.login(this.state.userInfo).then(res => {
//       if (res) {
//         this.props.history.push('/protected');
//       }
//     });
//   };

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
                    <input
                        type="text"
                        name="email"
                        value={this.state.userInfo.email}
                        onChange={this.handleChanges}
                    ></input>
                    <input
                        type="text"
                        name="location"
                        value={this.state.userInfo.location}
                        onChange={this.handleChanges}
                    ></input>
                    <button>
                        {/* {this.props.loggingIn ? (
                          <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                        ) : (
                         'Register'
                        )} */}
                    </button>
                </form>
            </div>
         );
    }
}
 
const mapStateToProps = state => ({
  
});

export default connect(
  mapStateToProps,
  {  }
)(Registration);