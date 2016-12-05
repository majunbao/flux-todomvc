import React from 'react';
import TimeStore from '../stores/TimeStore';
import TodoActions from '../actions/TimeActions';

class TimeApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    TimeStore.on('change', this._onChange)
  }

  render(){
    let items = TimeStore.getAll().map(function(item){
      return <li>{item}</li>
    });

    return (
      <div>
        <input />
        <button onClick={this._onCreate}>add</button>
        <ul>{items}</ul>
      </div>
    )
  }

  _onChange = () => {
    this.setState(TimeStore.getAll());
  }

  _onCreate = (e) => {
    console.log(e.target)
    TodoActions.create('qwe');
  }
}


export default TimeApp;