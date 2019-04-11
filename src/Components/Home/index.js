import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

import { setMessage } from "Redux/Actions/global";

class Home extends Component {
  componentWillMount() {
    const { setMessageAction } = this.props;
    setMessageAction(new Date().toTimeString());
  }

  render() {
    const { message, setMessageAction } = this.props;

    return (
      <div>
        <p>{`Hello World at ${message}`}</p>
        <Button onClick={() => setMessageAction(new Date().toTimeString())}>
          Update
        </Button>
      </div>
    );
  }
}

Home.propTypes = {
  message: PropTypes.string.isRequired,
  setMessageAction: PropTypes.func.isRequired
};

const MapStateToProps = state => ({
  message: state.global.message
});

const ActionProps = {
  setMessageAction: setMessage
};

export default connect(
  MapStateToProps,
  ActionProps
)(Home);
