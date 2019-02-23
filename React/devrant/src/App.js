/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header'
import './App.css';
import Loader from "./components/Loader";
import RantListPage from "./containers/RantListPage";
import RantDetails from "./components/RantDetails";
import Login from "./components/Login";
import * as commonMethods from './common/commonMethods';
import * as ajaxServices from "./common/ajaxServices";
import {API_URLS, ERROR_MESSAGES, PUBSUB_TOPICS} from "./common/commonVarList";
import PubSub from 'pubsub-js'
import Alert from "./components/Alert";
import PostRant from "./components/PostRant";


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoginPopupOpen: false,
            isLoggedIn: false,
            username: '',
            token: '',
            alertTitle: '',
            alertDescription: '',
            alertShow: false
        }
        this.showHideLogin = this.showHideLogin.bind(this)
        this.loginSuccessCallback = this.loginSuccessCallback.bind(this)
        this.signOut = this.signOut.bind(this)
        this.closeAlert = this.closeAlert.bind(this)

        this.mySubscriber = this.mySubscriber.bind(this)
        PubSub.subscribe(PUBSUB_TOPICS.ALERT, this.mySubscriber);
        PubSub.subscribe(PUBSUB_TOPICS.SHOW_LOGIN, this.mySubscriber);
    }

    mySubscriber(msg, data) {
        if (msg === PUBSUB_TOPICS.ALERT) {
            this.setState({
                alertTitle: data.title,
                alertDescription: data.description,
                alertShow: data.show
            })
        }else if (msg === PUBSUB_TOPICS.SHOW_LOGIN) {
            this.setState({
                isLoginPopupOpen: true
            })
        }
    };

    showHideLogin(show) {
        this.setState({
            isLoginPopupOpen: show
        })
    }

    closeAlert(){
        this.setState({
            alertTitle: '',
            alertDescription: '',
            alertShow: false
        })
    }
    loginSuccessCallback() {
        let auth = commonMethods.getAuthData()
        let isLoggedIn = false
        if (auth.token && auth.token !== '') {
            isLoggedIn = true
        }
        this.setState({
            isLoggedIn: isLoggedIn,
            username: auth.username,
            token: auth.token
        })
        PubSub.publish(PUBSUB_TOPICS.REFRESH_RANT_LIST, '')
        PubSub.publish(PUBSUB_TOPICS.REFRESH_RANT_DETAILS, '')


    }

    signOut() {
        commonMethods.clearLocalStorage()
        this.loginSuccessCallback()
        ajaxServices.post(API_URLS.USER_DEACTIVATE)
    }


    componentWillMount() {
        if (!this.state.isLoggedIn) {
            this.loginSuccessCallback()
        }
    }

    render() {
        return (
            <div>


                <div className="page">

                    {/*Start of Header */}
                    {/*======================= */}

                    <Header showHideLogin={this.showHideLogin} isLoggedIn={this.state.isLoggedIn}
                            username={this.state.username} signOut={this.signOut}/>

                    {/* ======================= */}
                    {/* End of Header */}

                    {/* Start of Main Section */}
                    {/* ======================= */}

                    <section className="main layout--center">
                        <div className="main__content layout--wrapped">

                            {/*/!* Start of Loader *!/*/}
                            {/*/!* ======================= *!/*/}

                            {/*<Loader isLoading={true}/>*/}

                            {/*/!* ======================= *!/*/}
                            {/*/!* End of loader *!/*/}


                            <Router>
                                <Switch>
                                    <Route exact path='/' render={() => {
                                        return (<RantListPage showHideLogin={this.showHideLogin}/>)
                                    }}/>
                                    <Route path='/rant/:id' component={RantDetails}/>
                                </Switch>
                            </Router>


                        </div>
                    </section>

                    {/* ======================= */}
                    {/* End of Main Section */}

                </div>

                {/* Start of login popup */}
                {/* ======================= */}

                <Login isOpen={this.state.isLoginPopupOpen} showHideLogin={this.showHideLogin}
                       loginSuccessCallback={this.loginSuccessCallback}/>

                {/* ======================= */}
                {/* End of login popup */}

                {/* Start of post popup */}
                {/* ======================= */}


                {/* ======================= */}
                {/* End of post popup */}

                {/* Start of comment popup */}
                {/* ======================= */}

                {/* <div class="popup popup--open">
               <div class="popup__header">
                   <div title="Close" class="close layout--center">
                       X
                   </div>
               </div>
               <div class="popup__body layout--center">
                   <div class="popup__body-inner">

                       <div class="form">
                           <div class="form__title">
                               NEW <span class="highlight">#</span>COMMENT
                           </div>
                           <div class="form__description">
                               Comment with 140 characters.
                           </div>
                           <form name="new-comment">
                               <div class="new-comment">
                                   <textarea maxlength="140"></textarea>

                                   <div class="loader">
                                       <div class="spinner"></div>
                                   </div>

                                   <div class="form__error">
                                       Some fields are missing !
                                   </div>

                                   <input type="submit" value="COMMENT"/>
                               </div>
                           </form>
                       </div>

                   </div>
               </div>
           </div> */}

                {/* ======================= */}
                {/* End of comment popup */}

                {/* Start of alert popup */}
                {/* ======================= */}

                <Alert title={this.state.alertTitle} description={this.state.alertDescription}
                       show={this.state.alertShow} closeAlert={this.closeAlert}/>

                {/* ======================= */}
                {/* End of alert popup */}

            </div>

        );
    }
}

export default App;
