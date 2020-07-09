import React, { Component } from 'react'
//import ShiftMarker from './ShiftMarker';

export default class Post extends Component {

    allowDrop = (ev) => {

        ev.preventDefault();
        //console.log(ev.target);
        console.log(ev.pageX);

        //return <ShiftMarker />

        //var shiftDiv = <ShiftMarker />
        var markerDivExist = document.getElementById('markerDiv')

        if (markerDivExist === null) {

            var markerDiv = document.createElement('div')
            markerDiv.id = 'markerDiv'
            markerDiv.style.height = '10px'
            markerDiv.style.width = '10px'
            markerDiv.style.border = '1px solid red'
            markerDiv.style.position = 'relative'
            markerDiv.style.left = `${ev.pageX-200}px`
            markerDiv.style.zIndex = '-1'

            //console.log(markerDiv);

            document.getElementById(`dropDay${this.props.dayInd2}post${this.props.postInd1}`).appendChild(markerDiv)

        }



    }



    drop = (ev) => {

        ev.preventDefault();

        //console.log(ev.target);

        //let src = ev.dataTransfer.getData("src");

        // console.log('src ' + src);

        // console.log('day ' + this.props.dayInd2);

        // console.log('post ' + this.props.postInd1);

        // console.log('x ' + ev.pageX);


    }

    render() {
        return (
            <div>

                <div className='postBodyDiv'>

                    <div>{this.props.shiftSet3[this.props.dayInd2].shifts[this.props.postInd1].name}</div>

                    <div className='dropAreaDiv'
                        id={`dropDay${this.props.dayInd2}post${this.props.postInd1}`}
                        onDragOver={this.allowDrop}
                        onDrop={this.drop}
                    >


                    </div>

                </div>

            </div>
        )
    }
}
