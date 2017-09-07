var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var EditJourney = React.createClass({

  componentWillMount: function () {
    let { dispatch } = this.props;
    axios.get(`https://powerful-cliffs-81990.herokuapp.com/journey/${this.props.routeParams.id}`)
      .then((res) => {
        dispatch(actions.setJourneyInfo(res.data.journey));
      }).catch((e) => {
        console.log(e);
      })
  },

  renderEntries: function () {

    let { journeyInfo } = this.props;
    let entriesList = [];

    if (this.props.journeyInfo._id === this.props.routeParams.id) {

      return journeyInfo.entries.map(function (entry) {
        return (
          <div className="col-md-12 col-lg-4">
            {entry.entryText}
          </div>
        )
      })

    } else {
      return "Loading..."
    }

  },

  renderForms: function () {
    let { journeyInfo } = this.props;

    if (this.props.journeyInfo._id === this.props.routeParams.id) {
      return (
        <div>
          <div>Here you can edit title and destination. As well as start filling out individual entries! {this.props.routeParams.id}</div>

          <form>
            <label>Title</label>
            <input type="text" ref="title" defaultValue={journeyInfo.title} /><br />

            <label>Destination</label>
            <input type="text" ref="destination" defaultValue={journeyInfo.destination} /><br />

            <label>Start Date</label>
            <input type="text" ref="startDate" defaultValue={journeyInfo.startDate.split('T')[0]} /><br />

            <label>End Date</label>
            <input type="text" ref="endDate" defaultValue={journeyInfo.endDate.split('T')[0]} /><br />

            <button type="submit" onClick={this.handleInfoClick}>Submit</button>
          </form><br />

          <div>
            {this.renderEntries()}
          </div><br />

          <form>
            <label>Entry</label>
            <input type="text" ref="entry" /><br />

            <button type="submit" onClick={this.handleEntryClick}>Submit</button>
          </form>

        </div>

      )
    } else {
      return 'Loading...'
    }
  },

  handleInfoClick: function (e) {
    e.preventDefault();

    let { dispatch, sessionInfo, currentJourney } = this.props;

    let payload =
      {
        startDate: this.refs.startDate.value,
        endDate: this.refs.endDate.value,
        destination: this.refs.destination.value,
        title: this.refs.title.value
      };

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.patch(`https://powerful-cliffs-81990.herokuapp.com/journey/${currentJourney.id}`, payload, headerConfig)
      .then((res) => {

        let result = res.data.journey;

        dispatch(actions.setJourneyInfo({
          startDate: result.startDate,
          endDate: result.endDate,
          destination: result.destination,
          title: result.title,
          entries: result.entries,
          _creator: result._creator,
          _id: result._id
        }));

        console.log(res.data.journey)
      })
      .catch((e) => {
        console.log(e)
      });
  },

  handleEntryClick: function (e) {
    e.preventDefault();

    let { dispatch, sessionInfo, currentJourney } = this.props;

    let payload = {
      entries: this.refs.entry.value
    };

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.patch(`https://powerful-cliffs-81990.herokuapp.com/journey/addentry/${currentJourney.id}`, payload, headerConfig)
      .then((res) => {

        let result = res.data;
        console.log(res.data)

        dispatch(actions.setJourneyInfo({
          startDate: result.startDate,
          endDate: result.endDate,
          destination: result.destination,
          title: result.title,
          entries: result.entries,
          _creator: result._creator,
          _id: result._id
        }));

        console.log(res.data)
      })
      .catch((e) => {
        console.log(e)
      });

  },

  render: function () {
    return (
      <div>
        {this.renderForms()}
      </div>
    )
  }

})

export default connect(
  (state) => {
    return state;
  }
)(EditJourney);