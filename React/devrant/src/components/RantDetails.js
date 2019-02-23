/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';

class RantDetails extends Component {

    render() {
        let rantId = this.props.match.params.rantid;
        return (
            <h1>Rant Details {rantId}</h1>
        )
    }
}

export default RantDetails;