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

class PostComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rantId:'',
            isLoading: false,
            hasErr :false,
            errMsg : ''
        }
        this.hideNewCommentPopup = this.hideNewCommentPopup.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.hideError = this.hideError.bind(this)

    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.isOpenNewComment) {
            this.refs.comment_body.focus()
            this.refs.comment_body.val = ''
            this.setState({
                hasErr: false,
                errMsg: '',
                rantId : this.props.rantId
            })
        }
    }

    hideNewCommentPopup(){
        this.refs.comment_body.value = ''
        this.props.showNewCommentPopup(false)
    }

    hideError() {
        this.setState({
            hasErr: false,
            errMsg: ''
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let commentField = this.refs.comment_body
        let commentContent = commentField.value

        if (commentContent === '') {
            this.setState({
                hasErr: true,
                errMsg: ERROR_MESSAGES.ADD_COMMENT_RANT_BODY_EMPTY
            })
            commentField.focus()
        }else{
            this.hideError()
            this.setState({
                isLoading: true
            })

            ajaxServices.post(API_URLS.ADD_COMMENT, {
                "postId": this.state.rantId,
                "comment": commentContent
            }).then((data)=>{
                if(!data.ok){
                    this.setState({
                        hasErr: true,
                        errMsg: ERROR_MESSAGES.ADD_COMMENT_RESPONSE_ERROR
                    })
                }else{
                    PubSub.publish(PUBSUB_TOPICS.REFRESH_RANT_DETAILS, '')
                    this.hideNewCommentPopup()
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
            <div className={`popup ${this.props.isOpenNewComment ? 'popup--open' : ''}`}>
               <div className="popup__header">
                   <div title="Close" className="close layout--center" onClick={this.hideNewCommentPopup}>
                       X
                   </div>
               </div>
               <div className="popup__body layout--center">
                   <div className="popup__body-inner">

                       <div className="form">
                           <div className="form__title">
                               NEW <span className="highlight">#</span>COMMENT
                           </div>
                           <div className="form__description">
                               Comment with 140 characters.
                           </div>
                           <form name="new-comment" onSubmit={this.handleSubmit} onKeyPress={(e) => {
                               if (e.key === "Enter") this.handleSubmit(e)
                           }}>
                               <div className="new-comment">
                                   <textarea ref="comment_body" maxLength="140" onBlur={this.hideError} onKeyUp={this.hideError} tabIndex="1" className={this.state.isLoading ? 'hidden':''} tabIndex={1}></textarea>

                                   <Loader isLoading={this.state.isLoading}/>

                                   {this.state.hasErr &&
                                   <div className="form__error">
                                       {this.state.errMsg}
                                   </div>
                                   }

                                   <input type="submit" value="COMMENT" disabled={this.state.isLoading} tabIndex={2}/>
                               </div>
                           </form>
                       </div>

                   </div>
               </div>
           </div>
        )
    }
}

export default PostComment;