import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderStream() {
    const stream = this.props.streams[this.props.match.params.id];
    return (
      <div>
        <div>
          <h2>Title:</h2>
          {stream.title}
        </div>
        <div>
          <h3>Description:</h3>
          {stream.description}
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.renderStream()}</div>;
  }
}

const mapToProps = (state) => {
  return {
    streams: state.streams,
  };
};

export default connect(mapToProps, { fetchStreams })(StreamShow);
