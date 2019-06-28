import React from 'react';
import { isLoggedIn } from "../withAuth/services";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from "..//..//actions";
import styled from "styled-components";
const Form = styled.form`display: flex;
  flex-direction: column;
  width: 35%;
  margin: auto;`;
const TextInput = styled.input`border-radius: 5px;
  outline: none;
  height: 10%;`;
const Button = styled.button`margin-top: 35px;
  margin-left: 55px;
  height: 35px;
  width: 50%;
  border-radius: 5px;
  color: black;
  background-color: #fab384;
  font-family: "Mali", cursive;
  font-weight: bold;
  font-size: 1.1rem;`;

const RegisterForm = styled.div`border: 2px solid #f73b3b;
  background-color: seashell;
  border-radius: 10px;
  width: 32%;
  height: 400px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  font-family: "Mali", cursive;
  font-weight: bold;`

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
            <RegisterForm>
              
            <Form>
                <h1>Login</h1>
                <p>Username</p>
                 <TextInput type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.textFormHandler}/>
                 <p>Password</p>
                <TextInput type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.textFormHandler}/>
                <Button onClick={this.login}>Login</Button>  
            </Form>
            </RegisterForm>
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