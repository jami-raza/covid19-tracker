import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import LanguageIcon from '@material-ui/icons/Language';
import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles({
  root: {
    marginTop:'10',
    position:'fixed', 
    display: 'fix', 
    bottom:'0',
    left:'0',
    right:'0',
  },
});

export default function Bottomtabs({screenconfig}) {
  const classes = useStyles();
//  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={screenconfig[0]}
      onChange={(event, newValue) => {
        screenconfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Worldwide" icon={<LanguageIcon />} />
      <BottomNavigationAction label="All Countries" icon={<PublicIcon />} />
      <BottomNavigationAction label="Chart" icon={<MultilineChartIcon />} />
    </BottomNavigation>
  );
}
