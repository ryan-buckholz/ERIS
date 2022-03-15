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
                        <Typography>
                            <div class="d-flex justify-content-around">
                                <StartDateFilter />
                                <EndDateFilter  />
                            </div>
                        </Typography>
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
                        <Typography>
                            <div class="d-flex justify-content-around">
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
                            
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Location</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div class="row">
                                <div class="d-flex justify-content-around">
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
                            <div class="row">
                                <div class="d-flex justify-content-around">
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
                            
                        </Typography>
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
                        <Typography>
                            <Radiogroup />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                
            </div>
        );
    }
}