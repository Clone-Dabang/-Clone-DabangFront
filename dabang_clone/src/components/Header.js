import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

import { Grid } from "./Styles";

const Header = (props) => {
  return (
    <Grid justify_contents="center" height="auto">
      <Box component="h1" color="text.primary">
        다방
      </Box>
    </Grid>
  );
};

export default Header;
