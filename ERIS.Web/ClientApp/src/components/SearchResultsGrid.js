import React, { useState, useEffect, Component } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material/';
import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import $ from 'jquery';
import { createAPIEndpoint, ENDPOINTS } from '../api';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Input from '../controls/Input';
import '@date-io/date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import Form from '../layouts/Form';

const columns = [
    { field: 'ProjectID', headerName: 'ProjectID', flex : 1 },
    { field: 'LName', headerName: 'LName', flex : 1 },
    { field: 'DateOfIncident', headerName: 'DateOfIncident', flex : 1 },
    { field: 'District', headerName: 'District', flex : 1 },
    { field: 'County',headerName: 'County',sortable: false, flex : 1},
    { field: 'Route', headerName: 'Route', flex : 1 },
    { field: 'PostMile', headerName: 'Post Mile', flex: 1 },
    { field: 'AssessmentStatus', headerName: 'Assessment Status', flex: 1 },
  ];

function SearchResultsGrid() {
    const [tableData, setTableData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const excludeColumnsDistrict = ["ProjectID", "LName", "DateOfIncident", "Route", "County", "PostMile", "AssessmentStatus", "id"];
    const excludeColumnsCounty = ["ProjectID", "LName", "DateOfIncident", "District", "Route", "PostMile", "AssessmentStatus", "id"];
    const excludeColumnsRoute = ["ProjectID", "LName", "DateOfIncident", "District", "County", "PostMile", "AssessmentStatus", "id"];
    const excludeColumnsPostMile = ["ProjectID", "LName", "DateOfIncident", "District", "County", "Route", "AssessmentStatus", "id"];
    const excludeColumnsDate = ["ProjectID", "LName", "Route", "District", "County", "PostMile", "AssessmentStatus", "id"];


    const navigate = useNavigate();
    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.ASSESSMENTPROFILE).fetchAll()
        .then(res => {
            let assessmentsList = res.data.map(item => ({
                id: item['assessmentID'], ProjectID: item['projectID'], LName: item['lastName'],
                DateOfIncident: item['dateIncidentReported'], County: item['county'],
                District: item['district'], Route: item['route'], AssessmentStatus: item['assessmentStatus'], PostMile: item['postMile']
            }));

            setTableData(assessmentsList)
        })
        .catch(err => console.log(err))
    }, [])

    const options = {
        filterType: 'checkbox',
    };
    const [selectedEndDate, setSelectedEndDate] = React.useState(null)
    const [selectedBeginDate, setSelectedBeginDate] = React.useState(null)

    const handleDistrictChange = value => {
        setSearchText(value);
        filterData(value, excludeColumnsDistrict);
    }
    const handleCountyChange = value => {
        setSearchText(value);
        filterData(value, excludeColumnsCounty);
    }
    const handleRouteChange = value => {
        setSearchText(value);
        filterData(value, excludeColumnsRoute );
    }

    const handleBeginPostMileChange = value => {
        setSearchText(value);
        filterGTNumericalData(value, excludeColumnsPostMile);
    }
    const handleEndPostMileChange = value => {
        setSearchText(value);
        filterLTNumericalData(value, excludeColumnsPostMile);
    }

    const handleBeginDateChange = value => {
        setSelectedBeginDate(value);
        setSearchText(value);
        filterGTDateData(value, excludeColumnsDate);
    }
    const handleEndDateChange = value => {
        setSelectedEndDate(value);
        setSearchText(value);
        filterLTDateData(value, excludeColumnsDate);
    }


    const filterGTDateData = (value, searchItem) => {
        if (value === "") setTableData(tableData);
        else {
            const filteredData = tableData.filter(item => {
                return Object.keys(item).some(key =>
                    searchItem.includes(key) ? false : new Date(item[key]) - value >= 0
                );
            });
            setTableData(filteredData);
        }
    }

    const filterLTDateData = (value, searchItem) => {
        if (value === "") setTableData(tableData);
        else {
            const filteredData = tableData.filter(item => {
                return Object.keys(item).some(key =>
                    searchItem.includes(key) ? false : new Date(item[key]) - value <= 0
                );
            });
            setTableData(filteredData);
        }
    }

    const filterGTNumericalData = (value, searchItem) => {
        if (value === "") setTableData(tableData);
        else {
            const filteredData = tableData.filter(item => {
                return Object.keys(item).some(key =>
                    searchItem.includes(key) ? false : item[key] >= value
                );
            });
            setTableData(filteredData);
        }
    }

    const filterLTNumericalData = (value, searchItem) => {
        if (value === "") setTableData(tableData);
        else {
            const filteredData = tableData.filter(item => {
                return Object.keys(item).some(key =>
                    searchItem.includes(key) ? false : item[key] <= value
                );
            });
            setTableData(filteredData);
        }
    }

    const filterData = (value, searchItem) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setTableData(tableData);
        else {
            const filteredData = tableData.filter(item => {
                return Object.keys(item).some(key =>
                    searchItem.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
                );
            });
            setTableData(filteredData);
        }
    }

    return (
        <div>
        <Form><Grid>
            <Grid item>
                <Card sx={{ minWidth: 275 }} variant='outlined'>
                    <CardHeader title="Search" />
                    <CardContent> <div>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Date</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="d-flex justify-content-around">
                                        <div>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    initialFocusedDate={null}
                                                    variant='outline'
                                                    format='MM/dd/yyy'
                                                    id='start-date-picker'
                                                    label='Start Date'
                                                    value={selectedBeginDate}
                                                    onChange={handleBeginDateChange}
                                                    KeyboardButtonProps={{ 'aria-label': 'change date' }} />
                                            </MuiPickersUtilsProvider>
                                        </div>
                                        <div>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    variant='outlined'
                                                    format='MM/dd/yyy'
                                                    id='End-date-picker'
                                                    label='End Date'
                                                    value={selectedEndDate}
                                                    onChange={handleEndDateChange}
                                                    KeyboardButtonProps={{ 'aria-label': 'change date' }} />
                                            </MuiPickersUtilsProvider>
                                        </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                id="panel2a-header"
                            >
                                <Typography>Location</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="row">
                                    <div className="d-flex justify-content-around">
                                        <Input
                                                label='District'
                                                key='district'
                                                name='districtInput'
                                                onChange={ e => handleDistrictChange(e.target.value)}
                                            />
                                        <Input
                                                label='County'
                                                key='county'
                                                name='countyInput'
                                                onChange={e => handleCountyChange(e.target.value)} />
                                        <Input
                                                label='Route'
                                                key='route'
                                                name='routeInput'
                                                onChange={e => handleRouteChange(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-around">
                                        <Input
                                                label='Begin Post Mile'
                                                type="number"
                                                name='postmileBeginInput'
                                                onChange={e => handleBeginPostMileChange(e.target.value)} />
                                        <Input
                                                label='End Post Mile'
                                                type="number"
                                                name='postmileEndInput'
                                                onChange={e => handleEndPostMileChange(e.target.value)} />
                                    </div>
                                    </div>

                            </AccordionDetails>
                        </Accordion>
                        {/*<Accordion>*/}
                        {/*    <AccordionSummary*/}
                        {/*        expandIcon={<ExpandMoreIcon />}*/}
                        {/*        aria-controls="panel2a-content"*/}
                        {/*        id="panel2a-header"*/}
                        {/*    >*/}
                        {/*        <Typography> Highway Status</Typography>*/}
                        {/*    </AccordionSummary>*/}
                        {/*    <AccordionDetails>*/}
                        {/*        <Radiogroup />*/}
                        {/*    </AccordionDetails>*/}
                        {/*</Accordion>*/}
                    </div>
                    </CardContent>

                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button variant="contained" href="./Search">Reset</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid></Form>
        <div className="card col-xl">
                <div className="card-body">
                    <div style={{ height: 400, width: '100%' }} className="col-xl-9">
                        <DataGrid
                            rows={tableData}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            onRowClick={rowData => {
                                navigate('/Details/' + rowData['row']['id'], rowData['row']);
                            } } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultsGrid
