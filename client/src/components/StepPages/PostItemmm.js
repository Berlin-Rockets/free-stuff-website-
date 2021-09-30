import React from 'react';
import { Steps, Step } from 'react-step-builder';
import NameAndCategory from './NameAndCategory';
import LocationAndDiscreption from './LocationAndDiscreption';
import PostOrSearch from './PostOrSearch';
import FinalPage from './FinalPage';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './postItem.css';
import Login from '../Login/Login';

const Navigation = (props) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  // console.log( props.state);
  return (
    <div className="d-flex w-100 justify-content-center flex-wrap">
      <div style={{ margin: '20px 10px' }}>
        <Button
          variant="contained"
          size="large"
          className={useStyles.button}
          color="primary"
          onClick={props.prev}
          // style={{ marginRight: 10 }}
        >
          Previous
        </Button>
      </div>
      <div style={{ margin: '20px 10px' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={props.next}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

function PostItemmm() {
  const userId = localStorage.getItem('userId');

  // const useStyles = makeStyles((theme) => ({
  //   button: {
  //     display: 'block',
  //     marginTop: theme.spacing(2),
  //   },
  //   formControl: {
  //     margin: theme.spacing(1),
  //     minWidth: 120,
  //     maxWidth: 800,
  //   },
  // }));
  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: 'after', // or before
    },
  };

  return userId ? (
    <div className="d-flex justify-content-center height w-100 py-5 post-item-container">
      <br />
      <br />
      <div className="w-25">
        <Steps config={config}>
          <Step component={NameAndCategory} />
          <Step component={LocationAndDiscreption} />
          <Step component={PostOrSearch} />
          <Step component={FinalPage} />
        </Steps>
      </div>
    </div>
  ) : (
    <div className="login-require-container">
      <h2 className="require-title text-center">
        Please login to post an item
      </h2>

      <Login />
    </div>
  );
}

export default PostItemmm;
