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
  renderMyJourneys: function () {
    let { sessionInfo } = this.props;

    if (sessionInfo.loggedIn) {
      return <Link to="/myjourneys">My Journeys</Link>
    }
  },
  renderAllJourneys: function () {
    return <Link to="/alljourneys">All Journeys</Link>
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
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded" id="navbarComplete">

          <IndexLink to="/" className="nav-link"> Home </IndexLink>

          <p className="nav-link" onClick={this.handleLoginLogoutClick}>{this.renderLoginLogout()}</p>

          <p className="nav-link">{this.renderCreate()}</p>

          <p className="nav-link">{this.renderMyJourneys()}</p>

          <p className="nav-link">{this.renderAllJourneys()}</p>
        </nav>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Navigation);