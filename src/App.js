import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Login from './Components/Login.js'
import Planner from './Components/Planner/Planner.js'
import Personal from './Components/Personal/Personal.js'
import Gistory from './Components/History/Gistory.js'
import SetPlan from './Components/SetPlan/SetPlan.js'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

      shiftSet: [
        { name: 'Su', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }] },
        { name: 'Mo', posts: [{ name: 'post6', shifts: [] }, { name: 'post7', shifts: [] }, { name: 'post8', shifts: [] }] },
        { name: 'Tu', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }] },
        { name: 'We', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }] },
        { name: 'Th', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }] },
        { name: 'Fr', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }] },
        { name: 'Sa', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }] },
      ],

      workerDB: [
        { id: 0, name: 'draggable 1', color: '#ff0000' },
        { id: 1, name: 'draggable 2', color: '#00aa00' },
        { id: 2, name: 'draggable 3', color: '#6666ff' },
        { id: 3, name: 'draggable 4', color: '#ffff00' },
        { id: 4, name: 'draggable 5', color: '#ff00ff' },
        { id: 6, name: 'draggable 6', color: '#00ffff' },
      ],

      markerPlaceDay: undefined,
      markerPlacePost: undefined,

      markerWorkerID: undefined,


    }
  }

  placeMarker7 = (localDayInd4, localPostInd4) => {

    if (this.state.markerPlaceDay !== localDayInd4 || this.state.markerPlacePost !== localPostInd4) {

      //while draging worker ticket over the post componet and...
      //by compering the local indexes of the post componet to the global index of the mouse
      //the shift marker will appear in the right day/post while draging over that component

      this.setState({ markerPlaceDay: localDayInd4 })
      this.setState({ markerPlacePost: localPostInd4 })

    }

  }

  deleteMarker7 = () => {

    //when dropping the shift or leaving the the drop area
    //the marker is deleted

    this.setState({ markerPlaceDay: undefined })
    this.setState({ markerPlacePost: undefined })

  }

  addShiftToDB7 = (workerInd5, dayInd5, postInd5, axisX5) => {

    console.log('addShift');

    console.log(workerInd5);
    console.log(dayInd5);
    console.log(postInd5);
    console.log(axisX5);
    console.log("");


    console.log('clacShift');

    var shiftLength = 240

    var dropAreaLeft = document.getElementsByClassName('dropAreaDiv')[0].offsetLeft

    //console.log(dropAreaLeft);

    var dropAreaAxisX = axisX5 - dropAreaLeft

    //console.log(dropAreaAxisX);

    var shiftStr = this.state.shiftSet[dayInd5].posts[postInd5].shifts.map((o, i) => { return o.shiftStart })

    shiftStr.push(720)
    shiftStr.push(dropAreaAxisX)

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

    console.log(endLimit);

    // --------------------------------------------------- //

    var shiftend = this.state.shiftSet[dayInd5].posts[postInd5].shifts.map((o, i) => { return o.shiftLength + o.shiftStart })

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

    console.log(strLimit);

    // --------------------------------------------------- //

    if (dropAreaAxisX < strLimit + 120) {

      var shiftStart = strLimit

      let gap = endLimit - strLimit

      if (gap < 240) {

        shiftStart = strLimit

        shiftLength = endLimit - strLimit

      }


    } else if (dropAreaAxisX > endLimit - 120) {

      let gap = endLimit - strLimit

      //console.log(gap);

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


    let tempShiftDB = [...this.state.shiftSet]

    tempShiftDB[dayInd5].posts[postInd5].shifts.push({ workerId: workerInd5, shiftStart: shiftStart, shiftLength: shiftLength })

    this.setState({ shiftSet: tempShiftDB })


  }

  bringMarkerData8 = (shiftStart, shiftLength) => {



    // console.log(shiftStart);
    // console.log(shiftLength);

  }

  bringWorkerID7 = (workerID) => {


    console.log(workerID);

    this.setState({ markerWorkerID: workerID })

  }


  render() {

    return (
      <div>

        weekly planner

        <Router>

          <Switch>

            <Route exact path='/' component={() => {
              return <Login

              />
            }} />
            <Route exact path='/planner' component={() => {
              return <Planner
                placeMarker6={this.placeMarker7}
                deleteMarker6={this.deleteMarker7}
                addShiftToDB6={this.addShiftToDB7}
                bringMarkerData7={this.bringMarkerData8}
                bringWorkerID6={this.bringWorkerID7}

                workerDB1={this.state.workerDB}
                markerWorkerID1={this.state.markerWorkerID}
                shiftSet1={this.state.shiftSet}

                markerPlaceDay1={this.state.markerPlaceDay}
                markerPlacePost1={this.state.markerPlacePost}

              />
            }} />
            <Route exact path='/personal' component={() => {
              return <Personal

              />
            }} />
            <Route exact path='/history' component={() => {
              return <Gistory

              />
            }} />
            <Route exact path='/setplanner' component={() => {
              return <SetPlan

              />
            }} />


          </Switch>

        </Router>

      </div>
    )
  }
}
