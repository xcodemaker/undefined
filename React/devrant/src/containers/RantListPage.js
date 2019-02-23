/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import RantList from "../components/RantList";

class RantListPage extends Component {

    render() {
        return (
            <div className="post-list">
                <RantList/>
                <div className="rant__add" title="Add Rant">+</div>
            </div>
        )
    }
}

export default RantListPage;