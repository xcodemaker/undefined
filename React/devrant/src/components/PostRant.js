/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import Loader from "./Loader";
import {ERROR_MESSAGES, API_URLS} from '../common/commonVarList';
import * as ajaxServices from '../common/ajaxServices';
import * as commonMethods from '../common/commonMethods';

class PostRant extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }
        this.hideNewRandPopup = this.hideNewRandPopup.bind(this)

    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.isOpenNewRant) {
            this.refs.rant_body.focus()
        }
    }

    hideNewRandPopup(){
        this.props.showNewRandPopup(false)
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
                           <form name="new-rant">
                               <div className="new-rant">
                                   <textarea ref="rant_body" maxlength="140"></textarea>

                                   <Loader isLoading={this.state.isLoading}/>

                                   <div className="form__error">
                                       Some fields are missing !
                                   </div>

                                   <input type="submit" value="POST"/>
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