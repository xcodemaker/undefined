/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Header extends Component{

    constructor(props){
        super(props)
        this.state = {}
        this.showLogin = this.showLogin.bind(this)
        this.signOut = this.signOut.bind(this)
    }


    showLogin(){
        this.props.showHideLogin(true)
    }

    signOut(){
        this.props.signOut()
    }



    render(){
        return (
            <section className="header layout--center">
                <div className="header__content layout--wrapped">
                    <div className="brand">
                        <a href="/">
                            <div className="brand__name"><span>#</span>DEVRANT</div>
                        </a>
                    </div>

                    {/*User Profile*/}
                    { this.props.isLoggedIn &&
                    <div className="profile layout--center">
                        <div className="profile__picture">
                            <svg height="36" width="36">
                                <circle cx="18" cy="18" r="18" fill="#5c5f6f"></circle>
                            </svg>
                        </div>
                        <div className="profile__name">{this.props.username}</div>
                    </div>
                    }

                    <div className="join">
                        { this.props.isLoggedIn || <span onClick={this.showLogin}>Join</span>}
                        { this.props.isLoggedIn && <span onClick={this.signOut}>Sign Out</span>}
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;