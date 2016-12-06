import React from 'react';
import TimeStore from '../stores/TimeStore';
import TodoActions from '../actions/TimeActions';

function Items(props){
  let listItems = props.allItem.map((item, i) =>
    <li key={i}>{item} <a style={{color: 'red'}}>x</a></li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class TimeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : this.props.value || '',
      allItem: TimeStore.getAll()
    }
  }

  componentDidMount() {
    TimeStore.on('change', this._onChange)
  }

  render(){
    return (
      <div>
        <input value={this.state.value} onChange={this._onChangeInput} />
        <button onClick={this._onCreate}>add</button>
        <Items allItem={this.state.allItem} />
      </div>
    )
  }

  _onChange = () => {
    this.setState({
      allItem: TimeStore.getAll()
    });
  }

  _onCreate = (e) => {
    TodoActions.create(this.state.value);
    this.setState({
      value: ''
    })
  }

  _onChangeInput = (e) => {
    this.setState({
      value: e.target.value
    })
  }
}


export default TimeApp;