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
    <Row align="center">
      <Col>
        <Button className={useStyles.button} type="primary" onClick={props.prev} style={{ marginRight: 10 }}>
          Previous
        </Button>
      </Col>
      <Col>
        <Button type="primary" onClick={props.next}>
          Next
        </Button>
      </Col>
    </Row>
  );
};

function PostItemmm() {
  const useStyles = makeStyles((theme) => ({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth:800,
     
    },
  }));
  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: "after" // or before
    }
  };

  return (
    

    
    <FormControl className={useStyles.formControl}>
      <br />
      <br />

      <Steps config={config}>
        <Step component={NameAndCategory} />
        <Step component={LocationAndDiscreption} />
        <Step component={PostOrSearch}/>
        <Step component={FinalPage} />
      
      </Steps>
    </FormControl>
  );
}

export default PostItemmm;