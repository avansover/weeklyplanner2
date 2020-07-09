import React, { Component } from 'react'

export default class ShiftMarker extends Component {
    render() {
        return (
            <div id='markerDiv'
                style={
                    {
                        height: '10px',
                        width: '10px',
                        border: '1px solid red'
                    }
                }
            >
                0
            </div>
        )
    }
}
