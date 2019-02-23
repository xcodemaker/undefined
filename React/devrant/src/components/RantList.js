/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';

class RantList extends Component {

    render() {
        return (

            <div className="post-list">

                <article className="post">
                    <div className="post__inner">
                        <div className="score">
                            <div className="score__up layout--center">++</div>
                            <div className="score__board layout--center">100</div>
                            <div className="score__down layout--center">--</div>
                        </div>
                        <div className="post__body">
                            Hello World...
                        </div>
                    </div>
                    <div className="post__footer">
                        <div className="post__time">2m ago</div>
                        <div className="post__comments">
                            <svg className="icon" viewBox="0 0 31 32">
                                <path d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781
        0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657
        8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0
        3.922-2.61 7.23-6.186 8.294z"></path>
                            </svg>
                            23
                        </div>
                    </div>
                </article>
                {/**/}
                <div className="rant__add" title="Add Rant">+</div>
                {/**/}
            </div>
        )
    }
}

export default RantList;