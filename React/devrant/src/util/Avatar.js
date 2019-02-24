/**
 * Author : Nadun Chamikara
 * Date : 2019/02/24
 */

import React, {Component} from 'react';
import md5 from 'md5'


class Avatar extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.drawCanvas();
    }

    drawCanvas = ()=> {
        let username = this.props.username;
        let size = this.props.size;

        let hash = md5(username)
        let radius = size / 12;
        let count = 1;
        let canvas = this.refs.canvas;
        for (let i = 1; i <= 6; i++) {
            for (let j = 1; j <= 6; j++) {
                let ctx = canvas.getContext('2d');

                let x = radius * ((2 * i) - 1)
                let y = radius * ((2 * j) - 1)

                ctx.beginPath();
                ctx.arc(x, y, radius, 0, 2 * Math.PI);

                if (!(count == 1 || count == 6 || count == 31 || count == 36)) {
                    if (hash[count] > 2) {
                        ctx.fillStyle = "#aaa";
                        ctx.fill();
                        ctx.lineWidth = 0.3;
                        ctx.stroke();
                    }
                }
                count++;
            }
        }
        this.forceUpdate();

    }

    render() {
        return (
            <canvas ref="canvas" width={this.props.size} height={this.props.size} style={{borderRadius: '50%', backgroundColor: '#fff'}}/>
        );
    }


}

export default Avatar