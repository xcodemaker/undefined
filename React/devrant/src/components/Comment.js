/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import * as ajaxServices from "../common/ajaxServices";
import {API_ERROR_MESSAGES, API_URLS, ERROR_MESSAGES, PUBSUB_TOPICS} from "../common/commonVarList";
import PubSub from "pubsub-js";
import Avatar from "../util/Avatar";

class Comment extends Component {

    constructor(props){
        super(props)
        this.state = {
            comment : {
                "comment": "",
                "id": "",
                "timestamp": 0,
                "author": "",
                "isMyComment": false,
                "displayTime": ""
            },
            rantId : ''
        }

        this.deleteComment = this.deleteComment.bind(this)

    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            comment : nextProps.comment,
            rantId : nextProps.rantId
        })
    }

    deleteComment(){
        let comment = this.state.comment;
        ajaxServices.deleteMethod(API_URLS.DELETE_COMMENT, {
            "postId": this.state.rantId,
            "commentId": comment.id
        }).then((data)=>{
            if(!data.ok){
                this.setState({
                    hasErr: true,
                    errMsg: ERROR_MESSAGES.DELETE_COMMENT_RESPONSE_ERROR
                })
                PubSub.publish(PUBSUB_TOPICS.ALERT, {title:'Error', description:API_ERROR_MESSAGES[data.error], show:true})
            }else{
                PubSub.publish(PUBSUB_TOPICS.REFRESH_RANT_DETAILS, '')
            }
        }).catch((err)=>{
            console.error(err)
        })
    }

    render() {
        let comment = this.state.comment

        return (
            <section className="comment">
                <div className="comment__inner">
                    <div className="comment__body">
                        <div className="profile">
                            <div className="profile__picture">
                                {/*<svg height="36" width="36">*/}
                                    {/*<circle cx="18" cy="18" r="18" fill="#5c5f6f"/>*/}
                                {/*</svg>*/}
                                <Avatar size={36} username={comment.author}/>

                            </div>
                            <div className="profile__name">
                                {comment.author}
                            </div>
                        </div>
                        <div className="post__details">
                            {comment.comment}
                            <br/>
                        </div>
                    </div>
                </div>
                <div className="comment__footer">
                    {comment.isMyComment && <div className="comment__delete"  onClick={this.deleteComment}>DELETE</div>}
                    <div className="comment__time">{comment.displayTime}</div>
                </div>
            </section>
        )
    }
}

export default Comment;