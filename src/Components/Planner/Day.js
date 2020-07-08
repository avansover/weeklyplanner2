import React, { Component } from 'react'
import Post from './Post'

export default class Day extends Component {
    render() {
        return (
            <div>

                <div className='dayBodyDiv'>

                    <div className='dayNameDiv'>
                        {this.props.shiftSet2[this.props.dayInd1].name}
                    </div>

                    <div>
                        {this.props.shiftSet2[this.props.dayInd1].shifts.map((e, postInd) => {
                            return (
                                <Post
                                    key={postInd}
                                    shiftSet3={this.props.shiftSet2}
                                    postInd1={postInd}
                                    dayInd2={this.props.dayInd1}

                                />
                            )
                        })}
                    </div>

                </div>



            </div>
        )
    }
}
