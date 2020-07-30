import React, { createContext, Component } from 'react';


export const DragDataContext = createContext();

export default class DragDataContextProvider extends Component {

    state = {

        test: '1234'

    }

  

    render() {

        return (

            <DragDataContext.Provider value={{
                ...this.state,
              
            }}>
               

            </DragDataContext.Provider>

        )
    }
}
