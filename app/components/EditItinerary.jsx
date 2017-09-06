var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var EditItinerary = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();

    let { dispatch, sessionInfo, currentItinerary } = this.props;

    let payload =
      {
        startDate: this.refs.startDate.value,
        endDate: this.refs.endDate.value,
        location: this.refs.location.value
      };

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.patch(`https://powerful-cliffs-81990.herokuapp.com/itinerary/${currentItinerary._id}`, payload, headerConfig)
      .then((res) => {
        console.log(res.data);
        let currentItinerary = {
          startDate: res.data.itinerary.startDate,
          endDate: res.data.itinerary.endDate,
          location: res.data.itinerary.location,
          _id: res.data.itinerary._id,
          _creator: res.data.itinerary._creator
        }
        dispatch(actions.setCurrentItinerary(currentItinerary));
        this.props.history.push(`itinerary/${res.data._id}`);
      })
      .catch((e) => {
        console.log(e)
      });


  },

  render: function () {

    let { currentItinerary } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Destination</label>
          <div>
            <input type="text" ref="location" defaultValue={currentItinerary.location}/>
          </div>
        </div><br />

        <div>
          <label>Start Date</label>
          <div>
            <input type="text" ref="startDate" defaultValue={currentItinerary.startDate.split('T')[0]} />
          </div>
        </div><br />

        <div>
          <label>End Date</label>
          <div>
            <input type="text" ref="endDate" defaultValue={currentItinerary.endDate.split('T')[0]} />
          </div>
        </div><br />

        <div>
          <label>Comments</label>
          <div>
            <textarea ref="comments"></textarea>
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