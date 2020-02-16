import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="1月" {...a11yProps(0)} />
          <Tab label="2月" {...a11yProps(1)} />
          <Tab label="3月" {...a11yProps(2)} />
          <Tab label="4月" {...a11yProps(3)} />
          <Tab label="5月" {...a11yProps(4)} />
          <Tab label="6月" {...a11yProps(5)} />
          <Tab label="7月" {...a11yProps(6)} />
          <Tab label="8月" {...a11yProps(7)} />
          <Tab label="9月" {...a11yProps(8)} />
          <Tab label="10月" {...a11yProps(9)} />
          <Tab label="11月" {...a11yProps(10)} />
          <Tab label="12月" {...a11yProps(11)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        1月のイベント
      </TabPanel>
      <TabPanel value={value} index={1}>
        2月のイベント
      </TabPanel>
      <TabPanel value={value} index={2}>
        3月のイベント
      </TabPanel>
      <TabPanel value={value} index={3}>
        4月のイベント
      </TabPanel>
      <TabPanel value={value} index={4}>
        5月のイベント
      </TabPanel>
      <TabPanel value={value} index={5}>
        6月のイベント
      </TabPanel>
      <TabPanel value={value} index={6}>
        7月のイベント
      </TabPanel>
      <TabPanel value={value} index={7}>
        8月のイベント
      </TabPanel>
      <TabPanel value={value} index={8}>
        9月のイベント
      </TabPanel>
      <TabPanel value={value} index={9}>
        10月のイベント
      </TabPanel>
      <TabPanel value={value} index={10}>
        11月のイベント
      </TabPanel>
      <TabPanel value={value} index={11}>
        12月のイベント
      </TabPanel>
    </div>
  );
}
