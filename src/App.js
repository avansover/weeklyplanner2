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

    this.setState({shiftSet: shiftDB})



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
                deleteMarker6={this.deleteMarker7}
                deleteShift={this.deleteShift}

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
    )
  }
}
