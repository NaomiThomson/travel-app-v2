var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');
import 'react-date-picker/index.css'
import moment from 'moment'
import { DateField, Calendar } from 'react-date-picker'
import StartDate from 'StartDate'
import EndDate from 'EndDate'


var CreateItinerary = React.createClass({
  onClick: function (e) {
    e.preventDefault();


    let { dispatch, sessionInfo, currentItinerary } = this.props;

    // temporarily hard coding dates
    let payload =
      {
        startDate: startDate,
        endDate: endDate,
        location: this.refs.location.value
      };

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.post('https://powerful-cliffs-81990.herokuapp.com/itinerary', payload, headerConfig)
      .then((res) => {
        let currentItinerary = {
          startDate: startDate,
          endDate: endDate,
          location: res.data.location,
          id: res.data._id,
          creator: res.data._creator
        }
        dispatch(actions.setCurrentItinerary(currentItinerary));
        this.props.history.push(`itinerary/${res.data._id}`);
      })
      .catch((e) => {
        console.log(e)
      });

  },
  render: function () {
    let date = '';

    return (
      <div>
        Location
        <form>
          <input ref="location" type="text" />
        </form>

        Start Date
        <br />
        <StartDate />
        <br />


        End Date
        <br />
        <EndDate />
        <br />

        <button onClick={this.onClick} classLocation="btn" type="submit"> Enter </button>

      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(CreateItinerary);