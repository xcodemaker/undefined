/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import * as ajaxServices from "../common/ajaxServices";
import {API_URLS, ERROR_MESSAGES} from "../common/commonVarList";
import * as commonMethods from "../common/commonMethods";

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
            ajaxServices.post(API_URLS.VOTE, {
                "postId": this.state.rant.id,
                "direction": action
            }).then((data)=>{
                console.log(data)
                if(data.ok){
                    this.setState({
                        rant : data.post
                    })
                }
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
            <article className="post">
                <div className="post__inner">
                    <div className="score">
                        <div className={`score__up layout--center ${rant.myVote==1?'checked':''}`} onClick={()=>{this.vote('up')}}>++</div>
                        <div className="score__board layout--center">{rant.votes}</div>
                        <div className={`score__down layout--center ${rant.myVote==-1?'checked':''}`} onClick={()=>{this.vote('down')}}>--</div>
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
            </article>
        )
    }
}

export default Rant;