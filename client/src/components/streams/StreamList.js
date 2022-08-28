import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';
import { Link } from 'react-router-dom';
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderButton(item) {
    return (
      <div>
        <Link to={`/streams/delete/${item.id}`} className="button ui primary">
          Delete
        </Link>
        <Link to={`/streams/edit/${item.id}`} className="button ui primary">
          Edit
        </Link>
      </div>
    );
  }
  rendereList() {
    return this.props.streams.map((item) => {
      return (
        <div key={item.id}>
          <div>{item.title}</div>

          {this.props.currentId === item.userId ? this.renderButton(item) : ''}
        </div>
      );
    });
  }
  render() {
    return <div className="ui celled list">{this.rendereList()}</div>;
  }
}

const mapToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentId: state.auth.userId,
  };
};

export default connect(mapToProps, { fetchStreams })(StreamList);
