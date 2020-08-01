import React, { Component } from 'react'
import Post from './Post'
//import { Post } from './Post'
import ContextProvider from '../../Context/Context'

export default class Day extends Component {

    deleteMarker3 = () => {

        this.props.deleteMarker4()

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
                                <ContextProvider key={postInd}>
                                    <Post                                 
                                        deleteMarker2={this.deleteMarker3}
                                      
                                        key={postInd}
                                        shiftSet3={this.props.shiftSet2}
                                        workerDB3={this.props.workerDB2}
                                        postInd1={postInd}
                                        dayInd2={this.props.dayInd1}

                                        markerWorkerID3={this.props.markerWorkerID2}
                                    />
                                </ContextProvider>
                            )
                        })}
                    </div>

                </div>



            </div>
        )
    }
}
