import React, { Component } from 'react';
import IssuerForm from './components/IssuerForm';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentWillMount(){
  }

  render(){
    return(
      <div>
        <IssuerForm />
      </div>
    )
  }
}

export default App;
