import React, { Component } from 'react'

export default class ShiftMarker extends Component {

    markerData = () => {

        var markerLength = 0
        var markerStart = 0

        var dropAreaLeft = document.getElementsByClassName('dropAreaDiv')[0].offsetLeft

        //console.log(this.props.localShifts);

        // since the this.props.axisX1 is undefined for the first few moment,
        // we get NaN warning on depeneded variables

        if (this.props.axisX1 !== undefined) {

            var dropAreaAxisX = this.props.axisX1 - dropAreaLeft

            // this if is to prvent shift drop on the border

            if (dropAreaAxisX > -1 && dropAreaAxisX < 720) {

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

                    markerStart = strLimit

                    markerLength = 240

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

                        markerLength = 240

                    } else if (gap < 240) {

                        markerStart = strLimit

                        markerLength = endLimit - strLimit

                    }

                } else {

                    markerStart = dropAreaAxisX - 120

                    markerLength = 240

                    markerStart = (Math.floor((markerStart + 1) / 5)) * 5

                }



            }

            return { mrkStr: markerStart, mrkLnth: markerLength }

        }



    }

    markerColor = () => {

        // since the this.props.axisX1 is undefined for the first few moment,
        // we get NaN warning on depeneded variables,
        // and the marker apears on the left of the drop area

        if (this.markerData().mrkLnth === 0) {

            return '#ffffff'


        } else {

            return '#ffaaaa'

        }

    }

    markerDataColor = () => {

        // since the this.props.axisX1 is undefined for the first few moment,
        // we get NaN warning on depeneded variables,
        // and the marker apears on the left of the drop area

        if (this.markerData().mrkLnth === 0) {

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
                        height: '21px',
                        width: `${this.markerData().mrkLnth}px`,
                        border: '0px solid blue',
                        left: `${this.markerData().mrkStr}px`,
                        zIndex: '-1',
                        backgroundColor: `${this.markerColor()}`,

                    }
                }
            >

                <div
                    style={{
                        color: `${this.markerDataColor()}`,
                        zIndex: -1,
                        fontSize: '12px'
                    }}
                >
                    {this.markerData().mrkStr}
                </div>

                <div
                    style={{
                        color: `${this.markerDataColor()}`,
                        zIndex: -1,
                        fontSize: '12px'
                    }}
                >
                    {this.markerData().mrkStr + this.markerData().mrkLnth}
                </div>


            </div>
        )
    }
}
