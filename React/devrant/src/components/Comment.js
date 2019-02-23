/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';

class Comment extends Component {
    render() {
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
        )
    }
}

export default Comment;