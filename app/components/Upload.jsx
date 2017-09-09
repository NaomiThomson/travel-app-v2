var React = require('react');
var { connect } = require('react-redux');
var { Link, IndexLink } = require('react-router');
var axios = require('axios');
var actions = require('actions');



var Upload = React.createClass({
  onFormSubmit: function () {
    let { sessionInfo, dispatch } = this.props;

    var fd = new FormData();
    fd.append('file', this.refs.file.getDOMNode().files[0]);

    console.log(this.refs.file.getDOMNode().files[0]);
    console.log(fd);

    $.ajax({
      url: `https://powerful-cliffs-81990.herokuapp.com/upload/journey/59b1f801d018c00012bad760`,
      data: fd,
      processData: false,
      contentType: false,
      type: 'POST',
      success: function (data) {
        dispatch(actions.toggleUploaded());
      }
    });
  },
  renderForm: function () {
    let { uploading } = this.props;

    if (uploading) {
      return (
        <div>
          <p>Upload a cover photo for your trip!</p>
          <input ref="file" type="file" name="idFile" accept=".jpg,.jpeg,.pdf,.png" />
          <button onClick={this.onFormSubmit}>Upload</button>
        </div>
      )
    } else {
      return "ID Upload complete!!"
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