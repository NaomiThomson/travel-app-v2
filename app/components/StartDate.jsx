var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');
import 'react-date-picker/index.css'
import moment from 'moment'
import { DateField, Calendar } from 'react-date-picker'



let startDateChosen = '';
let date = '';

var StartDate = React.createClass({
  pushStartDate: function () {
    let { dispatch } = this.props;
    dispatch(actions.setStartDate(startDateChosen));
    console.log(startDateChosen)
  },


  onChange: function (dateString, { dateMoment, timestamp }) {
    startDateChosen = dateString;
    console.log("start date: " + startDateChosen);

    this.pushStartDate();
  },

  render: function () {

    return (
      <div>
        <Calendar
          dateFormat="YYYY-MM-DD"
          date={date}
          onChange={this.onChange} />
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(StartDate);