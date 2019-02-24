/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import Loader from "./Loader";
import PubSub from "pubsub-js";
import {API_ERROR_MESSAGES, API_URLS, ERROR_MESSAGES, PUBSUB_TOPICS} from "../common/commonVarList";
import * as ajaxServices from "../common/ajaxServices";
import Score from "./Score";
import CommentsList from "./CommentsList";
import * as commonMethods from "../common/commonMethods";
import PostRant from "./PostRant";
import PostComment from "./PostComment";
import Avatar from "../util/Avatar";

class RantDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isDeleteSuccess : false,
            isOpenNewComment : false,
            rant:{
                author: "",
                comments: [],
                content: "",
                displayTime: "",
                id: "",
                isMyPost: false,
                myVote: 0,
                timestamp: 0,
                votes: 0
            }
        }
        this.rantId = this.props.match.params.id;
        this.loadRantDetails = this.loadRantDetails.bind(this)
        this.deleteRant = this.deleteRant.bind(this)
        this.showNewCommentPopup = this.showNewCommentPopup.bind(this)

        this.mySubscriber = this.mySubscriber.bind(this)
        let token = PubSub.subscribe(PUBSUB_TOPICS.REFRESH_RANT_DETAILS, this.mySubscriber);
    }

    mySubscriber(msg, data) {
        if (msg === PUBSUB_TOPICS.REFRESH_RANT_DETAILS) {
            this.loadRantDetails()
        }
    };

    loadRantDetails() {
        ajaxServices.get(API_URLS.RANT_DETAILS, {'postId':this.rantId}).then((data) => {
            if (data.ok) {
                this.setState({
                    rant: data.post
                })
            }
        }).catch((err) => {
            console.error(err)
        }).finally(() => {
            this.setState({
                isLoading: false
            })
        })
    }

    deleteRant(){
        let rant = this.state.rant;
        ajaxServices.deleteMethod(API_URLS.DELETE_RANT, {
            "postId": rant.id
        }).then((data)=>{
            if(!data.ok){
                this.setState({
                    hasErr: true,
                    errMsg: ERROR_MESSAGES.DELETE_RANT_RESPONSE_ERROR
                })
                PubSub.publish(PUBSUB_TOPICS.ALERT, {title:'Error', description:API_ERROR_MESSAGES[data.error], show:true})
            }else{
                this.setState({
                    isDeleteSuccess:true
                })
                PubSub.publish(PUBSUB_TOPICS.REFRESH_RANT_LIST, '')
            }
        }).catch((err)=>{
            console.error(err)
        }).finally(()=>{
            this.setState({
                isLoading: false
            })
        })
    }


    showNewCommentPopup(show) {
        if (show) {
            let auth = commonMethods.getAuthData()
            if (auth.token && auth.token !== '') {
                this.setState({
                    isOpenNewComment: show
                })
            } else {
                PubSub.publish(PUBSUB_TOPICS.SHOW_LOGIN, '')
            }
        } else {
            this.setState({
                isOpenNewComment: show
            })
        }
    }

    componentDidMount() {
        this.loadRantDetails()
    }

    render() {
        let rant = this.state.rant;
        return (
            <div>
                {this.state.isDeleteSuccess && <Redirect to='/'/>}
                <Loader isLoading={this.state.isLoading}/>

                <div className="rant-details layout--center">

                <section className="post-hero">
                    <div className="post-hero__inner">
                        <Score rant={rant} showHideLogin={this.props.showHideLogin}/>

                        <div className="post-hero__body">
                            <div className="profile">
                                <div className="profile__picture">
                                    {/*<svg height="36" width="36">*/}
                                        {/*<circle cx="18" cy="18" r="18" fill="#5c5f6f"/>*/}
                                    {/*</svg>*/}
                                    <Avatar size={36} username={rant.author}/>

                                </div>
                                <div className="profile__name">
                                    {rant.author}
                                </div>
                            </div>
                            <div className="post__details">
                                {rant.content}
                            </div>
                        </div>
                    </div>
                    <div className="post-hero__footer">
                        {rant.isMyPost && <div className="post-hero__delete" onClick={this.deleteRant}>DELETE</div>}
                        <div className="post-hero__time">{rant.displayTime}</div>
                    </div>
                </section>

                <CommentsList  rantId={rant.id} comments={rant.comments}/>

                <div className="rant__comment layout--center" title="Comment" onClick={() => {
                    this.showNewCommentPopup(true)
                }}>
                    <svg className="icon" viewBox="0 0 31 32" width="100%" height="100%">
                        <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781
        0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
        8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
        3.922-2.61 7.23-6.186 8.294z"></path>
                    </svg>
                </div>

                    <PostComment isOpenNewComment={this.state.isOpenNewComment} showNewCommentPopup={this.showNewCommentPopup} rantId={rant.id}/>
            </div>
            </div>
        )
    }
}

export default RantDetails;