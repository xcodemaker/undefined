/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import Loader from "./Loader";
import {ERROR_MESSAGES} from '../common/commonVarList';
import * as ajaxServices from '../common/ajaxServices';

class Login extends Component {


    constructor(props) {
        super(props)
        this.state = {
            hasErr: false,
            errMsg: '',
            isLoading: false,
        }

        this.hideLogin = this.hideLogin.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.hideError = this.hideError.bind(this)

    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.isOpen) {
            this.refs.login_username.focus()
            this.refs.login_username.value = ''
            this.refs.login_password.value = ''
            this.setState({
                hasErr: false,
                errMsg: ''
            })
        }
    }

    hideLogin() {
        this.props.showHideLogin(false)
    }

    hideError() {
        this.setState({
            hasErr: false,
            errMsg: ''
        })
    }


    handleLogin(e) {
        e.preventDefault();
        let isValid = true

        let usernameField = this.refs.login_username
        let passwordField = this.refs.login_password

        let username = usernameField.value
        let password = passwordField.value


        if (username === '') {
            isValid = false
            this.setState({
                hasErr: true,
                errMsg: ERROR_MESSAGES.LOGIN_USERNAME_EMPTY
            })
            usernameField.focus()
        } else if (!username.match(/^[a-z0-9]+$/i)) {
            isValid = false
            this.setState({
                hasErr: true,
                errMsg: ERROR_MESSAGES.LOGIN_USERNAME_INVALID
            })
            usernameField.focus()
        } else if (password === '') {
            isValid = false
            this.setState({
                hasErr: true,
                errMsg: ERROR_MESSAGES.LOGIN_PASSWORD_EMPTY
            })
            passwordField.focus()
        }

        if (isValid) {
            console.log("ALl valid")
            this.hideError()
            this.setState({
                isLoading: true
            })
            ajaxServices.post('https://api.devrant.thusitha.site/v1/user.activate', {
                    "username": username,
                    "password": password
                },
                {},
                {'Content-Type': 'application/json'}).then((data)=>{
                    console.log(data)
                if(!data.ok){
                    this.setState({
                        hasErr: true,
                        errMsg: ERROR_MESSAGES.LOGIN_RESPONSE_INVALID_CREDENTIALS
                    })
                }

            }).catch((err)=>{
                console.error(err)
            }).finally(()=>{
                this.setState({
                    isLoading: false
                })
            })
        }
    }


    render() {
        return (
            <div className={`popup ${this.props.isOpen ? 'popup--open' : ''}`}>
                <div className="popup__header">
                    <div title="Close" className="close layout--center" onClick={this.hideLogin}>
                        X
                    </div>
                </div>
                <div className="popup__body layout--center">
                    <div className="popup__body-inner">

                        <div className="form">
                            <div className="form__title">
                                JOIN <span className="highlight">#</span>DEVRANT
                            </div>
                            <div className="form__description">
                                Vote and comment on others' rants. Post your own.
                            </div>
                            <form name="login" onSubmit={this.handleLogin} onKeyPress={(e) => {
                                if (e.key === "Enter") this.handleLogin(e)
                            }}>
                                <div className="login">
                                    <input ref="login_username" type="text" placeholder="USERNAME" onBlur={this.hideError} tabIndex="1" className={this.state.isLoading ? 'hidden':''}/>
                                    <input ref="login_password" type="text" placeholder="PASSWORD" onBlur={this.hideError} tabIndex="2" className={this.state.isLoading ? 'hidden':''}/>

                                    <Loader isLoading={this.state.isLoading}/>

                                    {this.state.hasErr &&
                                    <div className="form__error">
                                        {this.state.errMsg}
                                    </div>
                                    }

                                    <input type="submit" value="LET ME IN" tabIndex="3" disabled={this.state.isLoading}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;