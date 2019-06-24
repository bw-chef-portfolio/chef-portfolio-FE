import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { isLoggedIn } from "../withAuth/services";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import styled from "styled-components";

class Login extends React.Component {
    state = {
            username:'',
            password
        };
    Login = async () => {
        await this.props.login(this.state.username, this.state.password);
        this.props.history.push("/home");
    };

    textFormHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    componentDidMount = () => {
        if(isLoggedIn()) {
            this.props.history.push("/home");
        }
    };
    render () {
        if(isLoggedIn()) {
            this.props.history.push("/home");
        }
        return (
            <LoginForm>
                <h1>Returning User Login</h1>
                <TextInput type="text" name="username" placeholder="User Name" value={this.state.username} onChange={this.textFormHandler}/>
                <TextInput type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.textFormHandler}/>
                <Button onClick={this.Login}>Login</Button>
            </LoginForm>
        );
    }
}
const mapStateToProps = state => {
    return {
      isloadingLOGIN: state.isloadingLOGIN,
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