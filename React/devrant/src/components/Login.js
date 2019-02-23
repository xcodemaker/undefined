/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import Loader from "./Spinner";

class Login extends Component {

    constructor(props){
        super(props)
        this.state = {}
        this.hideLogin = this.hideLogin.bind(this)
    }

    hideLogin(){
        this.props.showHideLogin(false)
    }
    
    render() {
        return (
            <div className={`popup ${this.props.isOpen?'popup--open':''}`}>
               <div className="popup__header">
                   <div title="Close" className="close layout--center" onClick={this.hideLogin}>
                       X
                   </div>
               </div>
               <div className="popup__body layout--center">
                   <div className="popup__body-inner">

                       <div className="form">
                           <div className="form__title">
                               JOIN <span className="highlight">#</span>DEVRANT
                           </div>
                           <div className="form__description">
                               Vote and comment on others' rants. Post your own.
                           </div>
                           <form name="login">
                               <div className="login">

                                   <input type="text" placeholder="USERNAME" />
                                   <input type="password" placeholder="PASSWORD" />

                                   <Loader/>

                                   <div className="form__error">
                                       Some fields are missing !
                                   </div>

                                   <input type="submit" value="LET ME IN" />
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default Login;