var React = require('react');
var { connect } = require('react-redux');
var { Link, Link } = require('react-router');
var axios = require('axios');
var actions = require('actions');
// import JourneyLink from 'JourneyLink';

var AllJourneys = React.createClass({
  componentWillMount: function () {
    this.getJourneyListAll();
  },

  getJourneyListAll: function () {
    let { dispatch, sessionInfo } = this.props;

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.get('https://powerful-cliffs-81990.herokuapp.com/journey')
      .then((res) => {
        dispatch(actions.setJourneyListAll(res.data.journey));
      })
      .catch((err) => {
        console.log(err)
      });

  },

  renderJourneyListAll: function () {

    let { journeyListAll } = this.props;

    if (journeyListAll.length > 0) {
      return journeyListAll.slice(0).reverse().map(function (journey) {
        return (
          <div className="row">
            <div className="col s6 m6 l6">
              <Link to={`/journey/${journey._id}`}>
                <div className="card animated fadeIn">
                  <div className="card">
                    <h4 className="card-panel teal"> {journey.destination}  </h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )
      })

    } else {
      return (
        <div>
          No journeys to view
        </div>
      )
    }

  },
  render: function () {
    return (
      <div>
        {this.renderJourneyListAll()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(AllJourneys);