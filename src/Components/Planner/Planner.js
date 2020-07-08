import React, { Component } from 'react'
import WorkersBox from './WorkersBox'
import Day from './Day';

export default class Planner extends Component {


    


    render() {
        return (
            <div>

                <div id='plnWrkBox'>




                    <div>
                        <WorkersBox
                            workerDB2={this.props.workerDB1}
                        />
                    </div>

                    <div id='plannerDiv'
                       

                    >
                        {this.props.shiftSet1.map((e, dayInd) => {
                            return (
                                <Day
                                    key={dayInd}
                                    shiftSet2={this.props.shiftSet1}
                                    dayInd1={dayInd}
                                />
                            )
                        })}

                    </div>


                </div>






            </div>
        )
    }
}
