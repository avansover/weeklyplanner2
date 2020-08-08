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
//import ContextProvider from './Context/Context.js';
//import { Context } from './Context/Context';
// import ContextProvider, { Context } from './Context/Context.js';

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
        { id: 0, firstName: 'first', lastName: 'last', color: '#ff0000' },
        { id: 1, firstName: 'drag', lastName: 'last', color: '#00aa00' },
        { id: 2, firstName: 'draggable 3', lastName: 'last', color: '#6666ff' },
        { id: 3, firstName: 'draggable 4', lastName: 'last', color: '#aaaa00' },
        { id: 4, firstName: 'draggable 5', lastName: 'last', color: '#ff00ff' },
        { id: 124, firstName: 'draggable 6', lastName: 'last', color: '#00ffff' },
      ],

      markerWorkerID: undefined,

      higherBarView: 'in'

    }
  }

  deleteMarker7 = () => {

    //when dropping the shift or leaving the the drop area
    //the marker is deleted

    this.setState({ markerPlaceDay: undefined })
    this.setState({ markerPlacePost: undefined })

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

          <div style={{ marginRight: '10px' }}>
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

  deleteShift = (shiftDB) => {

    this.setState({ shiftSet: shiftDB })

  }

  setResizeData = (resizer, shiftOldLeft, ShiftOldWidth, shiftLeftFinal, shiftLengthFinal, workerId, dayInd, postInd) => {

    console.log(resizer);

    var tempShiftDB = [...this.state.shiftSet]

    // console.log(tempShiftDB[dayInd].posts[postInd].shifts);

    // console.log(shiftLengthFinal);

    // if we just click the resizers, this one is undefined

    if (resizer === 'leftResizer' && shiftLeftFinal !== undefined) {

      console.log(resizer);

      for (let shiftInd = 0; shiftInd < tempShiftDB[dayInd].posts[postInd].shifts.length; shiftInd++) {

        // the if here check what shift we resize activly

        if (tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftStart === shiftOldLeft) {

          tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftStart = shiftLeftFinal
          tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftLength = shiftLengthFinal
          tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftId = `d${dayInd}p${postInd}s${shiftLeftFinal}w${workerId}`

          // this.setState({ shiftSet: tempShiftDB })

          // the if here check what shift we resize passivly

        } else if (tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftStart < shiftOldLeft) {

          // console.log(tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftStart);
          // console.log(tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftLength);

          let sideShiftStart = tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftStart
          let sideShiftLength = tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftLength

          if (shiftLeftFinal < sideShiftStart + sideShiftLength) {

            // console.log(tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftStart);
            // console.log(tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftLength);

            let newSideShiftLength = shiftLeftFinal - sideShiftStart

            if (newSideShiftLength > 0) {

              tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftLength = newSideShiftLength

            } else if (newSideShiftLength <= 0) {

              console.log(shiftInd);
              console.log(newSideShiftLength);

              tempShiftDB[dayInd].posts[postInd].shifts.splice(shiftInd, 1)

              shiftInd--


            }

          }

        }

      }

    } else if (resizer === 'rightResizer' && shiftLengthFinal !== undefined) {

      //console.log(resizer);

      //console.log(shiftLengthFinal);

      for (let shiftInd = 0; shiftInd < tempShiftDB[dayInd].posts[postInd].shifts.length; shiftInd++) {

        if (tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftStart === shiftOldLeft) {


          tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftLength = shiftLengthFinal
          tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftId = `d${dayInd}p${postInd}s${shiftOldLeft}w${workerId}`

          // the if here check what shift we resize passivly

        } else if (tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftStart > shiftOldLeft) {

          let sideShiftStart = tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftStart
          let sideShiftLength = tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftLength



          if (shiftOldLeft + shiftLengthFinal > sideShiftStart) {



            console.log(sideShiftStart);
            console.log(sideShiftLength);

            let newSideShiftLength = sideShiftStart + sideShiftLength - shiftOldLeft - shiftLengthFinal
            let newSideShiftLeft = shiftOldLeft + shiftLengthFinal

            if (newSideShiftLength > 0) {

              let SideShiftWorkerId = tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].workerId;

              tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftStart = newSideShiftLeft
              tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftLength = newSideShiftLength
              tempShiftDB[dayInd].posts[postInd].shifts[shiftInd].shiftId = `d${dayInd}p${postInd}s${newSideShiftLeft}w${SideShiftWorkerId}`

            } else if (newSideShiftLength <= 0) {

              tempShiftDB[dayInd].posts[postInd].shifts.splice(shiftInd, 1)

              shiftInd--

            }


          }

        }

      }

    }

    console.log(tempShiftDB[dayInd].posts[postInd].shifts);

    for (let shiftInd = 0; shiftInd < tempShiftDB[dayInd].posts[postInd].shifts.length - 1; shiftInd++) {

      //console.log(tempShiftDB[dayInd].posts[postInd].shifts);

      let firstShift = tempShiftDB[dayInd].posts[postInd].shifts[shiftInd]
      let secondShift = tempShiftDB[dayInd].posts[postInd].shifts[shiftInd + 1]

      // console.log(firstShift);
      // console.log(secondShift);

      if (firstShift.shiftStart + firstShift.shiftLength === secondShift.shiftStart && firstShift.workerId === secondShift.workerId) {

        tempShiftDB[dayInd].posts[postInd].shifts.push({ workerId: firstShift.workerId, shiftStart: firstShift.shiftStart, shiftLength: firstShift.shiftLength + secondShift.shiftLength, shiftId: `d${dayInd}p${postInd}s${firstShift.shiftStart}w${firstShift.workerId}` })

        let localShiftNum = tempShiftDB[dayInd].posts[postInd].shifts.length

        let newMergedShift = tempShiftDB[dayInd].posts[postInd].shifts[localShiftNum - 1]

        tempShiftDB[dayInd].posts[postInd].shifts[shiftInd] = newMergedShift

        tempShiftDB[dayInd].posts[postInd].shifts.splice(shiftInd + 1, 1)

        tempShiftDB[dayInd].posts[postInd].shifts.pop()

      }

    }



    // need to merge shifts
    this.setState({ shiftSet: tempShiftDB })

  }

  utility = () => {

    console.log('utility');

    console.log(this.state);

  }

  render() {

    return (
      //<ContextProvider>
      <div>

        <button onClick={() => this.utility()}>log state</button>

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
                deleteMarker6={this.deleteMarker7}
                deleteShift={this.deleteShift}

                setResizeData={this.setResizeData}


                bringWorkerID6={this.bringWorkerID7}

                workerDB1={this.state.workerDB}
                markerWorkerID1={this.state.markerWorkerID}
                shiftSet1={this.state.shiftSet}

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
      //</ContextProvider>

    )
  }
}
