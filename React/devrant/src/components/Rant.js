/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import * as ajaxServices from "../common/ajaxServices";
import {API_URLS, ERROR_MESSAGES, PUBSUB_TOPICS, API_ERROR_MESSAGES} from "../common/commonVarList";
import * as commonMethods from "../common/commonMethods";
import PubSub from 'pubsub-js'
import Alert from "./Alert";


class Rant extends Component {
    constructor(props){
        super(props)
        this.state = {
            rant : {
                "votes": "",
                "content": "",
                "id": "",
                "timestamp": 0,
                "author": "",
                "isMyPost": false,
                "displayTime": "",
                "myVote": 0,
                "commentCount": 0
            }
        }

    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            rant : nextProps.rant
        })
    }

    vote(action){
        let auth = commonMethods.getAuthData()
        if(auth.token && auth.token !== ''){
            if((action == 'up' && this.state.rant.myVote==1) || (action == 'down' && this.state.rant.myVote==-1)){
               action = 'reset'
            }
            ajaxServices.post(API_URLS.VOTE, {
                "postId": this.state.rant.id,
                "direction": action
            }).then((data)=>{
                // if(data.ok){
                //     this.setState({
                //         rant : data.post
                //     })
                // }
                if(!data.ok){
                    console.log(API_ERROR_MESSAGES[data.error])
                    PubSub.publish(PUBSUB_TOPICS.ALERT, {title:'Error', description:API_ERROR_MESSAGES[data.error], show:true})
                }
                PubSub.publish(PUBSUB_TOPICS.REFRESH_RANT_LIST, '')

            }).catch((err)=>{
                console.error(err)
            })
        }else{
            this.props.showHideLogin(true)
        }

    }


    render() {
        let rant = this.state.rant;

        return (
            <Link className="post" to={'/rant/'+this.state.rant.id} >
                <div className="post__inner">
                    <div className="score">
                        <div className={`score__up layout--center ${rant.myVote==1?'checked':''}`} onClick={(e)=>{e.preventDefault(); this.vote('up')}}>++</div>
                        <div className="score__board layout--center">{rant.votes}</div>
                        <div className={`score__down layout--center ${rant.myVote==-1?'checked':''}`} onClick={(e)=>{e.preventDefault(); this.vote('down')}}>--</div>
                    </div>
                    <div className="post__body">
                        {rant.content}
                    </div>
                </div>
                <div className="post__footer">
                    <div className="post__time">{rant.displayTime}</div>
                    <div className="post__comments">
                        <svg className="icon" viewBox="0 0 31 32">
                            <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781
        0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657
        8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0
        3.922-2.61 7.23-6.186 8.294z"></path>
                        </svg>
                        {rant.commentCount}
                    </div>
                </div>
            </Link>
        )
    }
}

export default Rant;