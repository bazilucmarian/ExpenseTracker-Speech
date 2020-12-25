import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";

import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "5%",
    },
  },
  last: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      paddingBottom: "200px",
    },
  },
  grid: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const App = () => {
  const classes = useStyles();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(matchesSM);
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
        className={classes.grid}
      >
        {matchesSM ? (
          <>
            <Grid item xs={12} md={3}>
              <Main />
            </Grid>
            <Grid item xs={12} md={4}>
              <Details title="Income" />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={4}>
              <Details title="Income" />
            </Grid>
            <Grid item xs={12} md={3}>
              <Main />
            </Grid>
          </>
        )}

        <Grid item xs={12} md={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </ThemeProvider>
  );
};

export default App;
