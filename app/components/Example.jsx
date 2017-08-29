var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var Example = React.createClass({
  getInfo: function() {
    let {sessionInfo} = this.props;

    console.log(sessionInfo.id)
  },
  pushInfo: function() {
    let {dispatch} = this.props;

    let random = 'random';

    dispatch(actions.setExample(random));

  },
  render: function() {
    <div>
      Hey
    </div>
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Example);