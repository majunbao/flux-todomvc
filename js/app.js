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
      
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}

ReactDOM.render(
  <Comment date="222"/>,
  document.getElementById('todoapp')
);