/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import Loader from "./Loader";
import PubSub from "pubsub-js";
import {API_URLS, PUBSUB_TOPICS} from "../common/commonVarList";
import * as ajaxServices from "../common/ajaxServices";
import Score from "./Score";

class RantDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
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
        // this.rantId = "JBkLYn7FunhZVpomLaADrs";
        this.loadRantDetails = this.loadRantDetails.bind(this)
    }

    loadRantDetails() {
        ajaxServices.get(API_URLS.RANT_DETAILS, {'postId':this.rantId}).then((data) => {
            console.log(data)
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

    componentDidMount() {
        this.loadRantDetails()
    }

    render() {
        let rant = this.state.rant;
        return (
            <div>
                <Loader isLoading={this.state.isLoading}/>

                <div className="rant-details layout--center">

                <section className="post-hero">
                    <div className="post-hero__inner">
                        <Score rant={rant} showHideLogin={this.props.showHideLogin}/>

                        <div className="post-hero__body">
                            <div className="profile">
                                <div className="profile__picture">
                                    <svg height="36" width="36">
                                        <circle cx="18" cy="18" r="18" fill="#5c5f6f"/>
                                    </svg>
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
                        <div className="post-hero__delete">DELETE</div>
                        <div className="post-hero__time">{rant.displayTime}</div>
                    </div>
                </section>

                <section className="comments layout--center">

                    <h1 className="comments__title"><span>#</span>Comments</h1>

                    <section className="comment">
                        <div className="comment__inner">
                            <div className="comment__body">
                                <div className="profile">
                                    <div className="profile__picture">
                                        <svg height="36" width="36">
                                            <circle cx="18" cy="18" r="18" fill="#5c5f6f"/>
                                        </svg>
                                    </div>
                                    <div className="profile__name">
                                        Elon
                                    </div>
                                </div>
                                <div className="post__details">
                                    Lorem ipsum
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="comment__footer">
                            <div className="comment__delete">DELETE</div>
                            <div className="comment__time">2m ago</div>
                        </div>
                    </section>

                </section>

                <div className="rant__comment layout--center" title="Comment">
                    <svg className="icon" viewBox="0 0 31 32" width="100%" height="100%">
                        <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781
        0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
        8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
        3.922-2.61 7.23-6.186 8.294z"></path>
                    </svg>
                </div>

            </div>
            </div>
        )
    }
}

export default RantDetails;