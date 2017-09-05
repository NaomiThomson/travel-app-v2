var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var EditItinerary = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();

    let { dispatch, sessionInfo, tripDetails } = this.props;


  },

  render: function () {

    let { currentItinerary } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Destination</label>
          <div>
            <input type="text" name="destination" defaultValue={currentItinerary.location}/>
          </div>
        </div><br />

        <div>
          <label>Start Date</label>
          <div>
            <input type="text" name="startDate" defaultValue={currentItinerary.startDate.split('T')[0]} />
          </div>
        </div><br />

        <div>
          <label>End Date</label>
          <div>
            <input type="text" name="endDate" defaultValue={currentItinerary.endDate.split('T')[0]} />
          </div>
        </div><br />

        <div>
          <label>Comments</label>
          <div>
            <textarea name="comments"></textarea>
          </div>
        </div><br />

        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>

    )
  }

})

export default connect(
  (state) => {
    return state;
  }
)(EditItinerary);