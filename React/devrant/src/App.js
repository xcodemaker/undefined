/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    constructor(props){
        super(props)
        this.state = {
            isLoginPopupOpen : false,
            isLoggedIn : false,
            username : '',
            token : '',
            alertTitle:'',
            alertDescription:'',
            alertShow:false
        }
        this.showHideLogin = this.showHideLogin.bind(this)
        this.loginSuccessCallback = this.loginSuccessCallback.bind(this)
        this.signOut = this.signOut.bind(this)
        this.mySubscriber = this.mySubscriber.bind(this)
        let token = PubSub.subscribe(PUBSUB_TOPICS.ALERT, this.mySubscriber);


    }

    mySubscriber(msg, data) {
        if(msg === PUBSUB_TOPICS.ALERT){
            console.log("lol")
            this.setState({
                alertTitle:data.title,
                alertDescription:data.description,
                alertShow:data.show
            })
        }
    };

    showHideLogin(show){
        this.setState({
            isLoginPopupOpen : show
        })
    }

    loginSuccessCallback(){
        let auth = commonMethods.getAuthData()
        let isLoggedIn = false
        if(auth.token && auth.token !== ''){
            isLoggedIn = true
        }
        this.setState({
            isLoggedIn: isLoggedIn,
            username:auth.username,
            token:auth.token
        })
        PubSub.publish(PUBSUB_TOPICS.REFRESH_RANT_LIST, '')

    }

    signOut(){
        commonMethods.clearLocalStorage()
        this.loginSuccessCallback()
        ajaxServices.post(API_URLS.USER_DEACTIVATE)
    }


    componentWillMount(){
        if(!this.state.isLoggedIn){
            this.loginSuccessCallback()
        }
    }

    render() {
        return (
           <div>


               <div className="page">

                    {/*Start of Header */}
                    {/*======================= */}

                   <Header showHideLogin={this.showHideLogin} isLoggedIn={this.state.isLoggedIn} username={this.state.username} signOut={this.signOut}/>

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
                               <Route exact path='/' render={()=>{return(<RantListPage showHideLogin={this.showHideLogin}/>)}}/>
                               <Route path='/rant/:rantid' component={RantDetails}/>
                           </Switch>
                   </Router>




                           {/*/!* Start of Rant Details Page*!/*/}
                           {/*/!* ======================= *!/*/}

                           {/*/!* <div class="rant-details layout--center">*/}

                           {/*<section class="post-hero">*/}
                               {/*<div class="post-hero__inner">*/}
                                   {/*<div class="score">*/}
                                       {/*<div class="score__up layout--center">++</div>*/}
                                       {/*<div class="score__board layout--center">100</div>*/}
                                       {/*<div class="score__down layout--center">--</div>*/}
                                   {/*</div>*/}
                                   {/*<div class="post-hero__body">*/}
                                       {/*<div class="profile">*/}
                                           {/*<div class="profile__picture">*/}
                                               {/*<svg height="36" width="36">*/}
                                                   {/*<circle cx="18" cy="18" r="18" fill="#5c5f6f" />*/}
                                               {/*</svg>*/}
                                           {/*</div>*/}
                                           {/*<div class="profile__name">*/}
                                               {/*Elon*/}
                                           {/*</div>*/}
                                       {/*</div>*/}
                                       {/*<div class="post__details">*/}
                                           {/*Lorem ipsum*/}
                                       {/*</div>*/}
                                   {/*</div>*/}
                               {/*</div>*/}
                               {/*<div class="post-hero__footer">*/}
                                   {/*<div class="post-hero__delete">DELETE</div>*/}
                                   {/*<div class="post-hero__time">2m ago</div>*/}
                               {/*</div>*/}
                           {/*</section>*/}

                           {/*<section class="comments layout--center">*/}

                               {/*<h1 class="comments__title"><span>#</span>Comments</h1>*/}

                               {/*<section class="comment">*/}
                                   {/*<div class="comment__inner">*/}
                                       {/*<div class="comment__body">*/}
                                           {/*<div class="profile">*/}
                                               {/*<div class="profile__picture">*/}
                                                   {/*<svg height="36" width="36">*/}
                                                       {/*<circle cx="18" cy="18" r="18" fill="#5c5f6f" />*/}
                                                   {/*</svg>*/}
                                               {/*</div>*/}
                                               {/*<div class="profile__name">*/}
                                                   {/*Elon*/}
                                               {/*</div>*/}
                                           {/*</div>*/}
                                           {/*<div class="post__details">*/}
                                               {/*Lorem ipsum*/}
                                               {/*<br />*/}
                                           {/*</div>*/}
                                       {/*</div>*/}
                                   {/*</div>*/}
                                   {/*<div class="comment__footer">*/}
                                       {/*<div class="comment__delete">DELETE</div>*/}
                                       {/*<div class="comment__time">2m ago</div>*/}
                                   {/*</div>*/}
                               {/*</section>*/}

                           {/*</section>*/}

                           {/*<div class="rant__comment layout--center" title="Comment">*/}
                               {/*<svg class="icon" viewBox="0 0 31 32" width="100%" height="100%">*/}
                                   {/*<path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 */}
                            {/*0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 */}
                            {/*8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 */}
                            {/*3.922-2.61 7.23-6.186 8.294z"></path>*/}
                               {/*</svg>*/}
                           {/*</div>*/}

                       {/*</div> *!/*/}

                           {/*/!* ======================= *!/*/}
                           {/*/!* End of Rant Details Page*!/*/}

                       </div>
                   </section>

                   {/* ======================= */}
                   {/* End of Main Section */}

               </div>

               {/* Start of login popup */}
               {/* ======================= */}

               <Login isOpen={this.state.isLoginPopupOpen} showHideLogin={this.showHideLogin} loginSuccessCallback={this.loginSuccessCallback}/>

               {/* ======================= */}
               {/* End of login popup */}

               {/* Start of post popup */}
               {/* ======================= */}

               <PostRant/>

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

               <Alert title={this.state.alertTitle} description={this.state.alertDescription} show={this.state.alertShow}/>

               {/* ======================= */}
               {/* End of alert popup */}

           </div>

        );
    }
}

export default App;
