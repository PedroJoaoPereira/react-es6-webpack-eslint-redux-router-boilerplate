import React from "react";

import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";
import BackIcon from "@material-ui/icons/KeyboardBackspace";

const NotFound = () => (
  <div>
    <p>404 - Page Not Found</p>
    <Link to="/">
      <Button>
        <BackIcon />
        Return to Homepage
      </Button>
    </Link>
  </div>
);

export default NotFound;
