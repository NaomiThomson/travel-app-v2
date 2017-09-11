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
        if (journey.hasFile){
          return (
            <div className="col s12 m4">
              <Link to={`/journey/${journey._id}`}>
                <div className="card" style={{ backgroundColor: "#202030"}}>
                  <div className="card-image">
                    <img src={`https://powerful-cliffs-81990.herokuapp.com/files/journey/${journey._id}`} />
                  </div>
                  <div className="card-content white-text">
                    <h4 className="card-title"> {journey.destination}  </h4>
                  </div>
                </div>
              </Link>
            </div>
          )
        } else {
          return (
            <div className="col s12 m4">
              <Link to={`/journey/${journey._id}`}>
                <div className="card" style={{ backgroundColor: "#202030" }}>
                  <div className="card-image">
                    <img src="./images/default.jpg"/>
                    {/*<img src="http://wallpaperpulse.com/img/568509.jpg"/>*/}
                  </div>
                  <div className="card-content white-text">
                    <h4 className="card-title"> {journey.destination}  </h4>
                  </div>
                </div>
              </Link>
            </div>
          )
        }
        
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
      <div style={{ marginTop: "100px" }} className="row">
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