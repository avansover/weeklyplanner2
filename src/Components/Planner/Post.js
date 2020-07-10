import React, { Component } from 'react'
import ShiftMarker from './ShiftMarker';

export default class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {
            axisX: undefined,
            
        }
    }

    allowDrop = (ev) => {

        // *** learn conextAPI

        ev.preventDefault();
        //console.log(ev.target);
        //console.log(ev.pageX);

        //var shiftDiv = <ShiftMarker />
        // var markerDivExist = document.getElementById('markerDiv')

        // if (markerDivExist === null) {

        //     var markerDiv = document.createElement('div')
        //     markerDiv.id = 'markerDiv'
        //     markerDiv.style.height = '10px'
        //     markerDiv.style.width = '10px'
        //     markerDiv.style.border = '1px solid red'
        //     markerDiv.style.position = 'relative'
        //     markerDiv.style.left = `${ev.pageX-200}px`
        //     markerDiv.style.zIndex = '-1'

        //     //console.log(markerDiv);

        //     document.getElementById(`dropDay${this.props.dayInd2}post${this.props.postInd1}`).appendChild(markerDiv)

        // }

        // console.log(this.props.dayInd2);
        // console.log(this.props.postInd1);


        if (this.state.axisX !== ev.pageX) {

            this.setState({ axisX: ev.pageX })

            // console.log(this.state.axisX);

        }

        let localDayInd1 = this.props.dayInd2
        let localPostInd1 = this.props.postInd1

        this.props.placeMarker2(localDayInd1, localPostInd1)

    }

    drop = (ev) => {

        // *** learn conextAPI

        console.log('drop');

        ev.preventDefault();

        console.log(ev.target);

        let src = ev.dataTransfer.getData("src");

        console.log('src ' + src);
        console.log('day ' + this.props.dayInd2);
        console.log('post ' + this.props.postInd1);
        console.log('x ' + ev.pageX);


        let workerInd1 = src
        let dayInd1 = this.props.dayInd2
        let postInd1 = this.props.postInd1
        let axisX1 = ev.pageX


        this.deleteMarker1()

        this.addShiftToDB1(workerInd1, dayInd1, postInd1, axisX1)


    }

    placeMarker1 = () => {

        if (this.props.dayInd2 === this.props.markerPlaceDay3 && this.props.postInd1 === this.props.markerPlacePost3) {


        
            return <ShiftMarker
                axisX1={this.state.axisX}
        
            />

            

        }


    }

    deleteMarker1 = () => {

        // *** at app, set markerPlaceDay and markerPlacePost to undefined,


        // var markerDiv = document.getElementById('markerDiv')

        // if (markerDiv !== null) {

        //     markerDiv.remove()

        // }

        //console.log('leave');

        this.props.deleteMarker2()


    }

    addShiftToDB1 = (workerInd2, dayInd2, postInd2, axisX2) => {

        console.log('adding shift');

        this.props.addShiftToDB2(workerInd2, dayInd2, postInd2, axisX2)

    }

    getAxisX = () => {

        console.log('pressed');
    }

    render() {

        


        return (
            <div>

                <div className='postBodyDiv'>

                    <div>{this.props.shiftSet3[this.props.dayInd2].shifts[this.props.postInd1].name}</div>



                    <div className='dropAreaDiv'
                        id={`dropDay${this.props.dayInd2}Post${this.props.postInd1}`}
                        ref={el => (this.container = el)}
                        onDragOver={this.allowDrop}
                        onDrop={this.drop}
                        onDragLeave={this.deleteMarker1}
                    >
                        {this.placeMarker1()}
                    </div>

                    


                </div>

            </div>
        )
    }
}
