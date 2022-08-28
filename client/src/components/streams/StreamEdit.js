import React from 'react';
import { connect } from 'react-redux';
import { StreamFormRedux } from './StreamFom';
import { editStream, fetchStreams } from '../../actions';
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  render() {
    return (
      <div>
        <div>
          <h3>Edit Form</h3>
        </div>
        <StreamFormRedux
          allPropsFromStreamEdit={this.props}
          onSubmit={this.props.editStream}
          initialValues={this.props.form[this.props.match.params.id]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.streams,
  };
};
export default connect(mapStateToProps, {
  fetchStreams,
  editStream,
})(StreamEdit);
