var React = require('react');
var { Link, IndexLink, hashHistory } = require('react-router');
var { connect } = require('react-redux');
var actions = require('actions');


var Navigation = React.createClass({
  renderCreate: function () {
    let { sessionInfo } = this.props;

    if (sessionInfo.loggedIn) {
      return <Link to="/create" style={{ color: "#F4F2ED" }} className="waves-effect waves-teal btn-flat">Create</Link>
    }
  },
  renderMyJourneys: function () {
    let { sessionInfo } = this.props;

    if (sessionInfo.loggedIn) {
      return <Link to="/myjourneys" style={{ color: "#F4F2ED" }} className="waves-effect waves-teal btn-flat">My Journeys</Link>
    }
  },
  renderAllJourneys: function () {
    return <Link to="/alljourneys" style={{ color: "#F4F2ED" }} className="waves-effect waves-teal btn-flat">All Journeys</Link>
  },
  renderLoginLogout: function () {
    let { sessionInfo } = this.props;

    if (sessionInfo.loggedIn) {
      return (
        <div style={{ color: "#F4F2ED" }} > Logout </div>
      )
    } else {
      return (
        <div style={{ color: "#F4F2ED" }} > Login </div>
      )
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
      <nav style={{ backgroundColor: "#39393A" }} >
        <div className="nav-wrapper">
          <IndexLink to="/" className="brand-logo right hide-on-med-and-down">
            <h4 className="title animated fadeIn">MyTinerary</h4>
          </IndexLink>

          <ul id="nav-mobile" >
            {/*<li><IndexLink style={{ color: "#F4F2ED" }} to="/"> MyTinerary </IndexLink></li>*/}
            <li><a className="waves-effect waves-teal btn-flat" onClick={this.handleLoginLogoutClick}>{this.renderLoginLogout()}</a></li>
            <li>{this.renderCreate()} </li>
            <li>{this.renderMyJourneys()} </li>
            <li>{this.renderAllJourneys()} </li>
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