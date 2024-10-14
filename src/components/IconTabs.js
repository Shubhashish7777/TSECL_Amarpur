import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

import StackedAreas66KV from './Chart66KV';
import  StackedAreas132KV from './Chart132KV';

import Gauge66KV  from './Gaug66KV';
import Gauge132KV from './Gaug132KV';
import GoogleLoginPage from './GoogleLoginButtonPage';


export default function IconTabs() {
    const [value, setValue] = React.useState("0");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

 /* return (
    <Tabs value={value} onChange={handleChange} aria-label="tabs" centered>
      <Tab icon={<ElectricBoltIcon />} aria-label="electricity" />
      <Tab icon={<EditIcon />} aria-label="editicon" />
      <Tab icon={<DashboardIcon />} aria-label="dashboard" />
    </Tabs>
  );*/

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList value={value}   onChange={handleChange} aria-label="tabs" centered>
        <Tab icon={<ElectricBoltIcon />} aria-label="electricity"  value="0"/>
        <Tab icon={<EditIcon />} aria-label="editicon" value="1"/>
         <Tab icon={<DashboardIcon />} aria-label="dashboard" value="2"/>
        </TabList>
      </Box>
      <TabPanel value="0">
      <Box display="flex" justifyContent="space-between">
         

          <StackedAreas66KV/>
    </Box>
   <Box display="flex" justifyContent="space-between">
   <StackedAreas132KV/>
    
    </Box>

      </TabPanel>
      <TabPanel value="1">
      <Box display="flex" justifyContent="space-between">
          <GoogleLoginPage/>
        
    </Box>
      </TabPanel>
      <TabPanel value="2">Item Three</TabPanel>
    </TabContext>
  </Box>
  );
}
