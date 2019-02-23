/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';

class Comment extends Component {

    constructor(props){
        super(props)
        this.state = {
            comment : {
                "comment": "",
                "id": "",
                "timestamp": 0,
                "author": "",
                "isMyComment": false,
                "displayTime": ""
            },
            rantId : ''
        }

    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            comment : nextProps.comment,
            rantId : nextProps.rantId
        })
    }

    render() {
        let comment = this.state.comment

        return (
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
                                {comment.author}
                            </div>
                        </div>
                        <div className="post__details">
                            {comment.comment}
                            <br/>
                        </div>
                    </div>
                </div>
                <div className="comment__footer">
                    {comment.isMyComment && <div className="comment__delete">DELETE</div>}
                    <div className="comment__time">{comment.displayTime}</div>
                </div>
            </section>
        )
    }
}

export default Comment;