import { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import jwt_decode from 'jwt-decode';
const GoogleAuth = (props) => {
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        '124481983985-62qua0m9vvgth3dvt7jde50q9psil1ek.apps.googleusercontent.com',
      callback: (e) => {
        var decoded = jwt_decode(e.credential);
        props.signIn(decoded.sub);
      },
    });
  }, []);
  const onSignInClick = () => {
    window.google.accounts.id.prompt();
  };
  return (
    <div>
      <p>You are {props.log ? 'Loge in' : 'Loged out'}</p>
      <div onClick={props.signOut}>Google Out</div>
      <div onClick={onSignInClick}>Google In</div>
    </div>
  );
};

const map = (state) => {
  return {
    log: state.auth.isSignedIn,
  };
};

export default connect(map, { signOut, signIn })(GoogleAuth);
