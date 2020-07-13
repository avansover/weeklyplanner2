import React, { Component } from 'react'
import Post from './Post'

export default class Day extends Component {

    placeMarker3 = (localDayInd2, localPostInd2) => {

        this.props.placeMarker4(localDayInd2, localPostInd2)


    }

    deleteMarker3 = () => {

        //console.log('deleteMarker3');
        
        this.props.deleteMarker4()

    }

    addShiftToDB3 = (workerInd3, dayInd3, postInd3, axisX3) => {

        //console.log('addShiftToDB3');

        this.props.addShiftToDB4(workerInd3, dayInd3, postInd3, axisX3)
        
    }

    bringMarkerData4 = (shiftStart, shiftLength) => {

        this.props.bringMarkerData5(shiftStart, shiftLength)

        // console.log(shiftStart);
        // console.log(shiftLength);

    }

    render() {
        return (
            <div>

                <div className='dayBodyDiv'>

                    <div className='dayNameDiv'>
                        {this.props.shiftSet2[this.props.dayInd1].name}
                    </div>

                    <div>
                        {this.props.shiftSet2[this.props.dayInd1].posts.map((e, postInd) => {
                            return (
                                <Post
                                    placeMarker2={this.placeMarker3}
                                    deleteMarker2={this.deleteMarker3}
                                    addShiftToDB2={this.addShiftToDB3}
                                    bringMarkerData3={this.bringMarkerData4}

                                    key={postInd}
                                    shiftSet3={this.props.shiftSet2}
                                    workerDB3={this.props.workerDB2}
                                    postInd1={postInd}
                                    dayInd2={this.props.dayInd1}

                                    markerPlaceDay3={this.props.markerPlaceDay2}
                                    markerPlacePost3={this.props.markerPlacePost2}
                                    markerWorkerID3={this.props.markerWorkerID2}

                                />
                            )
                        })}
                    </div>

                </div>



            </div>
        )
    }
}