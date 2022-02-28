import React, { Component } from 'react';
import { SearchFilters } from './SearchFilters';
import SearchResultsGrid from './SearchResultsGrid';
import { Grid } from '@material-ui/core';
import {  Card, CardActions, CardContent} from '@mui/material/';
import Form from '../layouts/Form';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MapSearch from './MapSearch';


export class Search extends Component {
    static displayName = Search.name;
    

    render () {
        return (
            <div>   
                <div className="alert alert-primary text-center">Hello, Please enter the search criteria below </div>

                <Form /* onSubmit={}*/> 
                    <Grid containerxl>
                        <Grid item>
                        <Card sx={{ minWidth: 275 }} variant='outlined'>
                            <CardContent>
                            <Tabs>
                                <TabList>
                                <Tab>Search</Tab>
                                <Tab>Map Search</Tab>
                                </TabList>
                                <TabPanel>
                                    <SearchFilters />
                                </TabPanel>
                                <TabPanel>
                                    <MapSearch />
                                </TabPanel>
                            </Tabs>
                            
                            </CardContent>
                            <CardActions>
                                
                            </CardActions>
                        </Card>
                        </Grid>
                    </Grid> 
                </Form> 
                
                <SearchResultsGrid />
            </div>
        );
    }
}
