import React, { createContext, Component } from 'react';

export const MarkerContext = createContext();



export default class MarkerContextProvider extends Component {

    state = {

        globalMarkDay: undefined,
        globalMarkPost: undefined

    }


    placeMarkerCon = (d, p) => {

        console.log('function inside context');
        console.log(d);
        console.log(p);
        this.setState({globalMarkDay: d, globalMarkPost: p})

    }

    render() {

        return (

            <MarkerContext.Provider value={{ ...this.state, placeMarker: this.placeMarkerCon }}>

                {this.props.children}

            </MarkerContext.Provider>

        )
    }
}
