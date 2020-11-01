import React,{Component} from 'react';

const number =["0","15","30","40"]


class Counter extends Component{
    constructor(props){
     super(props)
     this.state = {
        count: 0
     };
    }
    
    increment = () => {
     this.setState({
         count: this.state.count +1
     });
    };
    
 render(){
        return (
            <div>
                <p>Count:{number[this.state.count]}</p>
                <button onClick={this.increment}>scored</button>
            </div>
        )
    }
}

export default Counter;