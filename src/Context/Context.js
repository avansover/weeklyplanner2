import React, { createContext, Component } from 'react';


export const Context = createContext();

export default class ContextProvider extends Component {

    state = {

        // marker
        globalMarkDay: undefined,
        globalMarkPost: undefined,

        // resizing data

        shiftLeftFinal: undefined,
        shiftLengthFinal: undefined,
        workerId: undefined,
        dayInd: undefined,
        postInd: undefined,


    }

    setMarkerIndCon = (dayInd, postInd) => {

        // console.log('function inside context');
        // console.log(dayInd);
        // console.log(postInd);
        this.setState({ globalMarkDay: dayInd, globalMarkPost: postInd })

    }

    setResizeDataCon = (shiftLeftFinal, shiftLengthFinal, workerId, dayInd, postInd) => {

        this.setState({ shiftLeftFinal, shiftLengthFinal, workerId, dayInd, postInd })

    }

    render() {

        return (

            <Context.Provider value={{
                ...this.state,
                setMarkerInd: this.setMarkerIndCon,
                setResizeData: this.setResizeDataCon,
            }}>
                {this.props.children}
            </Context.Provider>

        )
    }
}
