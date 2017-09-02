var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var Itinerary = React.createClass({
  onClick: function () {

    let { currentItinerary, sessionInfo } = this.props;

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.delete(`https://powerful-cliffs-81990.herokuapp.com/itinerary/${currentItinerary._id}`, headerConfig)
    .then((res) => {
      console.log(res)
      this.props.history.push('/itineraries')
    })
    .catch((e) => {
      console.log(e)
    })

  },

  render: function () {
    let { currentItinerary } = this.props;

    return (
      <div>
        {currentItinerary.location}<br/>
        {currentItinerary.startDate}<br/>
        {currentItinerary.endDate}<br/>

        <button onClick={this.onClick} classLocation="btn" type="submit">Delete</button>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Itinerary);