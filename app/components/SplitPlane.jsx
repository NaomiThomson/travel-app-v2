var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');

function Contacts() {
  return <button type="submit">Delete</button>;
}

function Chat() {
  return <div className="Chat">
    <Link to="/edit">Edit</Link>
    <button onClick={this.onClick} classLocation="btn" type="submit">Delete</button>
  </div>;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

export default connect(
  (state) => {
    return state;
  }
)(App);