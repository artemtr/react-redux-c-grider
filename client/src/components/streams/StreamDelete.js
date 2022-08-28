import React from 'react';
import { connect } from 'react-redux';
import { deleteStream } from '../../actions';
class StreamDelete extends React.Component {
  id = '';
  componentDidMount() {
    this.id = this.props.match.params.id;
  }
  deleteStream = () => {
    this.props.deleteStream(this.id);
  };
  render() {
    return (
      <div>
        <h2>Are you sure ?</h2>
        <button onClick={this.deleteStream} className="ui button primary">
          Delete
        </button>
      </div>
    );
  }
}

export default connect(null, {
  deleteStream,
})(StreamDelete);
