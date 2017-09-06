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
          id: res.data.itinerary._id
        }
        dispatch(actions.setCurrentItinerary(currentItinerary));
        this.getCoordinates();
        this.props.history.push('/map');
      })
      .catch((e) => {
        console.log(e)
      });


  },

  getCoordinates: function () {

    console.log('getting coords')
    let { dispatch, currentItinerary } = this.props;

    if (location) {
      var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${currentItinerary.location}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;
      axios.get(query)
        .then((res) => {
          console.log(res.data)
          dispatch(actions.setCoords(res.data.results[0].geometry.location));
        })
        .catch((err) => {
          console.log(err)
        })
    }
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