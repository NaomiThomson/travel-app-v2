var React = require('react');
var { Link, IndexLink, hashHistory} = require('react-router');
var { connect } = require('react-redux');
var actions = require('actions');


var Navigation = React.createClass({
  renderLoginLogout: function () {
    let {sessionInfo} = this.props;

    if (sessionInfo.loggedIn) {
      return "Logout"
    } else {
      return "Login"
    }
  },
  handleClick: function () {
    let { sessionInfo } = this.props;
    let {dispatch} = this.props;

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
        {/*<Link to="/login" className="nav-link"> Login </Link>*/}
        <p className="nav-link" onClick={this.handleClick}>{this.renderLoginLogout()}</p>
        <Link to="/create" className="create-link">Create</Link>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Navigation);