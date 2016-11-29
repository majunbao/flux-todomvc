var React = require('react');
var ReactDOM = require('react-dom');



function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara"></Welcome>
      <Welcome name="Cahal"></Welcome>
      <Welcome name="Edite"></Welcome>
    </div>
  )
}
const element = <Welcome name="Sara" />;

function Comment(props) {
  return (
    <div className="Comment">
      <Avatar user={props.author} />
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avataUrl}
      alt={props.user.name}
    />
  )
}


function tick(){
  ReactDOM.render(
    <Clock />,
    document.getElementById('todoapp')
  );
}



class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('todoapp')
);

// setInterval(tick, 1000);

var user = {
  avataUrl:"2",
  name:"2"
}
// ReactDOM.render(
//   <Comment date="2222" author={user} />,
//   document.getElementById('todoapp')
// );