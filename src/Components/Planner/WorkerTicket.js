import React, { Component } from 'react'

export default class WorkerTicket extends Component {

    drag = (ev) => {

        console.log(this.props.workerDB3[this.props.i1])

        //getting the index from the workerDB
        ev.dataTransfer.setData("src", this.props.workerDB3[this.props.i1].id);


    }

    draging = (ev) => {

        //    console.log(ev.pageX);
        //    console.log(ev.target);

        // var markerDiv = document.getElementById('markerDiv')

        // if (markerDiv !== null) {

        //     markerDiv.remove()

        // }



    }

    render() {
        return (
            <div id={`ticket${this.props.i1}`}
                className='ticketDiv'
                style={{ borderColor: `${this.props.workerDB3[this.props.i1].color}` }}
                draggable='true'
                onDragStart={this.drag}
                onDrag={this.draging}
            >


                {this.props.workerDB3[this.props.i1].name}

            </div>
        )
    }
}
