import React, { Component } from 'react'
import { getSum } from '../actions/actions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.numOneRef = React.createRef();
        this.numTwoRef = React.createRef();
        this.state = { 
            sum: 0
         }
    }

    // handles the submission of the form data asynchronously on button click
    handleSubmit = async (e) => {
        e.preventDefault();
        const numOne = parseInt(this.numOneRef.current.value);
        const numTwo = parseInt(this.numTwoRef.current.value);

        console.log(numOne + " " + typeof numOne);

        if (isNaN(numOne) || isNaN(numTwo))
        {
            alert("Please ensure that both fields contain numbers");
            this.numOneRef.current.focus();
        }
        else {
            const result = await getSum(numOne,numTwo); 
            this.setState({
                sum: result.sum
            });
        }

    }

    render() { 
        return ( 
            <div className="main-container">
                <h1>Frontend</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.numOneRef} required placeholder="Enter first number" />
                    <input type="text" ref={this.numTwoRef} required placeholder="Enter second number" />
                    <button type="submit">Add</button>
                </form>

                <p>The sum of both numbers is: <span className="sum">{this.state.sum}</span></p>
            </div>
         );
    }
}
 
export default Home;