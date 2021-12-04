import * as React from 'react';
import SearchComponent from "./SearchComponent"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import MapSearchComponent from './MapSearchComponent';

function SearchOptionsContaner() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <div class="card col-xl-9">
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Search" value="1" />
                    <Tab label="Map Search" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <SearchComponent />
                </TabPanel>
                <TabPanel value="2">
                    <MapSearchComponent />
                </TabPanel>
            </TabContext>
            
        </div>

        
    )
}

export default SearchOptionsContaner
