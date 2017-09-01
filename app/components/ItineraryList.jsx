var React = require('react');
var { connect } = require('react-redux');
var { Link, Link } = require('react-router');
var axios = require('axios');
var actions = require('actions');
import ItineraryLink from 'ItineraryLink';

var ItineraryList = React.createClass({
  componentWillMount: function () {
    this.getItineraryList();
  },
  getItineraryList: function () {
    let { dispatch, sessionInfo } = this.props;

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.get('https://powerful-cliffs-81990.herokuapp.com/itinerary/me', headerConfig)
      .then((res) => {
        dispatch(actions.setItineraryList(res.data.itinerary));
      })
      .catch((err) => {
        console.log(err)
      });

  },
  renderItineraryList: function () {

    let { itineraryList } = this.props;

    if (itineraryList.length > 0) {
      return itineraryList.map(function (itinerary) {
        return (
          <div className="col-md-12 col-lg-4">
            <ItineraryLink {...itinerary} />
          </div>
        )
      })

    } else {
      return (
        <div>
          Please log in first!
        </div>
      )
    }

  },
  render: function () {
    return (
      <div>
        {this.renderItineraryList()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ItineraryList);