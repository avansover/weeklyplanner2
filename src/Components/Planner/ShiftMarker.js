import React, { Component } from 'react'

export default class ShiftMarker extends Component {

    markerStart = () => {

        var dropAreaLeft = document.getElementsByClassName('dropAreaDiv')[0].offsetLeft + 120

        if (this.props.axisX1 < dropAreaLeft) {

            return 0

        } else if (this.props.axisX1 - dropAreaLeft + this.markerLength() > 720) {

            var start = document.getElementsByClassName('dropAreaDiv')[0].offsetWidth - this.markerLength() - 2

            return start

        } else {

            var realStart = (this.props.axisX1 - dropAreaLeft)

            start = (Math.floor((realStart + 1) / 5)) * 5

            return start

        }

    }

    markerLength = () => {

        var shiftLength = 240

        return shiftLength

    }

    markerColor = () => {

        if (isNaN(this.markerStart())) {

            //console.log('Nan');

            //there is a split second when the position of the marker displayed as NaN
            //for that moment I'll use style that can't be seen
            //later on I should check why I recive the NaN value

            return '#ffffff'


        } else {

            return '#ffaaaa'

        }

    }

    markerDataColor = () => {

        if (isNaN(this.markerStart())) {

            //console.log('Nan');

            //there is a split second when the position of the marker displayed as NaN
            //for that moment I'll use style that can't be seen
            //later on I should check why I recive the NaN value

            return '#ffffff'


        } else {

            return '#0000ff'

        }

    }

    addShift = () => {

        console.log('addShift');


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
                        width: `${this.markerLength()}px`,
                        border: '0px solid blue',
                        left: `${this.markerStart()}px`,
                        zIndex: '-1',
                        backgroundColor: `${this.markerColor()}`
                    }
                }
            >

                <div
                    style={{ color: `${this.markerDataColor()}` }}
                > {this.markerStart() + 1}

                </div>

                <div
                    style={{ color: `${this.markerDataColor()}` }}
                > {this.markerStart() + this.markerLength()} </div>

            </div>
        )
    }
}
