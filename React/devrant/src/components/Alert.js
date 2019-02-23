/**
 * Author : Nadun Chamikara
 * Date : 2019/02/23
 */

import React, {Component} from 'react';

class Alert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            show: false
        }
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            description: this.props.description,
            show: this.props.show
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            title: nextProps.title,
            description: nextProps.description,
            show: nextProps.show
        })
    }

    render() {
        return (
            <div>
                {this.state.show &&
                <div className="popup popup--open">
                    <div className="popup__header">
                        <div title="Close" className="close layout--center">
                            X
                        </div>
                    </div>
                    <div className="popup__body layout--center">
                        <div className="popup__body-inner">

                            <div className="form">
                                <div className="form__title">
                                    <span className="highlight">#</span> {this.state.title}

                                </div>
                                <div className="form__description">
                                    {this.state.description}
                                </div>
                                <form name="alert">
                                    <div className="alert">
                                        <input type="submit" value="OK"/>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Alert;