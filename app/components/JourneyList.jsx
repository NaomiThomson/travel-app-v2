var React = require('react');
var { connect } = require('react-redux');
var { Link, Link } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var JourneyList = React.createClass({
  componentWillMount: function () {
    this.getJourneyList();
  },

  getJourneyList: function () {
    let { dispatch, sessionInfo } = this.props;

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.get('https://powerful-cliffs-81990.herokuapp.com/journey/me', headerConfig)
      .then((res) => {
        dispatch(actions.setJourneyList(res.data.journey));
      })
      .catch((err) => {
        console.log(err)
      });

  },

  renderJourneyList: function () {

    let { journeyList } = this.props;

    if (journeyList.length > 0) {
      return journeyList.slice(0).reverse().map(function (journey) {
        return (
          <div className="row">
            <div className="col s12 m6 l6 x6">
              <Link to={`/journey/${journey._id}`} className="col m6 col l6">
                <div className="card animated fadeIn">
                  <div className="card-block">
                    <h4 className="card-title menu-title"> {journey.destination}  </h4>
                  </div>
                </div>
              </Link>
              <Link to={`/journey/edit/${journey._id}`} className="nav-link col-md-4 col-lg-4">Edit</Link>
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
        {this.renderJourneyList()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(JourneyList);