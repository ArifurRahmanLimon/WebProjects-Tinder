import React, { Component } from 'react';
import Header from './Header';
import TinderCards from './TinderCard';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <Header />
            <TinderCards />
            </div>
        );
    }
}
 
export default App;