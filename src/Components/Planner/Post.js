import React, { Component } from 'react'
import ShiftMarker from './ShiftMarker';
import Shift from './Shift';
import { Context } from '../../Context/Context';

export default class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {

            axisX: undefined,

            shiftStartForDrop: undefined,
            shiftLengthForDrop: undefined,

            tempA: undefined

        }
    }

    static contextType = Context

    allowDrop = (ev) => {

        // *** learn conextAPI

        ev.preventDefault();

        //console.log(ev.target);
        //console.log(ev.pageX);

        // via createElement

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

        //     document.getElementById(`dropDay${this.props.dayInd2}Post${this.props.postInd1}`).appendChild(markerDiv)

        // }

        // console.log(this.props.dayInd2);


        if (this.state.axisX !== ev.pageX) {

            this.setState({ axisX: ev.pageX })

            // console.log(this.state.axisX);

            // via createElement

            // var markerDiv = document.getElementById('markerDiv')

            // if (markerDiv !== null) {

            //     markerDiv.remove()

            // }

        }

        if (ev.target.className !== 'shiftDiv' && ev.target.className !== 'shiftDataDiv') {

            let localDayInd = this.props.dayInd2
            let localPostInd = this.props.postInd1

            //this.props.placeMarker2(localDayInd, localPostInd)

            const { setMarkerInd } = this.context

            setMarkerInd(localDayInd, localPostInd)

        }

    }

    placeMarker1 = () => {

        let { globalMarkDay, globalMarkPost } = this.context

        if (this.props.dayInd2 === globalMarkDay && this.props.postInd1 === globalMarkPost) {

            return <ShiftMarker

                axisX1={this.state.axisX}
                localShifts={this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts}
                dayInd3={this.props.dayInd2}
                postInd2={this.props.postInd1}
                markerWorkerID4={this.props.markerWorkerID3}

            />

        }

    }

    drop = (ev) => {

        // *** learn conextAPI

        ev.preventDefault();

        console.log(ev.target);

        // --- from shift ---
        let srcClass = ev.dataTransfer.getData("srcClass");


        if (srcClass === 'ticketDiv' && ev.target.className === 'dropAreaDiv') {

            // hundle normal clonning from ticket to planner area drop

            console.log('clone');

            let ticketWorkerId = ev.dataTransfer.getData("ticketWorkerId");

            //console.log(this.context);

            console.log('ticketWorkerId ' + ticketWorkerId);
            console.log('day ' + this.props.dayInd2);
            console.log('post ' + this.props.postInd1);
            console.log('x ' + ev.pageX);

            let shiftDB = this.props.shiftSet3
            let workerId = ticketWorkerId
            let dayInd = this.props.dayInd2
            let postInd = this.props.postInd1
            let axisX = ev.pageX

            var shiftLength = 240

            var dropAreaLeft = document.getElementsByClassName('dropAreaDiv')[0].offsetLeft

            var dropAreaAxisX = axisX - dropAreaLeft

            // making and array for all the starting point of the shifts + the mouse pointer

            var shiftStr = shiftDB[dayInd].posts[postInd].shifts.map((o, i) => { return o.shiftStart })

            // the 720 is the ending point when there is no shift after the one we just droped
            shiftStr.push(720)
            shiftStr.push(dropAreaAxisX)

            // sort the starting points of the shifts + the mouse pointer, inside the post area.

            for (let j = 0; j < shiftStr.length - 1; j++) {

                for (let i = 0; i < shiftStr.length - 1 - j; i++) {

                    if (shiftStr[i] > shiftStr[i + 1]) {

                        let tempI = shiftStr[i]
                        shiftStr[i] = shiftStr[i + 1]
                        shiftStr[i + 1] = tempI

                    }

                }

            }

            // in that new sorted array, we check where is mouse pointer is positioned

            for (let i = 0; i < shiftStr.length; i++) {

                if (shiftStr[i] === dropAreaAxisX) {
                    var mouseIndStr = i
                }

            }

            var endLimit = shiftStr[mouseIndStr + 1]

            // sort the starting point of the shifts + the mouse pointer, inside the post area.

            var shiftend = shiftDB[dayInd].posts[postInd].shifts.map((o, i) => { return o.shiftLength + o.shiftStart })

            // the 0 is the starting point when there is no shift before the one we just droped
            shiftend.push(0)
            shiftend.push(dropAreaAxisX)

            // sort the ending points of the shifts + the mouse pointer, inside the post area.

            for (let j = 0; j < shiftend.length - 1; j++) {

                for (let i = 0; i < shiftend.length - 1 - j; i++) {

                    if (shiftend[i] > shiftend[i + 1]) {

                        let tempI = shiftend[i]
                        shiftend[i] = shiftend[i + 1]
                        shiftend[i + 1] = tempI

                    }

                }

            }

            // here in that new sorted array, we check again where is mouse pointer is positioned

            for (let i = 0; i < shiftend.length; i++) {

                if (shiftend[i] === dropAreaAxisX) {
                    var mouseIndEnd = i
                }

            }

            var strLimit = shiftend[mouseIndEnd - 1]

            if (dropAreaAxisX < strLimit + 120) {

                var shiftStart = strLimit
                let gap = endLimit - strLimit

                if (gap < 240) {

                    shiftStart = strLimit
                    shiftLength = endLimit - strLimit

                }


            } else if (dropAreaAxisX > endLimit - 120) {

                let gap = endLimit - strLimit

                if (gap >= 240) {

                    shiftStart = endLimit - 240

                } else if (gap < 240) {

                    shiftStart = strLimit
                    shiftLength = endLimit - strLimit

                }

            } else {

                shiftStart = dropAreaAxisX - 120
                shiftStart = (Math.floor((shiftStart + 1) / 5)) * 5

            }

            shiftDB[dayInd].posts[postInd].shifts.push({ workerId: workerId, shiftStart: shiftStart, shiftLength: shiftLength, shiftId: `d${dayInd}p${postInd}s${shiftStart}w${workerId}` })

            //sorting after adding shift

            for (let j = 0; j < shiftDB[dayInd].posts[postInd].shifts.length; j++) {

                for (let i = 0; i < shiftDB[dayInd].posts[postInd].shifts.length - 1 - j; i++) {

                    let firstShift = shiftDB[dayInd].posts[postInd].shifts[i]
                    let secondShift = shiftDB[dayInd].posts[postInd].shifts[i + 1]

                    console.log(shiftDB[dayInd].posts[postInd].shifts[i].shiftStart);

                    if (firstShift.shiftStart > secondShift.shiftStart) {

                        let tempShift = shiftDB[dayInd].posts[postInd].shifts[i]
                        shiftDB[dayInd].posts[postInd].shifts[i] = shiftDB[dayInd].posts[postInd].shifts[i + 1]
                        shiftDB[dayInd].posts[postInd].shifts[i + 1] = tempShift


                    }

                }
            }

            // merg shifts

            for (let k = 0; k < 2; k++) {

                // --- need to run the whole thing twice in order to account for merging 3 shifts ---

                for (let shiftInd = 0; shiftInd < shiftDB[dayInd].posts[postInd].shifts.length - 1; shiftInd++) {

                    console.log(shiftDB[dayInd].posts[postInd].shifts);

                    let firstShift = shiftDB[dayInd].posts[postInd].shifts[shiftInd]
                    let secondShift = shiftDB[dayInd].posts[postInd].shifts[shiftInd + 1]

                    // console.log(firstShift);
                    // console.log(secondShift);

                    if (firstShift.shiftStart + firstShift.shiftLength === secondShift.shiftStart && firstShift.workerId === secondShift.workerId) {

                        shiftDB[dayInd].posts[postInd].shifts.push({ workerId: firstShift.workerId, shiftStart: firstShift.shiftStart, shiftLength: firstShift.shiftLength + secondShift.shiftLength, shiftId: `d${dayInd}p${postInd}s${firstShift.shiftStart}w${workerId}` })

                        let localShiftNum = shiftDB[dayInd].posts[postInd].shifts.length

                        let newMergedShift = shiftDB[dayInd].posts[postInd].shifts[localShiftNum - 1]

                        shiftDB[dayInd].posts[postInd].shifts[shiftInd] = newMergedShift

                        shiftDB[dayInd].posts[postInd].shifts.splice(shiftInd + 1, 1)

                        shiftDB[dayInd].posts[postInd].shifts.pop()

                    }

                }

            }

            console.log(shiftDB);

        } else if (srcClass === 'ticketDiv' && ev.target.className === 'shiftDiv') {

            console.log('run over');

            let ticketWorkerId = ev.dataTransfer.getData("ticketWorkerId");

            console.log('ticketWorkerId ' + ticketWorkerId);
            console.log('day ' + this.props.dayInd2);
            console.log('post ' + this.props.postInd1);

            let dayInd = this.props.dayInd2
            let postInd = this.props.postInd1

            let shiftDB = this.props.shiftSet3

            let tgtShiftId = ev.target.id
            console.log('tgtId ' + tgtShiftId);

            let tgtWorkerId = tgtShiftId.slice(tgtShiftId.indexOf('w') + 1, tgtShiftId.length)
            console.log('tgtWorkerId ' + tgtWorkerId);

            console.log(shiftDB);

            for (let shiftInd = 0; shiftInd < shiftDB[dayInd].posts[postInd].shifts.length; shiftInd++) {

                if (shiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftId === tgtShiftId) {

                    console.log('tgt found');
                    console.log(shiftDB[dayInd].posts[postInd].shifts[shiftInd]);

                    var tgtShiftInd2 = shiftInd

                }

            }

            let tgtNewShiftId = tgtShiftId.slice(0, tgtShiftId.indexOf('w') + 1) + ticketWorkerId

            console.log(tgtNewShiftId);

            shiftDB[dayInd].posts[postInd].shifts[tgtShiftInd2].workerId = ticketWorkerId
            shiftDB[dayInd].posts[postInd].shifts[tgtShiftInd2].shiftId = tgtNewShiftId

            // merg shifts

            for (let k = 0; k < 2; k++) {

                // --- need to run the whole thing twice in order to account for merging 3 shifts ---

                for (let shiftInd = 0; shiftInd < shiftDB[dayInd].posts[postInd].shifts.length - 1; shiftInd++) {

                    console.log(shiftDB[dayInd].posts[postInd].shifts);

                    let firstShift = shiftDB[dayInd].posts[postInd].shifts[shiftInd]
                    let secondShift = shiftDB[dayInd].posts[postInd].shifts[shiftInd + 1]

                    // console.log(firstShift);
                    // console.log(secondShift);

                    if (firstShift.shiftStart + firstShift.shiftLength === secondShift.shiftStart && firstShift.workerId === secondShift.workerId) {

                        shiftDB[dayInd].posts[postInd].shifts.push({ workerId: firstShift.workerId, shiftStart: firstShift.shiftStart, shiftLength: firstShift.shiftLength + secondShift.shiftLength, shiftId: `d${dayInd}p${postInd}s${firstShift.shiftStart}w${firstShift.workerId}` })

                        let localShiftNum = shiftDB[dayInd].posts[postInd].shifts.length

                        let newMergedShift = shiftDB[dayInd].posts[postInd].shifts[localShiftNum - 1]

                        shiftDB[dayInd].posts[postInd].shifts[shiftInd] = newMergedShift

                        shiftDB[dayInd].posts[postInd].shifts.splice(shiftInd + 1, 1)

                        shiftDB[dayInd].posts[postInd].shifts.pop()

                    }

                }

            }





        } else if (srcClass === 'shiftDiv' && ev.target.className === 'dropAreaDiv') {

            console.log('transfer');

            let shiftDB = this.props.shiftSet3

            console.log('day ' + this.props.dayInd2);
            console.log('post ' + this.props.postInd1);
            console.log('x ' + ev.pageX);

            let workerId = ev.dataTransfer.getData("srcWorkerId");
            let dayInd = this.props.dayInd2
            let postInd = this.props.postInd1
            let axisX = ev.pageX

            shiftLength = 240

            dropAreaLeft = document.getElementsByClassName('dropAreaDiv')[0].offsetLeft

            dropAreaAxisX = axisX - dropAreaLeft

            // making and array for all the starting point of the shifts + the mouse pointer

            shiftStr = shiftDB[dayInd].posts[postInd].shifts.map((o, i) => { return o.shiftStart })

            // the 720 is the ending point when there is no shift after the one we just droped
            shiftStr.push(720)
            shiftStr.push(dropAreaAxisX)

            // sort the starting points of the shifts + the mouse pointer, inside the post area.

            for (let j = 0; j < shiftStr.length - 1; j++) {

                for (let i = 0; i < shiftStr.length - 1 - j; i++) {

                    if (shiftStr[i] > shiftStr[i + 1]) {

                        let tempI = shiftStr[i]
                        shiftStr[i] = shiftStr[i + 1]
                        shiftStr[i + 1] = tempI

                    }

                }

            }

            // in that new sorted array, we check where is mouse pointer is positioned

            for (let i = 0; i < shiftStr.length; i++) {

                if (shiftStr[i] === dropAreaAxisX) {
                    mouseIndStr = i
                }

            }

            endLimit = shiftStr[mouseIndStr + 1]

            // sort the starting point of the shifts + the mouse pointer, inside the post area.

            shiftend = shiftDB[dayInd].posts[postInd].shifts.map((o, i) => { return o.shiftLength + o.shiftStart })

            // the 0 is the starting point when there is no shift before the one we just droped
            shiftend.push(0)
            shiftend.push(dropAreaAxisX)

            // sort the ending points of the shifts + the mouse pointer, inside the post area.

            for (let j = 0; j < shiftend.length - 1; j++) {

                for (let i = 0; i < shiftend.length - 1 - j; i++) {

                    if (shiftend[i] > shiftend[i + 1]) {

                        let tempI = shiftend[i]
                        shiftend[i] = shiftend[i + 1]
                        shiftend[i + 1] = tempI

                    }

                }

            }

            // here in that new sorted array, we check again where is mouse pointer is positioned

            for (let i = 0; i < shiftend.length; i++) {

                if (shiftend[i] === dropAreaAxisX) {
                    mouseIndEnd = i
                }

            }

            strLimit = shiftend[mouseIndEnd - 1]

            if (dropAreaAxisX < strLimit + 120) {

                shiftStart = strLimit
                let gap = endLimit - strLimit

                if (gap < 240) {

                    shiftStart = strLimit
                    shiftLength = endLimit - strLimit

                }


            } else if (dropAreaAxisX > endLimit - 120) {

                let gap = endLimit - strLimit

                if (gap >= 240) {

                    shiftStart = endLimit - 240

                } else if (gap < 240) {

                    shiftStart = strLimit
                    shiftLength = endLimit - strLimit

                }

            } else {

                shiftStart = dropAreaAxisX - 120
                shiftStart = (Math.floor((shiftStart + 1) / 5)) * 5

            }

            shiftDB[dayInd].posts[postInd].shifts.push({ workerId: workerId, shiftStart: shiftStart, shiftLength: shiftLength, shiftId: `d${dayInd}p${postInd}s${shiftStart}w${workerId}` })

            //sorting after adding shift

            for (let j = 0; j < shiftDB[dayInd].posts[postInd].shifts.length; j++) {

                for (let i = 0; i < shiftDB[dayInd].posts[postInd].shifts.length - 1 - j; i++) {

                    let firstShift = shiftDB[dayInd].posts[postInd].shifts[i]
                    let secondShift = shiftDB[dayInd].posts[postInd].shifts[i + 1]

                    console.log(shiftDB[dayInd].posts[postInd].shifts[i].shiftStart);

                    if (firstShift.shiftStart > secondShift.shiftStart) {

                        let tempShift = shiftDB[dayInd].posts[postInd].shifts[i]
                        shiftDB[dayInd].posts[postInd].shifts[i] = shiftDB[dayInd].posts[postInd].shifts[i + 1]
                        shiftDB[dayInd].posts[postInd].shifts[i + 1] = tempShift


                    }

                }
            }

            // removing the shift from its old place in the shiftDB

            let srcId = ev.dataTransfer.getData("srcId");
            let srcDay = ev.dataTransfer.getData("srcDay");
            let srcPost = ev.dataTransfer.getData("srcPost");

            // console.log('srcId ' + srcId);
            // console.log('srcDay ' + srcDay);
            // console.log('srcPost ' + srcPost);

            console.log(srcId.slice(srcId.indexOf('s') + 1, srcId.indexOf('w')));

            let srcShiftStart = parseInt(srcId.slice(srcId.indexOf('s') + 1, srcId.indexOf('w')))

            console.log(shiftDB[srcDay].posts[srcPost].shifts.filter((o) => (o.shiftStart === srcShiftStart)));

            let shiftsNearSrc = shiftDB[srcDay].posts[srcPost].shifts

            for (let shiftInd = 0; shiftInd < shiftsNearSrc.length; shiftInd++) {

                if (shiftsNearSrc.filter((o) => (o.shiftStart === srcShiftStart))[0].shiftStart === shiftsNearSrc[shiftInd].shiftStart) {

                    console.log(shiftsNearSrc[shiftInd]);


                    var shiftToRemoveInd = shiftInd

                }

            }

            shiftsNearSrc.splice(shiftToRemoveInd, 1)

            // merg shifts

            for (let k = 0; k < 2; k++) {

                // --- need to run the whole thing twice in order to account for merging 3 shifts ---

                for (let shiftInd = 0; shiftInd < shiftDB[dayInd].posts[postInd].shifts.length - 1; shiftInd++) {

                    console.log(shiftDB[dayInd].posts[postInd].shifts);

                    let firstShift = shiftDB[dayInd].posts[postInd].shifts[shiftInd]
                    let secondShift = shiftDB[dayInd].posts[postInd].shifts[shiftInd + 1]

                    // console.log(firstShift);
                    // console.log(secondShift);

                    if (firstShift.shiftStart + firstShift.shiftLength === secondShift.shiftStart && firstShift.workerId === secondShift.workerId) {

                        shiftDB[dayInd].posts[postInd].shifts.push({ workerId: firstShift.workerId, shiftStart: firstShift.shiftStart, shiftLength: firstShift.shiftLength + secondShift.shiftLength, shiftId: `d${dayInd}p${postInd}s${firstShift.shiftStart}w${workerId}` })

                        let localShiftNum = shiftDB[dayInd].posts[postInd].shifts.length

                        let newMergedShift = shiftDB[dayInd].posts[postInd].shifts[localShiftNum - 1]

                        shiftDB[dayInd].posts[postInd].shifts[shiftInd] = newMergedShift

                        shiftDB[dayInd].posts[postInd].shifts.splice(shiftInd + 1, 1)

                        shiftDB[dayInd].posts[postInd].shifts.pop()

                    }

                }

            }

            //console.log(shiftDB);

        } else if (srcClass === 'shiftDiv' && ev.target.className === 'shiftDiv') {

            console.log('swap');

            let srcId = ev.dataTransfer.getData("srcId");
            let srcDay = ev.dataTransfer.getData("srcDay");
            let srcPost = ev.dataTransfer.getData("srcPost");
            let srcWorkerId = ev.dataTransfer.getData("srcWorkerId");

            console.log('swap');
            console.log('srcId ' + srcId);
            console.log('srcDay ' + srcDay);
            console.log('srcPost ' + srcPost);
            console.log('srcWorkerId ' + srcWorkerId);

            let shiftDB = this.props.shiftSet3
            let tgtShiftId = ev.target.id
            console.log('tgtId ' + tgtShiftId);

            let tgtDay = this.props.dayInd2
            console.log('tgt day ' + tgtDay);

            let tgtPost = this.props.postInd1
            console.log('tgt post ' + tgtPost);

            let tgtWorkerId = tgtShiftId.slice(tgtShiftId.indexOf('w') + 1, tgtShiftId.length)
            console.log('tgtWorkerId ' + tgtWorkerId);


            for (let shiftInd = 0; shiftInd < shiftDB[srcDay].posts[srcPost].shifts.length; shiftInd++) {

                if (shiftDB[srcDay].posts[srcPost].shifts[shiftInd].shiftId === srcId) {

                    console.log('src found');
                    console.log(shiftDB[srcDay].posts[srcPost].shifts[shiftInd]);

                    var srcShiftInd = shiftInd

                }

            }

            for (let shiftInd = 0; shiftInd < shiftDB[tgtDay].posts[tgtPost].shifts.length; shiftInd++) {

                if (shiftDB[tgtDay].posts[tgtPost].shifts[shiftInd].shiftId === tgtShiftId) {

                    console.log('tgt found');
                    console.log(shiftDB[tgtDay].posts[tgtPost].shifts[shiftInd]);

                    var tgtShiftInd = shiftInd

                }

            }

            console.log(srcShiftInd);
            console.log(tgtShiftInd);

            console.log('remaking shiftId ');

            let srcNewShiftId = srcId.slice(0, srcId.indexOf('w') + 1) + tgtWorkerId

            console.log('newSrcId ' + srcNewShiftId);

            let tgtNewShiftId = tgtShiftId.slice(0, tgtShiftId.indexOf('w') + 1) + srcWorkerId

            console.log('tgtNewShiftId ' + tgtNewShiftId);

            shiftDB[srcDay].posts[srcPost].shifts[srcShiftInd].workerId = tgtWorkerId
            shiftDB[srcDay].posts[srcPost].shifts[srcShiftInd].shiftId = srcNewShiftId

            shiftDB[tgtDay].posts[tgtPost].shifts[tgtShiftInd].workerId = srcWorkerId
            shiftDB[tgtDay].posts[tgtPost].shifts[tgtShiftInd].shiftId = tgtNewShiftId

            for (let k = 0; k < 2; k++) {

                for (let shiftInd = 0; shiftInd < shiftDB[srcDay].posts[srcPost].shifts.length - 1; shiftInd++) {

                    console.log(shiftDB[srcDay].posts[srcPost].shifts);

                    let firstShift = shiftDB[srcDay].posts[srcPost].shifts[shiftInd]
                    let secondShift = shiftDB[srcDay].posts[srcPost].shifts[shiftInd + 1]

                    if (firstShift.shiftStart + firstShift.shiftLength === secondShift.shiftStart && firstShift.workerId === secondShift.workerId) {

                        shiftDB[srcDay].posts[srcPost].shifts.push({ workerId: firstShift.workerId, shiftStart: firstShift.shiftStart, shiftLength: firstShift.shiftLength + secondShift.shiftLength, shiftId: `d${srcDay}p${srcPost}s${firstShift.shiftStart}w${firstShift.workerId}` })

                        let localShiftNum = shiftDB[srcDay].posts[srcPost].shifts.length

                        let newMergedShift = shiftDB[srcDay].posts[srcPost].shifts[localShiftNum - 1]

                        shiftDB[srcDay].posts[srcPost].shifts[shiftInd] = newMergedShift

                        shiftDB[srcDay].posts[srcPost].shifts.splice(shiftInd + 1, 1)

                        shiftDB[srcDay].posts[srcPost].shifts.pop()

                    }

                }

                for (let shiftInd = 0; shiftInd < shiftDB[tgtDay].posts[tgtPost].shifts.length - 1; shiftInd++) {

                    console.log(shiftDB[tgtDay].posts[tgtPost].shifts);

                    let firstShift = shiftDB[tgtDay].posts[tgtPost].shifts[shiftInd]
                    let secondShift = shiftDB[tgtDay].posts[tgtPost].shifts[shiftInd + 1]

                    if (firstShift.shiftStart + firstShift.shiftLength === secondShift.shiftStart && firstShift.workerId === secondShift.workerId) {

                        shiftDB[tgtDay].posts[tgtPost].shifts.push({ workerId: firstShift.workerId, shiftStart: firstShift.shiftStart, shiftLength: firstShift.shiftLength + secondShift.shiftLength, shiftId: `d${tgtDay}p${tgtPost}s${firstShift.shiftStart}w${firstShift.workerId}` })

                        let localShiftNum = shiftDB[tgtDay].posts[tgtPost].shifts.length

                        let newMergedShift = shiftDB[tgtDay].posts[tgtPost].shifts[localShiftNum - 1]

                        shiftDB[tgtDay].posts[tgtPost].shifts[shiftInd] = newMergedShift

                        shiftDB[tgtDay].posts[tgtPost].shifts.splice(shiftInd + 1, 1)

                        shiftDB[tgtDay].posts[tgtPost].shifts.pop()

                    }

                }

            }



        }

        console.log(ev.target.className);

        this.deleteMarker1()


    }






    deleteMarker1 = () => {

        // *** at app, set markerPlaceDay and markerPlacePost to undefined,


        var markerDiv = document.getElementById('markerDiv')

        if (markerDiv !== null) {

            markerDiv.remove()

        }

        //console.log('leave');

        this.props.deleteMarker2()


    }

    addShiftToDB1 = (workerInd2, dayInd2, postInd2, axisX2) => {

        //console.log('adding shift');

        this.props.addShiftToDB2(workerInd2, dayInd2, postInd2, axisX2)

    }

    render() {

        //console.log(this.context);

        //let { globalMarkDay, globalMarkPost } = this.context

        //console.log(globalMarkDay);
        //console.log(globalMarkPost);

        return (
            <div>

                <div className='postBodyDiv'>

                    <div>{this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].name}</div>

                    <div className='dropAreaDiv'
                        style={{ display: 'flex', position: "relative" }}
                        id={`dropDay${this.props.dayInd2}Post${this.props.postInd1}`}
                        onDragOver={this.allowDrop}
                        onDrop={this.drop}
                        onDragLeave={this.deleteMarker1}
                    >
                        {this.placeMarker1()}

                        {this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts.map((o, shiftInd) => {
                            return (<Shift
                                key={shiftInd}
                                localShifts={this.props.shiftSet3[this.props.dayInd2].posts[this.props.postInd1].shifts}
                                workerDB4={this.props.workerDB3}
                                markerWorkerID4={this.props.markerWorkerID3}
                                shiftData={o}
                                dayInd3={this.props.dayInd2}
                                postInd2={this.props.postInd1}
                                shiftInd1={shiftInd}
                            />)
                        })}

                    </div>

                </div>




            </div>
        )
    }
}
