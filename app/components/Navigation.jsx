var React = require('react');
var { Link, IndexLink, hashHistory } = require('react-router');
var { connect } = require('react-redux');
var actions = require('actions');


var Navigation = React.createClass({
  renderCreate: function () {
    let { sessionInfo } = this.props;

    if (sessionInfo.loggedIn) {
      return <Link to="/create">Create</Link>
    }
  },
  renderMyItineraries: function () {
    let { sessionInfo } = this.props;

    if (sessionInfo.loggedIn) {
      return <Link to="/itineraries">My Itineraries</Link>
    }
  },
  renderLoginLogout: function () {
    let { sessionInfo } = this.props;

    if (sessionInfo.loggedIn) {
      return "Logout"
    } else {
      return "Login"
    }
  },
  handleLoginLogoutClick: function () {
    let { sessionInfo } = this.props;
    let { dispatch } = this.props;

    if (sessionInfo.loggedIn) {
      var sessionDefault = {
        username: undefined,
        token: undefined,
        id: undefined,
        loggedIn: false
      };
      dispatch(actions.setSessionInfo(sessionDefault));
      hashHistory.push('/');
    } else {
      hashHistory.push('/login');
    }
  },
  render: function () {
    return (
      <div>
        <IndexLink to="/" className="nav-link"> Home </IndexLink>

        <p className="nav-link" onClick={this.handleLoginLogoutClick}>{this.renderLoginLogout()}</p>

        <p className="nav-link">{this.renderCreate()}</p>

        <p className="nav-link">{this.renderMyItineraries()}</p>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Navigation);