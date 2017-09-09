var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');



var Signup = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    let {dispatch} = this.props;

    let payload = {
      username: this.refs.SignupUsername.value,
      email: this.refs.SignupEmail.value,
      password: this.refs.SignupPassword.value
    }

    axios.post('https://powerful-cliffs-81990.herokuapp.com/users', payload)
      .then((res) => {
        console.log(res);
        let sessionInfo = {
          username: res.data.username,
          token: res.headers['x-auth'],
          id: res.data._id,
          loggedIn: true
        }
        dispatch(actions.setSessionInfo(sessionInfo));
        console.log(this.props);
        this.props.history.push('/');
      }).catch((e) => {
        console.log(e);
      })

  },
  render: function () {
    return (
      <div id="signreg">
        <form ref="form" onSubmit={this.onFormSubmit} className="animated fadeIn">
          <div className="form-group">
            <label for="SignupUsername"> Username </label>
            <input type="text" className="form-control" id="SignupUsername" ref="SignupUsername" />
          </div>

          <div className="form-group">
            <label for="SignupEmail"> Email </label>
            <input type="email" className="form-control" id="SignupEmail" ref="SignupEmail" />
          </div>

          <div className="form-group">
            <label for="SignupPassword"> Password </label>
            <input type="password" className="form-control" id="SignupPassword" ref="SignupPassword" />
          </div>

          <button type="submit" className="btn btn-primary">Signup</button>
        </form>
        <p id="signyet"> Already have an account?  <Link to="/login">  Login! </Link> </p>
      </div>
    );
  }
});

export default connect()(Signup);