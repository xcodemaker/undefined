/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';

class Loader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    render() {
        return (
            <div className="loader">
                {this.state.isLoading && <div className="spinner"></div>}
            </div>
        )
    }
}

export default Loader;