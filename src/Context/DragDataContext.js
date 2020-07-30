import React, { createContext, Component } from 'react';
import { ContextDevTool } from 'react-context-devtool';

export const DragDataContext = createContext();

export default class DragDataContextProvider extends Component {

    state = {

        globalMarkDay: undefined,
        globalMarkPost: undefined,

        // normal clone
        TTD: [{
            workerInd: undefined,
            dayInd: undefined,
            postInd: undefined,
            axisX: undefined
        }],

        //swap
        STS: [],

        //run over
        TTS: [],

        //move
        STD: [],

        //delete
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

            <DragDataContext.Provider value={{
                ...this.state,
                setMarkerInd: this.setMarkerIndCon,
                setCloneData: this.setCloneDataCon,
            }}>
                <ContextDevTool context={DragDataContext} id="DragDataContext" displayName="DragDataContext" />
                {this.props.children}

            </DragDataContext.Provider>

        )
    }
}
