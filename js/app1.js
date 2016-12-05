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
    <div>
      <Clock />,
      <Clock />,
      <Clock />
    </div>,
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

// ReactDOM.render(
//   <div>
//     <Clock />
//     <Clock />
//   </div>,
//   document.getElementById('todoapp')
// );

// setInterval(tick, 1000);

var user = {
  avataUrl:"2",
  name:"2"
}
// ReactDOM.render(
//   <Comment date="2222" author={user} />,
//   document.getElementById('todoapp')
// );


function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>Click me</a>
  )
}

class LoggingButton extends React.Component {
  handleClick = () => {
    console.log('this is :', this);
  }

  render() {
    return (
      <button onCLick={this.handleClick}>
        Click me
      </button>
    )
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
    Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

function Mailbox(props) {
  const unreadMessage = props.unreadMessage;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessage.length > 0 &&
        <h2>
          You have {unreadMessage.length} unread message.
        </h2>
      }
    </div>
  )
}
const message = ['React', 'Re: React', 'Re:Re'];

const numbers = [1, 2, 3, 4, 5, 6];
const listItems = numbers.map((number) => 
  <li>{number}</li>
);

function Numberlist(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    <li>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (e) => {
    this.setState({value: e.target.value.toUpperCase()});
  }

  handleSubmit = (e) => {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <lable>
          Name:
            <textarea type="text" value={this.state.value} onChange={this.handleChange} />
        </lable>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

class SelectForm extends React.Component {
  constructor(props) {
    super();
    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert('you:' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grepefruit</option>
            <option value="coconut">coconut</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

ReactDOM.render(
  <BoilingVerdict />,
  document.getElementById('todoapp')
)