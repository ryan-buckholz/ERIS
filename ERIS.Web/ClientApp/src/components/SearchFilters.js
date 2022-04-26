import React, { Component } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StartDateFilter from './DateFilters/StartDateFilter';
import EndDateFilter from './DateFilters/EndDateFilter';
import Input from '../controls/Input';
import Radiogroup from '../controls/Radiogroup';


export class SearchFilters extends Component {
    static displayName = SearchFilters.name;

    render() {
        return (
            <div>
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
                                <StartDateFilter /> 
                                <EndDateFilter  /> 
                            </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                          
                        <Typography>Name</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                            <div className="d-flex justify-content-around">
                                <Input
                                    label='First Name'
                                    name='firstNameInput' />
                                <Input
                                    label='Last Name'
                                    name='lastnameInput' />
                                <Input 
                                    type='number'
                                    label='Employee Id'
                                    name='employeeIdInput' />
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
                                    label='County'
                                    name='countyInput' />
                                
                                <Input 
                                    type='number'
                                    label='Latitude'
                                    name='latitudeInput' />
                                <Input 
                                    type='number'
                                    label='Longitude'
                                    name='longitudeInput' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-around">
                                <Input
                                label='Route'
                                name='routeInput' />

                                <Input
                                label='Post Mile'
                                name='postmileInput' />
                                
                                <Input
                                label='District'
                                name='districtInput' />
                            </div>
                                
                        </div>

                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography> Highway Status</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Radiogroup />
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    }
}