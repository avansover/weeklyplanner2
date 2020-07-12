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
        { name: 'Mo', posts: [{ name: 'post6', shifts: [] }, { name: 'post7', shifts: [{ workerInd: 2, shiftStart: 150, shiftLength: 20 },{ workerInd: 1, shiftStart: 240, shiftLength: 20 }] }, { name: 'post8', shifts: [] }] },
        { name: 'Tu', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }] },
        { name: 'We', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }] },
        { name: 'Th', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }] },
        { name: 'Fr', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }] },
        { name: 'Sa', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }] },
      ],

      workerDB: [
        { id: 0, name: 'John Doe1', color: '#ff0000' },
        { id: 1, name: 'John Doe2', color: '#00aa00' },
        { id: 2, name: 'John Doe3', color: '#0000ff' },
      ],

      markerPlaceDay: undefined,
      markerPlacePost: undefined,


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

    var shiftLengh = 240

    console.log('clacShift');

    var dropAreaLeft = document.getElementsByClassName('dropAreaDiv')[0].offsetLeft + 120

    console.log(dropAreaLeft);

    if (axisX5 < dropAreaLeft) {

      var start = 0

    } else if (axisX5 - dropAreaLeft + shiftLengh > 720) {

      start = document.getElementsByClassName('dropAreaDiv')[0].offsetWidth - shiftLengh - 2

    } else {

      var realStart = (axisX5 - dropAreaLeft)

      start = (Math.floor((realStart + 1) / 5)) * 5

    }

    console.log('start ' + start);

    console.log(this.state.shiftSet[dayInd5].posts[postInd5].shifts);

    let tempShiftDB = [...this.state.shiftSet]

    tempShiftDB[dayInd5].posts[postInd5].shifts.push({ workerInd: workerInd5, shiftStart: start, shiftLength: shiftLengh })

    this.setState({ shiftSet: tempShiftDB })


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


                workerDB1={this.state.workerDB}
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
