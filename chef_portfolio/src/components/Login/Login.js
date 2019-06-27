import React from 'react';
import { isLoggedIn } from "../withAuth/services";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from "..//..//actions";
import styled from "styled-components";
const Form = styled.form``;
const TextInput = styled.input``;
const Button = styled.button``;

class Login extends React.Component {
    state = {
            username:'',
            password:''
    };

    login = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password).then(res => {
      if (res) {
        this.props.history.push('/protected');
      }
    });
  };

    textFormHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render () {
       
        return (
            
            <Form>
                <h1>Returning User Login</h1>
                 <TextInput type="text" name="username" placeholder="User Name" value={this.state.username} onChange={this.textFormHandler}/>
                <TextInput type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.textFormHandler}/>
                <Button onClick={this.login}>Login</Button>  
            </Form>
            
        );
    }
}
const mapStateToProps = state => {
    return {
      isLoadingLOGIN: state.isLoadingLOGIN,
      successLOGIN: state.successLOGIN,
      user: state.user
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      { login }
    )(Login)
  );