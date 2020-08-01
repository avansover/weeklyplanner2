import React, { createContext, Component } from 'react';


export const Context = createContext();

export default class ContextProvider extends Component {

    state = {

        globalMarkDay: undefined,
        globalMarkPost: undefined,

    }

    setMarkerIndCon = (dayInd, postInd) => {

        // console.log('function inside context');
        // console.log(dayInd);
        // console.log(postInd);
        this.setState({ globalMarkDay: dayInd, globalMarkPost: postInd })

    }



    render() {

        return (

            <Context.Provider value={{
                ...this.state,
                setMarkerInd: this.setMarkerIndCon,
            }}>
                {this.props.children}
            </Context.Provider>

        )
    }
}
