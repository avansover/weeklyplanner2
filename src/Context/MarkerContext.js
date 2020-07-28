import React, { createContext, Component } from 'react';

export const MarkerContext = createContext();



export default class MarkerContextProvider extends Component {

    state = {

        globalMarkDay: undefined,
        globalMarkPost: undefined

    }


    setMarkerIndCon = (dayInd, postInd) => {

        // console.log('function inside context');
        // console.log(d);
        // console.log(p);
        this.setState({globalMarkDay: dayInd, globalMarkPost: postInd})

    }

    render() {

        return (

            <MarkerContext.Provider value={{ ...this.state, setMarkerInd: this.setMarkerIndCon }}>

                {this.props.children}

            </MarkerContext.Provider>

        )
    }
}
