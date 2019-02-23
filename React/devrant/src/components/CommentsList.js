/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import Rant from "./Rant";
import Comment from "./Comment";

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
        let comments = this.state.comments.map((comment, i)=>{
            return <Comment rantId={this.state.rantId} comment={comment} key={'comment_'+comment.id}/>
        })
        return (
            <section className="comments layout--center">

                <h1 className="comments__title"><span>#</span>Comments</h1>

                {comments}

            </section>
        )
    }
}

export default CommentsList;