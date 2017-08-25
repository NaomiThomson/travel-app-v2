var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');



var Login = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    let {dispatch} = this.props;

    let payload = {
      email: this.refs.loginEmail.value,
      password: this.refs.loginPassword.value
    }

    axios.post('https://powerful-cliffs-81990.herokuapp.com/users/login', payload)
      .then((res) => {
        console.log(res);
        let sessionInfo = {
          username: res.data.username,
          token: res.headers['x-auth'],
          id: res.data._id,
          loggedIn: true
        }
        dispatch(actions.setSessionInfo(sessionInfo));
        this.props.history.push('/');
      }).catch((e) => {
        console.log(e);
      })

  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onFormSubmit} className="animated fadeIn">        
          <div className="form-group">
            <label for="loginEmail"> Email </label>
            <input type="email" className="form-control" id="loginEmail" ref="loginEmail" />
          </div>

          <div className="form-group">
            <label for="loginPassword"> Password </label>
            <input type="password" className="form-control" id="loginPassword" ref="loginPassword" />
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p> Don't have an account yet?  <Link to="/signup"> Sign up! </Link> </p>
      </div>
    );
  }
});

export default connect()(Login);