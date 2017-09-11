var React = require('react')
var { connect } = require('react-redux')
var { Link, IndexLink } = require('react-router')
var axios = require('axios')
var actions = require('actions')
import 'react-date-picker/index.css'
import moment from 'moment'
import { DateField, Calendar } from 'react-date-picker'

var CreateJourney = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault()

    let { sessionInfo } = this.props

    let payload = {
      startDate: this.refs.startDate.value,
      endDate: this.refs.endDate.value,
      title: this.refs.title.value,
      destination: this.refs.destination.value
    }

    let headerConfig = {
      headers: { 'x-auth': sessionInfo.token }
    }

    axios.post('https://powerful-cliffs-81990.herokuapp.com/journey', payload, headerConfig)
      .then((res) => {
        this.props.history.push(`journey/${res.data._id}`)
      }).catch((e) => {
        console.log(e)
      })

  },


  render: function () {
    return (
      <div className="panel panel-default" style={{ marginTop: "100px" }}>
        <div className="panel-body">
          <form ref="form" onSubmit={this.onFormSubmit}>

            <label>Title</label><br />
            <input ref="title" type="text" placeholder="My Great Adventure!" /><br /><br />

            <label>Destination</label><br />
            <input ref="destination" type="text" placeholder="Portland, OR" /><br /><br />

            <label>Start Date</label><br />
            <input ref="startDate" type="text" placeholder="09-09-17" /><br /><br />

            <label>End Date</label><br />
            <input ref="endDate" type="text" placeholder="09-18-17" /><br /><br />

            <button style={{ backgroundColor: "#F0A202" }} className="waves-effect waves-light btn" type="submit">Let's Go!</button>
          </form>
        </div> 
      </div>
    )
  }
})

export default connect(
  (state) => {
    return state
  }
)(CreateJourney)