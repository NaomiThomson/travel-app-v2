var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');

var Upload = React.createClass({
  onFormSubmit: function () {
    let { sessionInfo, dispatch, journeyInfo } = this.props;

    var fd = new FormData();
    fd.append('file', this.refs.file.getDOMNode().files[0]);

    $.ajax({
      url: `https://powerful-cliffs-81990.herokuapp.com/upload/journey/${journeyInfo._id}`,
      data: fd,
      processData: false,
      contentType: false,
      type: 'POST',
      success: function (data) {
        dispatch(actions.toggleUploaded());
        axios.patch(`https://powerful-cliffs-81990.herokuapp.com/journey/hasFile/true/${journeyInfo._id}`)
      }
    });
  },

  renderForm: function () {
    let { uploading } = this.props;

    if (uploading) {
      return (
        <div>
          <h5>Upload cover photo</h5>
          <input ref="file" type="file" name="idFile" accept=".jpg,.jpeg,.pdf,.png" />
          <button style={{ backgroundColor: "#F0A202" }} className="btn" onClick={this.onFormSubmit}>Upload</button>
        </div>
      )
    } else {
      return "Upload complete!!"
    }
  },
  render: function () {
    return (
      <div>
        {this.renderForm()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Upload);