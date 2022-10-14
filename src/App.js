import React, { Component } from 'react';
import Header from './Header';
import TinderCards from './TinderCard';
import SwipeButton from './SwipeButton';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <Header />
            <TinderCards />
            <SwipeButton />
            </div>
        );
    }
}
 
export default App;