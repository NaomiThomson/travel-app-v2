var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');
import Upload from 'Upload';

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

          <Upload /><br /><br/><br/>

          <div><h5>Edit journey information</h5>
          </div><br />
          <form>
            <label>Title</label><br />
            <input type="text" ref="title" defaultValue={journeyInfo.title} /><br /><br />

            <label>Destination</label><br />
            <input type="text" ref="destination" defaultValue={journeyInfo.destination} /><br /><br />

            <label>Start Date</label><br />
            <input type="text" ref="startDate" defaultValue={journeyInfo.startDate.split('T')[0]} /><br /><br />

            <label>End Date</label><br />
            <input type="text" ref="endDate" defaultValue={journeyInfo.endDate.split('T')[0]} /><br /><br />

            <button style={{ backgroundColor: "#F0A202" }} className="btn" type="submit" onClick={this.handleInfoClick}>Submit</button>
          </form><br /><br/><br/>


          <div><h5>Add things to do or places to see</h5>
          </div><br />
          <div>
            {this.renderEntries()}
          </div><br />

          <form>
            <input type="text" ref="entry" /><br />

            <button style={{ backgroundColor: "#F0A202" }} className="btn" type="submit" onClick={this.handleEntryClick}>Submit</button>
          </form>

        </div>

      )
    } else {
      return 'Loading...'
    }
  },

  handleInfoClick: function (e) {
    e.preventDefault();

    let { dispatch, sessionInfo, journeyInfo } = this.props;

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

    axios.patch(`https://powerful-cliffs-81990.herokuapp.com/journey/${journeyInfo._id}`, payload, headerConfig)
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

      })
      .catch((e) => {
        console.log(e)
      });
  },

  getCoords: function (place) {

    var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;
    axios.get(query)
      .then((res) => {
        this.sendEntry(res.data.results[0].geometry.location);
      })
      .catch((err) => {
        console.log(err)
      })


  },

  sendEntry: function (coords) {

    let { sessionInfo, journeyInfo, dispatch } = this.props;

    let payload = {
      entryText: this.refs.entry.value,
      lat: coords.lat,
      lng: coords.lng
    };


    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    axios.patch(`https://powerful-cliffs-81990.herokuapp.com/journey/addentry/${journeyInfo._id}`, payload, headerConfig)
      .then((res) => {

        let result = res.data;

        dispatch(actions.setJourneyInfo({
          startDate: result.startDate,
          endDate: result.endDate,
          destination: result.destination,
          title: result.title,
          entries: result.entries,
          _creator: result._creator,
          _id: result._id
        }));
      })
      .catch((e) => {
        console.log(e)
      });
  },

  handleEntryClick: function (e) {
    e.preventDefault();

    let { dispatch, sessionInfo, journeyInfo } = this.props

    this.getCoords(this.refs.entry.value)

  },

  handleDeleteClick: function () {

    let { journeyInfo, sessionInfo } = this.props;

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    };

    let userConfirm = confirm('Are you sure you want to delete this journey? All contents will be lost.')

    if (userConfirm) {
      axios.delete(`https://powerful-cliffs-81990.herokuapp.com/journey/${journeyInfo._id}`, headerConfig)
        .then((res) => {
          this.props.history.push('/myjourneys')
        })
        .catch((e) => {
          console.log(e)
        })
    } 


  },

  render: function () {

    let { journeyInfo } = this.props;
    
    return (
      <div style={{ margin: "100px" }}>
        {this.renderForms()}<br /><br/><br/>
        
        <Link className="btn" style={{ backgroundColor: "#F0A202" }} to={`/journey/${journeyInfo._id}`}>Preview Journey</Link>
        <button style={{ backgroundColor: "#F0A202" }} className="btn" onClick={this.handleDeleteClick} type="submit">Delete Journey</button>
      </div>
    )
  }

})

export default connect(
  (state) => {
    return state;
  }
)(EditJourney);