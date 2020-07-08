import React, { Component } from 'react'

export default class WorkerTicket extends Component {

    drag = (ev) => {

        console.log(this.props.workerDB3[this.props.i1])

        //getting the index from the workerDV
        ev.dataTransfer.setData("src", this.props.workerDB3[this.props.i1].id);
    
    }

    render() {
        return (
            <div id={`ticket${this.props.i1}`}
                className='ticketDiv'
                style={{ borderColor: `${this.props.workerDB3[this.props.i1].color}`}}
                draggable='true'
                onDragStart={this.drag}
                >
                    

                {this.props.workerDB3[this.props.i1].name}

            </div>
        )
    }
}
