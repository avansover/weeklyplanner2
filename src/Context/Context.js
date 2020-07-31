import React, { createContext, Component } from 'react';


export const Context = createContext();

export default class ContextProvider extends Component {

    state = {

        globalMarkDay: undefined,
        globalMarkPost: undefined,

        // normal clone Ticket to Drop
        TTD: [{
            workerInd: undefined,
            dayInd: undefined,
            postInd: undefined,
            axisX: undefined
        }],

        //swap Shift to Shift
        STS: [],

        //run over Ticket to Shift
        TTS: [],

        //move Shift to Drop
        STD: [],

        //delete Shift to Ticket
        STT: []

    }

    setMarkerIndCon = (dayInd, postInd) => {

        // console.log('function inside context');
        // console.log(d);
        // console.log(p);
        this.setState({ globalMarkDay: dayInd, globalMarkPost: postInd })

    }

    setCloneDataCon = (worker, day, post, axis) => {

        let tempTTD = [...this.state.TTD]

        // console.log(worker);
        // console.log(day);
        // console.log(post);
        // console.log(axis);

        tempTTD[0].workerInd = worker
        tempTTD[0].dayInd = day
        tempTTD[0].postInd = post
        tempTTD[0].axisX = axis

        //try and figure out why the setState is no needed

        this.setState({ TTD: tempTTD })

    }

    render() {

        return (

            <Context.Provider value={{
                ...this.state,
                setMarkerInd: this.setMarkerIndCon,
                setCloneData: this.setCloneDataCon,
            }}>
                {this.props.children}
               
            </Context.Provider>

        )
    }
}
