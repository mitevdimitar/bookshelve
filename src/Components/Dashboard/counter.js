import React, { useState, useCallback, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { isMobileDevice } from "../../services/mobile";

const useStyles = makeStyles((theme) => ({
  root: {
    width: isMobileDevice() ? 120 : 190,
    height: isMobileDevice() ? 120 : 190,
    marginTop: !isMobileDevice() && "30px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: "20px",
    boxShadow: "none",
    color: theme.palette.primary.main,
  },
  contentRoot: {
    paddingTop: isMobileDevice() && 0,
  },
  cardButtons: {
    position: "absolute",
    bottom: 0,
    right: isMobileDevice() ? 0 : 10,
    padding: isMobileDevice() && 0,
  },
  text: {
    fontSize: isMobileDevice() ? "13px" : "14px",
    textTransform: "uppercase",
    fontWeight: "500",
    /* whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis", */
  },
  counterValue: {
    margin: "5px 0",
    fontSize: isMobileDevice() ? "20px" : "40px",
  },
}));

function Counter({ widgetData }) {
  const classes = useStyles();
  const [counterValue, setCounterValue] = useState(0);

  const getCounterData = useCallback(async () => {
    if (widgetData) {
      const counter = widgetData ? widgetData.data.counter : 0;
      setCounterValue(counter);
    }
  }, [widgetData]);

  useEffect(() => {
    getCounterData();
  }, [getCounterData]);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.contentRoot}>
        <Grid container justify="center" className={classes.counterValue}>
          {counterValue}
        </Grid>
        <Grid container item style={{ height: "30px" }}>
          <Typography
            align="center"
            color="textSecondary"
            gutterBottom
            className={classes.text}
          >
            Authors
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Counter;