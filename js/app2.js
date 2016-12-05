import React from 'react';
import ReactDOM from 'react-dom';
import {Dispatcher} from 'flux';
import {EventEmitter} from 'events';
import assign from 'object-assign';

// let TimeStore = {
//   graph: ['三角形', '正方形', '多边形']
// }

let AppDispatcher = new Dispatcher();

let TodoActions = {
  create: function(text){
    AppDispatcher.dispatch({
      actionType: 'create',
      text: text
    })
  }
}

let _graph = []
let TimeStore = assign({}, EventEmitter.prototype, {
  graph : _graph
})

function create(text){
  _graph.push(text);
}


AppDispatcher.register(function(action){
  create(action.text);
  TimeStore.emit('abc');
});

// setTimeout(function(){
//   TimeStore.emit('abc');
//   AppDispatcher.dispatch({
//     actionType: "nihao"
//   })
// }, 1500)

class Time extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      graph: TimeStore.graph,
      value: ''
    } 
  }

  componentDidMount = () => {
    TimeStore.on('abc', () => {
      this.setState({graph:TimeStore.graph})
    })
  }

  _onCreate = () => {
    TodoActions.create(this.state.value)
  }

  _onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {

    let g = this.state.graph.map((graph, index) => <li key={index}>{graph}</li>)

    return (
      <div>
        <input onChange={this._onChange} />
        <button onClick={this._onCreate}>add</button>
        <ul>{g}</ul>
      </div>
    )

  }
}

ReactDOM.render(
  <Time />,
  document.getElementById('todoapp')
)