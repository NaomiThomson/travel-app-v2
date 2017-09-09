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
      <nav>
        <div className="nav-wrapper">
          <IndexLink to="/" className="brand-logo right hide-on-med-and-down">
            <h4 className="title animated fadeIn">MyTinerary</h4>
          </IndexLink>

          <ul id="nav-mobile">
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><a class="waves-effect waves-teal btn-flat" onClick={this.handleLoginLogoutClick}>{this.renderLoginLogout()}</a></li>
            <li><a class="waves-effect waves-teal btn-flat"> {this.renderCreate()} </a> </li>
            <li><a class="waves-effect waves-teal btn-flat">{this.renderAllJourneys()} </a> </li>
          </ul>
        </div>
      </nav>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Navigation);