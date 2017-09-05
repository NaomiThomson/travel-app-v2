import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { load as loadAccount } from '../reducers/reducers.jsx'


let InitializeFromStateForm = props => {
  const { handleSubmit, load, pristine, reset, submitting } = props
  let { currentItinerary } = this.props;

  const data = {
    // used to populate "account" reducer when "Load" is clicked
    destination: currentItinerary.location,
    startDate: currentItinerary.startDate,
    endDate: currentItinerary.endDate,
    comments: 'oaisjfdoijwe'
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="button" onClick={() => load(data)}>
          Load Account
        </button>
      </div>
      <div>
        <label>Destination</label>
        <div>
          <Field
            name="destination"
            component="input"
            type="text"
            placeholder="Irvine, CA"
          />
        </div>
      </div>
      <div>
        <label>Start Date</label>
        <div>
          <Field
            name="startDate"
            component="input"
            type="text"
            placeholder="2017-08-08"
          />
        </div>
      </div>
      <div>
        <label>End Date</label>
        <div>
          <Field
            name="endDate"
            component="input"
            type="text"
            placeholder="2017-08-16"
          />
        </div>
      </div>

      <div>
        <label>Comments</label>
        <div>
          <Field name="comments" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState' // a unique identifier for this form
})(InitializeFromStateForm)

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
  state => ({
    initialValues: state.account.data // pull initial values from account reducer
  }),
  { load: loadAccount } // bind account loading action creator
)(InitializeFromStateForm)

export default InitializeFromStateForm