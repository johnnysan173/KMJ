import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TimerIcon from "@material-ui/icons/Timer";
import EventIcon from "@material-ui/icons/Event";
import ExploreIcon from "@material-ui/icons/Explore";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // display: 'block',
    width: "100%",
    position: "fixed",
    left: 0,
    bottom: 0,
    // zIndex: 1000,
    textAlign: "center"
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Hiroba");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        label="集中"
        value="Shuchu"
        icon={<TimerIcon />}
        to="/Shuchu"
      />
      <BottomNavigationAction
        component={Link}
        label="広場"
        value="Hiroba"
        icon={<ExploreIcon />}
        to="/Hiroba"
      />
      <BottomNavigationAction
        component={Link}
        label="イベント"
        value="Plan"
        icon={<EventIcon />}
        to="/Plan"
      />
    </BottomNavigation>
  );
}
