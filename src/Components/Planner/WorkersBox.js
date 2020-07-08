import React, { Component } from 'react'
import WorkerTicket from './WorkerTicket'

export default class WorkersBox extends Component {
    render() {
        return (
            <div>

                {this.props.workerDB2.map((e,i)=>{
                    return (
                        <WorkerTicket
                        key={i} 
                        workerDB3={this.props.workerDB2}
                        i1={i}
                        />
                    )
                })}
                
            </div>
        )
    }
}
