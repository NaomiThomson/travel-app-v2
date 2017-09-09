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
          <div className="col-md-12 col-lg-12">
            <Link to={`/journey/${journey._id}`} className="nav-link col-md-8 col-lg-8">
              <div className="card animated fadeIn">
                <div className="card-block">
                  <h4 className="card-title menu-title"> {journey.title}  </h4>
                </div>
              </div>
            </Link>
            {/* <Link to={`/journey/edit/${journey._id}`} className="nav-link col-md-4 col-lg-4">Edit</Link> */}
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