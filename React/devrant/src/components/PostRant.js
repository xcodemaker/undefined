/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import Loader from "./Loader";
import {ERROR_MESSAGES, API_URLS, PUBSUB_TOPICS, API_ERROR_MESSAGES} from '../common/commonVarList';
import * as ajaxServices from '../common/ajaxServices';
import * as commonMethods from '../common/commonMethods';
import PubSub from "pubsub-js";

class PostRant extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            hasErr :false,
            errMsg : ''
        }
        this.hideNewRandPopup = this.hideNewRandPopup.bind(this)
        this.handSubmit = this.handSubmit.bind(this)
        this.hideError = this.hideError.bind(this)

    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.isOpenNewRant) {
            this.refs.rant_body.focus()
            this.refs.rant_body.val = ''
            this.setState({
                hasErr: false,
                errMsg: ''
            })
        }
    }

    hideNewRandPopup(){
        this.props.showNewRandPopup(false)
    }

    hideError() {
        this.setState({
            hasErr: false,
            errMsg: ''
        })
    }

    handSubmit(e) {
        e.preventDefault();
        let rantField = this.refs.rant_body
        let rantContent = rantField.value

        if (rantContent === '') {
            this.setState({
                hasErr: true,
                errMsg: ERROR_MESSAGES.ADD_RANT_RANT_BODY_EMPTY
            })
            rantField.focus()
        }else{
            this.hideError()
            this.setState({
                isLoading: true
            })
            ajaxServices.post(API_URLS.ADD_RANT, {
                "content": rantContent
            }).then((data)=>{
                console.log(data)
                if(!data.ok){
                    this.setState({
                        hasErr: true,
                        errMsg: ERROR_MESSAGES.ADD_RANT_RESPONSE_ERROR
                    })
                }else{
                    PubSub.publish(PUBSUB_TOPICS.REFRESH_RANT_LIST, '')
                    this.hideNewRandPopup()
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
            <div className={`popup ${this.props.isOpenNewRant ? 'popup--open' : ''}`}>
               <div className="popup__header">
                   <div title="Close" className="close layout--center" onClick={this.hideNewRandPopup}>
                       X
                   </div>
               </div>
               <div className="popup__body layout--center">
                   <div className="popup__body-inner">

                       <div className="form">
                           <div className="form__title">
                               NEW <span className="highlight">#</span>RANT
                           </div>
                           <div className="form__description">
                               Express yourself with 140 characters.
                           </div>
                           <form name="new-rant" onSubmit={this.handSubmit} onKeyPress={(e) => {
                               if (e.key === "Enter") this.handSubmit(e)
                           }}>
                               <div className="new-rant">
                                   <textarea ref="rant_body" maxLength="140" onBlur={this.hideError} onKeyUp={this.hideError} tabIndex="1" className={this.state.isLoading ? 'hidden':''} tabIndex={1}></textarea>

                                   <Loader isLoading={this.state.isLoading}/>

                                   {this.state.hasErr &&
                                   <div className="form__error">
                                       {this.state.errMsg}
                                   </div>
                                   }

                                   <input type="submit" value="POST" disabled={this.state.isLoading} tabIndex={2}/>
                               </div>
                           </form>
                       </div>

                   </div>
               </div>
           </div>
        )
    }
}

export default PostRant;