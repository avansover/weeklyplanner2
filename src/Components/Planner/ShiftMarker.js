import React, { Component } from 'react'

export default class ShiftMarker extends Component {

    shiftStart = () => {

        var dropAreaLeft = document.getElementsByClassName('dropAreaDiv')[0].offsetLeft + 120

        if (this.props.axisX1 < dropAreaLeft) {

            return 0

        } else if (this.props.axisX1 - dropAreaLeft + this.shiftLength() > 720) {

            var start = document.getElementsByClassName('dropAreaDiv')[0].offsetWidth - this.shiftLength() - 2

            return start


        } else {

            start = this.props.axisX1 - dropAreaLeft

            return start

        }

    }

    shiftLength = () => {

        var shiftLength = 240

        return shiftLength

    }

    render() {


        return (
            <div id='markerDiv'
                style={
                    { 
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '18px',
                        width: `${this.shiftLength()}px`,
                        border: '0px solid blue',
                        left: `${this.shiftStart()}px`,
                        zIndex: '-1',
                        backgroundColor: '#ffaaaa'
                    }
                }
            >

            <div> {this.shiftStart()} </div>

                <div> {this.shiftStart()+this.shiftLength()} </div>

            </div>
        )
    }
}
