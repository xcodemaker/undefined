/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import Rant from "./Rant";

class RantList extends Component {

    constructor(props){
        super(props)
        this.state = {
            rants : []
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            rants : nextProps.rants
        })
    }

    render() {
        let rants = this.state.rants.map((rant, i)=>{
            return <Rant rant={rant} key={'rant_'+rant.id}/>
        })
        return (
            rants
        )
    }
}

export default RantList;