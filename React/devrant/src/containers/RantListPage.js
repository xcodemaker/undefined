/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import RantList from "../components/RantList";
import Loader from "../components/Loader";
import * as ajaxServices from "../common/ajaxServices";
import {API_URLS, ERROR_MESSAGES, PUBSUB_TOPICS} from "../common/commonVarList";
import * as commonMethods from "../common/commonMethods";
import PubSub from "pubsub-js";

class RantListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rants : [],
            isLoading : true
        }

        this.loadRantList = this.loadRantList.bind(this)
        this.mySubscriber = this.mySubscriber.bind(this)

        let token = PubSub.subscribe(PUBSUB_TOPICS.REFRESH_RANT_LIST, this.mySubscriber);
    }

    componentDidMount() {
        this.loadRantList()
    }

     mySubscriber(msg, data) {
        if(msg === PUBSUB_TOPICS.REFRESH_RANT_LIST){
            this.loadRantList()
        }
    };


    loadRantList(){
        ajaxServices.get(API_URLS.RANT_LIST).then((data)=>{
            if(data.ok){
                this.setState({
                    rants: data.posts
                })
            }
        }).catch((err)=>{
            console.error(err)
        }).finally(()=>{
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        return (
            <div>
                <Loader isLoading={this.state.isLoading}/>

                <div className="post-list">
                    <RantList rants={this.state.rants} showHideLogin={this.props.showHideLogin}/>
                    <div className="rant__add" title="Add Rant">+</div>
                </div>
            </div>
        )
    }
}

export default RantListPage;