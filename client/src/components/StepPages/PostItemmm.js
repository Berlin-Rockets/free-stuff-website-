import React from "react";
import { Steps, Step } from "react-step-builder";
import NameAndCategory from "./NameAndCategory";
import LocationAndDiscreption from "./LocationAndDiscreption";
import PostOrSearch from "./PostOrSearch";
import FinalPage from "./FinalPage";
import { Col, Row } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import "./postItem.css";
import Login from "../Login/Login";

const Navigation = (props) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  // console.log( props.state);
  return (
    <div className="d-flex w-100">
      <div>
        <Button
          variant="contained"
          size="large"
          className={useStyles.button}
          color="primary"
          onClick={props.prev}
          style={{ marginRight: 10 }}
        >
          Previous
        </Button>
      </div>
      <div>
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
  const userId = localStorage.getItem("userId");

  const useStyles = makeStyles((theme) => ({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 800,
    },
  }));
  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: "after", // or before
    },
  };

  return userId ? (
    <div className="d-flex justify-content-center height w-100 mt-5 ">
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
    <div>
      <h4>please login</h4>

      <Login />
    </div>
  );
}

export default PostItemmm;
