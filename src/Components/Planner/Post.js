import React, { Component } from 'react'

export default class Post extends Component {

    allowDrop = (ev) => {

        ev.preventDefault();
        //console.log(ev.target);
        //console.log(ev.pageX);


    }

    drop = (ev) => {

        ev.preventDefault();

        console.log(ev.target);

        let src = ev.dataTransfer.getData("src");

        console.log('src ' + src);

        console.log('day ' + this.props.dayInd2);

        console.log('post ' + this.props.postInd1);

        console.log('x ' + ev.pageX);




    }


    render() {
        return (
            <div>

                <div className='postBodyDiv'>

                    <div>{this.props.shiftSet3[this.props.dayInd2].shifts[this.props.postInd1].name}</div>

                    <div className='dropAreaDiv'
                        onDragOver={this.allowDrop}
                        onDrop={this.drop}
                    ></div>

                </div>

            </div>
        )
    }
}
