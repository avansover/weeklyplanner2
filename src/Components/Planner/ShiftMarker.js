import React, { Component } from 'react'

export default class ShiftMarker extends Component {
    render() {
        return (
            <div id='markerDiv'
                style={
                    {
                        position: 'relative',
                        height: '10px',
                        width: '10px',
                        border: '1px solid blue',
                        left: `${this.props.axisX1-198}px`,
                        zIndex: '-1'

                    }
                }
            >
                
            </div>
        )
    }
}
