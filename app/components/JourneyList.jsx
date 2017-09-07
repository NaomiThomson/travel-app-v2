var React = require('react');
var { connect } = require('react-redux');
var { Link, Link } = require('react-router');
var axios = require('axios');
var actions = require('actions');
import JourneyLink from 'JourneyLink';

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

    let { JourneyList } = this.props;

    if (JourneyList.length > 0) {
      return JourneyList.slice(0).reverse().map(function (journey) {
        return (
          <div className="col-md-12 col-lg-4">
            <JourneyLink {...journey} />
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