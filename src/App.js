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
        { name: 'Su', shifts: [{ name: 'post1' }, { name: 'post2' }, { name: 'post3' }] },
        { name: 'Mo', shifts: [{ name: 'post6' }, { name: 'post7' }, { name: 'post8' }] },
        { name: 'Tu', shifts: [{ name: 'post1' }, { name: 'post2' }, { name: 'post3' }] },
        { name: 'We', shifts: [{ name: 'post1' }, { name: 'post2' }, { name: 'post3' }] },
        { name: 'Th', shifts: [{ name: 'post1' }, { name: 'post2' }, { name: 'post3' }] },
        { name: 'Fr', shifts: [{ name: 'post1' }, { name: 'post2' }, { name: 'post3' }] },
        { name: 'Sa', shifts: [{ name: 'post1' }, { name: 'post2' }, { name: 'post3' }] },
      ],

      shiftsDB: [],

      workerDB: [
        { id: 0, name: 'Amir', color: '#ff0000' },
        { id: 1, name: 'Nadav', color: '#00aa00' },
        { id: 2, name: 'David', color: '#0000ff' },
      ],

      markerPlaceDay: undefined,
      markerPlacePost: undefined,

    }
  }

  placeMarker7 = (localDayInd4, localPostInd4) => {

    if (this.state.markerPlaceDay !== localDayInd4 || this.state.markerPlacePost !== localPostInd4) {

      // console.log(localDayInd4);
      // console.log(localPostInd4);

      this.setState({ markerPlaceDay: localDayInd4 })
      this.setState({ markerPlacePost: localPostInd4 })

    }

  }

  deleteMarker7 = () => {

    //console.log('deleteMarker7');

    this.setState({ markerPlaceDay: undefined })
    this.setState({ markerPlacePost: undefined })

  }

  addShiftToDB7 = (workerInd5, dayInd5, postInd5, axisX5) => {

    console.log('addShiftToDB7');

    console.log(workerInd5);
    console.log(dayInd5);
    console.log(postInd5);
    console.log(axisX5);
    
    

    //this.props.addShiftToDB6()
    
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
