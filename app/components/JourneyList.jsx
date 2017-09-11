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
          <div className="col s12 m4">
            <Link to={`/journey/edit/${journey._id}`}>
              <div className="card" style={{ backgroundColor: "#202030"}}>
                <div className="card-content white-text">
                  <span className="card-title">{journey.destination}</span>
                  <p>Click to edit</p>
                </div>
              </div>
            </Link>
          </div>
        )
      })

    } else {
      return (
        <div className="row">
          No journeys to view
        </div>
      )
    }

  },
  render: function () {
    return (
      <div className="row" style={{ margin: "100px" }}>
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