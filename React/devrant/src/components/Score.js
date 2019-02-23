/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import * as commonMethods from "../common/commonMethods";
import * as ajaxServices from "../common/ajaxServices";
import {API_ERROR_MESSAGES, API_URLS, PUBSUB_TOPICS} from "../common/commonVarList";
import PubSub from "pubsub-js";

class Score extends Component {

    constructor(props){
        super(props)
    }

    vote(action){
        let rant = this.props.rant;
        let auth = commonMethods.getAuthData()
        if(auth.token && auth.token !== ''){
            if((action == 'up' && rant.myVote==1) || (action == 'down' && rant.myVote==-1)){
                action = 'reset'
            }
            ajaxServices.post(API_URLS.VOTE, {
                "postId": rant.id,
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
            PubSub.publish(PUBSUB_TOPICS.SHOW_LOGIN, '')
            // this.props.showHideLogin(true)
        }

    }

    render() {
        let rant = this.props.rant
        return (
            <div className="score">
                <div className={`score__up layout--center ${rant.myVote==1?'checked':''}`} onClick={(e)=>{e.preventDefault(); this.vote('up')}}>++</div>
                <div className="score__board layout--center">{rant.votes}</div>
                <div className={`score__down layout--center ${rant.myVote==-1?'checked':''}`} onClick={(e)=>{e.preventDefault(); this.vote('down')}}>--</div>
            </div>
        )
    }
}

export default Score;