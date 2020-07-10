import React, { Component } from 'react'

export default class ShiftMarker extends Component {

    shiftStart = () => {

        var dropAreaLeft = document.getElementsByClassName('dropAreaDiv')[0].offsetLeft + 120

        if (this.props.axisX1 < dropAreaLeft) {

            return 0

        } else if (this.props.axisX1 - dropAreaLeft + this.shiftLength() > 718) {

            var start = document.getElementsByClassName('dropAreaDiv')[0].offsetWidth - this.shiftLength() - 4

            return start


        } else {

            start = this.props.axisX1 - dropAreaLeft

            return start

        }

    }

    shiftLength = () => {

        var shiftLength = document.getElementsByClassName('dropAreaDiv')[0].offsetWidth / 3

        return shiftLength

    }

    render() {


        return (
            <div id='markerDiv'
                style={
                    {
                        position: 'relative',
                        height: '16px',
                        width: `${this.shiftLength()}px`,
                        border: '1px solid blue',
                        left: `${this.shiftStart()}px`,
                        zIndex: '-1',
                    }


                }
            >

            </div>
        )
    }
}
