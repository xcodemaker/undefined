/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import RantList from "../components/RantList";
import Loader from "../components/Loader";
import * as ajaxServices from "../common/ajaxServices";
import {API_URLS, ERROR_MESSAGES} from "../common/commonVarList";
import * as commonMethods from "../common/commonMethods";

class RantListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rants : [],
            isLoading : true
        }
    }

    componentDidMount() {
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
                    <RantList rants={this.state.rants}/>
                    <div className="rant__add" title="Add Rant">+</div>
                </div>
            </div>
        )
    }
}

export default RantListPage;