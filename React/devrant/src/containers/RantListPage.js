/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';
import RantList from "../components/RantList";
import Loader from "../components/Loader";

class RantListPage extends Component {

    render() {
        return (
            <div>
                <Loader isLoading={true}/>

                <div className="post-list">
                    <RantList/>
                    <div className="rant__add" title="Add Rant">+</div>
                </div>
            </div>
        )
    }
}

export default RantListPage;