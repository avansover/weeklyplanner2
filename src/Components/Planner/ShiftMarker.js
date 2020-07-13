import React, { Component } from 'react'

export default class ShiftMarker extends Component {

    markerData = () => {

        var markerLength = 240

        var dropAreaLeft = document.getElementsByClassName('dropAreaDiv')[0].offsetLeft

        //console.log(this.props.localShifts);

        var dropAreaAxisX = this.props.axisX1 - dropAreaLeft

        //console.log(dropAreaAxisX);

        var shiftStr = this.props.localShifts.map((o) => { return o.shiftStart })

        shiftStr.push(720)
        shiftStr.push(dropAreaAxisX)

        //console.log(shiftStr);

        for (let j = 0; j < shiftStr.length - 1; j++) {

            for (let i = 0; i < shiftStr.length - 1 - j; i++) {

                if (shiftStr[i] > shiftStr[i + 1]) {

                    let tempI = shiftStr[i]
                    shiftStr[i] = shiftStr[i + 1]
                    shiftStr[i + 1] = tempI

                }

            }

        }

        //console.log(shiftStr);

        for (let i = 0; i < shiftStr.length; i++) {

            if (shiftStr[i] === dropAreaAxisX) {
                var mouseIndStr = i
            }

        }

        //console.log(mouseIndStr);

        var endLimit = shiftStr[mouseIndStr + 1]

        //console.log(endLimit);

        // --------------------------------------------------- //

        var shiftend = this.props.localShifts.map((o) => { return o.shiftLength + o.shiftStart })

        shiftend.push(0)
        shiftend.push(dropAreaAxisX)

        for (let j = 0; j < shiftend.length - 1; j++) {

            for (let i = 0; i < shiftend.length - 1 - j; i++) {

                if (shiftend[i] > shiftend[i + 1]) {

                    let tempI = shiftend[i]
                    shiftend[i] = shiftend[i + 1]
                    shiftend[i + 1] = tempI

                }

            }

        }

        for (let i = 0; i < shiftend.length; i++) {

            if (shiftend[i] === dropAreaAxisX) {
                var mouseIndEnd = i
            }

        }

        //console.log(shiftend);

        var strLimit = shiftend[mouseIndEnd - 1]

        //console.log(strLimit);

        // --------------------------------------------------- //

        if (dropAreaAxisX < strLimit + 120) {

            var markerStart = strLimit

            let gap = endLimit - strLimit

            if (gap < 240) {

                markerStart = strLimit

                markerLength = endLimit - strLimit

            }


        } else if (dropAreaAxisX > endLimit - 120) {

            let gap = endLimit - strLimit

            //console.log(gap);

            if (gap >= 240) {

                markerStart = endLimit - 240

            } else if (gap < 240) {


                markerStart = strLimit

                markerLength = endLimit - strLimit


            }

        } else {

            markerStart = dropAreaAxisX - 120

            markerStart = (Math.floor((markerStart + 1) / 5)) * 5

        }

        this.props.bringMarkerData1(
            markerStart,
            markerLength
        )

        return { mrkStr: markerStart, mrkLnth: markerLength }

    }

    markerColor = () => {

        if (isNaN(this.markerData().mrkStr)) {

            //console.log('Nan');

            //there is a split second when the position of the marker displayed as NaN
            //for that moment I'll use style that can't be seen
            //later on I should check why I recive the NaN value

            return '#ffffff'


        } else {

            return '#ffaaaa'

        }

    }

    markerDataColor = () => {

        if (isNaN(this.markerData().mrkStr)) {

            //console.log('Nan');

            //there is a split second when the position of the marker displayed as NaN
            //for that moment I'll use style that can't be seen
            //later on I should check why I recive the NaN value

            return '#ffffff'


        } else {

            return '#000000'

        }

    }

    addShift = () => {

        console.log('addShift');


    }



    render() {



        return (
            <div id='markerDiv'
                style={
                    {
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '18px',
                        width: `${this.markerData().mrkLnth}px`,
                        border: '0px solid blue',
                        left: `${this.markerData().mrkStr}px`,
                        zIndex: '-1',
                        backgroundColor: `${this.markerColor()}`,

                    }
                }
            >

                <div
                    style={{ color: `${this.markerDataColor()}` }}
                > {this.markerData().mrkStr}

                </div>

                <div
                    style={{ color: `${this.markerDataColor()}` }}
                > {this.markerData().mrkStr + this.markerData().mrkLnth} </div>


            </div>
        )
    }
}
