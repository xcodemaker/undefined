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
        this.state = {}

    }

    render() {
        return (
            <div className="popup popup--open">
               <div className="popup__header">
                   <div title="Close" className="close layout--center">
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
                                   <textarea maxlength="140"></textarea>

                                   <div className="loader">
                                       <div className="spinner"></div>
                                   </div>

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