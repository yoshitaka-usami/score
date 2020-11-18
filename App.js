import React,{Component} from 'react';
import Counter from './Score';
import './App.css';



class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>score</h1>
        <Counter />
      </div>
    )
  }
}

export default App;
