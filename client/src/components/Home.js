import React, { Component } from 'react'
import { getSum } from '../actions/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                This is the homepage
            </div>
         );
    }
}
 
export default Home;