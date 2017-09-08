var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var CreateJourney = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    let { dispatch, sessionInfo } = this.props;

    let payload = {
      startDate: "2017-10-19",
      endDate: "2018-10-19",
      title: this.refs.title.value,
      destination: this.refs.destination.value
    };

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.post('https://powerful-cliffs-81990.herokuapp.com/journey', payload, headerConfig)
      .then((res) => {
        dispatch(actions.setCurrentJourney({
          id: res.data._id
        }));
        this.props.history.push(`journey/${res.data._id}`);
      }).catch((e) => {
        console.log(e);
      });

  },
  render: function () {
    return (
      <div>
        Create Journey Component
        <form ref="form" onSubmit={this.onFormSubmit}>
          <input ref="title" type="text" />
          <input ref="destination" type="text" />
          <button type="submit"> Take Off!</button>
        </form>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(CreateJourney);