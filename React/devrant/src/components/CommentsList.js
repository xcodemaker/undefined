/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import Rant from "./Rant";

class CommentsList extends Component {

    constructor(props){
        super(props)
        this.state = {
            rantId : '',
            comments : []
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            rantId: nextProps.rantId,
            comments : nextProps.comments
        })
    }

    render() {
        // let rants = this.state.rants.map((rant, i)=>{
        //     return <Rant rant={rant} key={'rant_'+rant.id} showHideLogin={this.props.showHideLogin}/>
        // })
        return (
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
        )
    }
}

export default CommentsList;