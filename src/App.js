import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css';
import Planner from './Components/Planner/Planner.js'
import Personal from './Components/Personal/Personal.js'
import Gistory from './Components/History/Gistory.js'
import SetPlan from './Components/SetPlan/SetPlan.js'
import HomePage from './Components/HomePage.js';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Worker from './Components/Personal/Worker';

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
        { name: 'Fr', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }, { name: 'post4', shifts: [] }] },
        { name: 'Sa', posts: [{ name: 'post1', shifts: [] }, { name: 'post2', shifts: [] }, { name: 'post3', shifts: [] }] },
      ],

      workerDB: [
        { id: 0, name: 'draggable 1', color: '#ff0000' },
        { id: 1, name: 'draggable 2', color: '#00aa00' },
        { id: 2, name: 'draggable 3', color: '#6666ff' },
        { id: 3, name: 'draggable 4', color: '#aaaa00' },
        { id: 4, name: 'draggable 5', color: '#ff00ff' },
        { id: 124, name: 'draggable 6', color: '#00ffff' },
      ],

      //markerPlaceDay: undefined,
      //markerPlacePost: undefined,

      markerWorkerID: undefined,

      higherBarView: 'in'


    }
  }

  // placeMarker7 = (localDayInd4, localPostInd4) => {

  //   if (this.state.markerPlaceDay !== localDayInd4 || this.state.markerPlacePost !== localPostInd4) {

  //     //while draging worker ticket over the post componet and...
  //     //by compering the local indexes of the post componet to the global index of the mouse
  //     //the shift marker will appear in the right day/post while draging over that component

  //     this.setState({ markerPlaceDay: localDayInd4 })
  //     this.setState({ markerPlacePost: localPostInd4 })

  //   }

  // }

  deleteMarker7 = () => {

    //when dropping the shift or leaving the the drop area
    //the marker is deleted

    this.setState({ markerPlaceDay: undefined })
    this.setState({ markerPlacePost: undefined })

  }

  addShiftToDB7 = (workerInd5, dayInd5, postInd5, axisX5) => {

    // console.log('addShift');

    // console.log(workerInd5);
    // console.log(dayInd5);
    // console.log(postInd5);
    // console.log(axisX5);
    // console.log("");

    // console.log('clacShift');

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

    // console.log(endLimit);

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

    // console.log(strLimit);

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

    tempShiftDB[dayInd5].posts[postInd5].shifts.push({ workerId: workerInd5, shiftStart: shiftStart, shiftLength: shiftLength, shiftId: `d${dayInd5}p${postInd5}s${shiftStart}w${workerInd5}` })

    //sorting after adding shift

    for (let j = 0; j < tempShiftDB[dayInd5].posts[postInd5].shifts.length; j++) {

      for (let i = 0; i < tempShiftDB[dayInd5].posts[postInd5].shifts.length - 1 - j; i++) {

        let firstShift = tempShiftDB[dayInd5].posts[postInd5].shifts[i]
        let secondShift = tempShiftDB[dayInd5].posts[postInd5].shifts[i + 1]

        console.log(tempShiftDB[dayInd5].posts[postInd5].shifts[i].shiftStart);

        if (firstShift.shiftStart > secondShift.shiftStart) {

          let tempShift = tempShiftDB[dayInd5].posts[postInd5].shifts[i]
          tempShiftDB[dayInd5].posts[postInd5].shifts[i] = tempShiftDB[dayInd5].posts[postInd5].shifts[i + 1]
          tempShiftDB[dayInd5].posts[postInd5].shifts[i + 1] = tempShift


        }

      }
    }

    this.mergeShifts(tempShiftDB, dayInd5, postInd5, workerInd5, undefined, undefined, undefined)
    //this.setState({ shiftSet: tempShiftDB })

  }

  swapShifts6 = (srcDay, srcPost, srcShiftInd, srcWorkerId, srcNewShiftId, tgtDay, tgtPost, tgtShiftInd, tgtWorkerId, tgtNewShiftId) => {

    console.log('swap');

    let tempShiftDB = [...this.state.shiftSet]

    tempShiftDB[srcDay].posts[srcPost].shifts[srcShiftInd].workerId = tgtWorkerId
    tempShiftDB[srcDay].posts[srcPost].shifts[srcShiftInd].shiftId = srcNewShiftId

    tempShiftDB[tgtDay].posts[tgtPost].shifts[tgtShiftInd].workerId = srcWorkerId
    tempShiftDB[tgtDay].posts[tgtPost].shifts[tgtShiftInd].shiftId = tgtNewShiftId

    this.mergeShifts(tempShiftDB, srcDay, srcPost, srcWorkerId, tgtDay, tgtPost, tgtWorkerId)

  }

  mergeShifts = (tempShiftDB, dayInd1, postInd1, workerId1, dayInd2, postInd2, workerId2) => {

    console.log('merging');

    // console.log(tempShiftDB);

    // console.log(dayInd1);
    // console.log(postInd1);
    // console.log(workerId1);

    if (workerId2 === undefined) {

      for (let k = 0; k < 2; k++) {

        // --- need to run the whole thing twice in order to account for merging 3 shifts ---

        for (let shiftInd = 0; shiftInd < tempShiftDB[dayInd1].posts[postInd1].shifts.length - 1; shiftInd++) {

          console.log(tempShiftDB[dayInd1].posts[postInd1].shifts);

          let firstShift = tempShiftDB[dayInd1].posts[postInd1].shifts[shiftInd]
          let secondShift = tempShiftDB[dayInd1].posts[postInd1].shifts[shiftInd + 1]

          console.log(firstShift);
          console.log(secondShift);

          if (firstShift.shiftStart + firstShift.shiftLength === secondShift.shiftStart && firstShift.workerId === secondShift.workerId) {

            tempShiftDB[dayInd1].posts[postInd1].shifts.push({ workerId: firstShift.workerId, shiftStart: firstShift.shiftStart, shiftLength: firstShift.shiftLength + secondShift.shiftLength, shiftId: `d${dayInd1}p${postInd1}s${firstShift.shiftStart}w${workerId1}` })

            let localShiftNum = tempShiftDB[dayInd1].posts[postInd1].shifts.length

            let newMergedShift = tempShiftDB[dayInd1].posts[postInd1].shifts[localShiftNum - 1]

            tempShiftDB[dayInd1].posts[postInd1].shifts[shiftInd] = newMergedShift

            tempShiftDB[dayInd1].posts[postInd1].shifts.splice(shiftInd + 1, 1)

            tempShiftDB[dayInd1].posts[postInd1].shifts.pop()

          }

        }

      }

    } else if (workerId2 !== undefined) {

      console.log('merging after swaping');


      for (let k = 0; k < 2; k++) {

        for (let shiftInd = 0; shiftInd < tempShiftDB[dayInd2].posts[postInd2].shifts.length - 1; shiftInd++) {

          console.log(tempShiftDB[dayInd2].posts[postInd2].shifts);

          let firstShift = tempShiftDB[dayInd2].posts[postInd2].shifts[shiftInd]
          let secondShift = tempShiftDB[dayInd2].posts[postInd2].shifts[shiftInd + 1]

          console.log(firstShift);
          console.log(secondShift);

          if (firstShift.shiftStart + firstShift.shiftLength === secondShift.shiftStart && firstShift.workerId === secondShift.workerId) {

            tempShiftDB[dayInd2].posts[postInd2].shifts.push({ workerId: firstShift.workerId, shiftStart: firstShift.shiftStart, shiftLength: firstShift.shiftLength + secondShift.shiftLength, shiftId: `d${dayInd2}p${postInd2}s${firstShift.shiftStart}w${workerId1}` })

            let localShiftNum = tempShiftDB[dayInd2].posts[postInd2].shifts.length

            let newMergedShift = tempShiftDB[dayInd2].posts[postInd2].shifts[localShiftNum - 1]

            tempShiftDB[dayInd2].posts[postInd2].shifts[shiftInd] = newMergedShift

            tempShiftDB[dayInd2].posts[postInd2].shifts.splice(shiftInd + 1, 1)

            tempShiftDB[dayInd2].posts[postInd2].shifts.pop()

          }

        }

        for (let shiftInd = 0; shiftInd < tempShiftDB[dayInd1].posts[postInd1].shifts.length - 1; shiftInd++) {

          console.log(tempShiftDB[dayInd1].posts[postInd1].shifts);

          let firstShift = tempShiftDB[dayInd1].posts[postInd1].shifts[shiftInd]
          let secondShift = tempShiftDB[dayInd1].posts[postInd1].shifts[shiftInd + 1]

          console.log(firstShift);
          console.log(secondShift);

          if (firstShift.shiftStart + firstShift.shiftLength === secondShift.shiftStart && firstShift.workerId === secondShift.workerId) {

            tempShiftDB[dayInd1].posts[postInd1].shifts.push({ workerId: firstShift.workerId, shiftStart: firstShift.shiftStart, shiftLength: firstShift.shiftLength + secondShift.shiftLength, shiftId: `d${dayInd1}p${postInd1}s${firstShift.shiftStart}w${workerId2}` })

            let localShiftNum = tempShiftDB[dayInd1].posts[postInd1].shifts.length

            let newMergedShift = tempShiftDB[dayInd1].posts[postInd1].shifts[localShiftNum - 1]

            tempShiftDB[dayInd1].posts[postInd1].shifts[shiftInd] = newMergedShift

            tempShiftDB[dayInd1].posts[postInd1].shifts.splice(shiftInd + 1, 1)

            tempShiftDB[dayInd1].posts[postInd1].shifts.pop()

          }

        }

      }

    }



    //this.setState({ shiftSet: tempShiftDB })

  }


  bringWorkerID7 = (workerID) => {

    //may use this function later
    //console.log(workerID);

    //this.setState({ markerWorkerID: workerID })

  }

  higherBarView = () => {

    if (this.state.higherBarView === 'in') {

      return (

        <div style={{ display: 'flex', position: "relative" }}>

          <div>
            <Link to='/login'>
              <button>log in</button>
            </Link>
          </div>

          <div>
            <Link to='/signup'>
              <button>signup</button>
            </Link>
          </div>

        </div>

      )

    } else if (this.state.higherBarView === 'out') {

      return (

        <div style={{ display: 'flex', position: "relative" }}>

          <div style={{marginRight: '10px'}}>
            hello user
          </div>

          <div>
            <Link to='/'>
              <button onClick={() => this.setState({ higherBarView: 'in' })}>logout</button>
            </Link>
          </div>

        </div>

      )

    }

  }

  lowerBarView = () => {

    if (this.state.higherBarView === 'in') {

      return (

        <div style={{ display: 'flex', position: "relative" }}>



        </div>

      )

    } else if (this.state.higherBarView === 'out') {

      return (

        <div style={{ display: 'flex', position: "relative" }}>

          <div>
            <Link to='/planner'>
              <button>Planner</button>
            </Link>
          </div>

          <div>
            <Link to='/personal'>
              <button>Personal</button>
            </Link>
          </div>

          <div>
            <Link to='/setplanner'>
              <button>Set Planner</button>
            </Link>
          </div>

          <div>
            <Link to='/history'>
              <button>History</button>
            </Link>
          </div>

        </div>

      )

    }




  }


  login = () => {

    this.setState({ higherBarView: 'out' })

  }




  render() {

    return (
      <div>



        <Router>

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: "relative",

          }}>

            <div style={{ alignSelf: 'flex-end' }}>{this.higherBarView()}</div>



          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            position: "relative",

          }}>

            <div style={{ alignSelf: 'center' }}>{this.lowerBarView()}</div>

          </div>

          <Switch>



            <Route exact path='/planner' component={() => {
              return <Planner
                //placeMarker6={this.placeMarker7}
                deleteMarker6={this.deleteMarker7}
                addShiftToDB6={this.addShiftToDB7}
                bringWorkerID6={this.bringWorkerID7}
                swapShifts5={this.swapShifts6}

                workerDB1={this.state.workerDB}
                markerWorkerID1={this.state.markerWorkerID}
                shiftSet1={this.state.shiftSet}

                //markerPlaceDay1={this.state.markerPlaceDay}
                //markerPlacePost1={this.state.markerPlacePost}

              />
            }} />

            <Route exact path='/personal' component={() => {
              return <Personal
                workerDB={this.state.workerDB}

              />
            }} />

            {this.state.workerDB.map((o, i) => {
              return (
                <Route exact path={`/worker${o.id}`} key={i} component={() => {
                  return <Worker
                    workerDB={this.state.workerDB}
                    workerID={o.id}
                    key={i}
                  />
                }} />
              )
            })}


            <Route exact path='/history' component={() => {
              return <Gistory

              />
            }} />

            <Route exact path='/setplanner' component={() => {
              return <SetPlan

              />
            }} />


            <Route exact path='/' component={() => {
              return <HomePage

              />
            }} />
            <Route exact path='/login' component={() => {
              return <Login
                login={this.login}
              />
            }} />
            <Route exact path='/signup' component={() => {
              return <SignUp

              />
            }} />



          </Switch>






        </Router>

      </div>
    )
  }
}
