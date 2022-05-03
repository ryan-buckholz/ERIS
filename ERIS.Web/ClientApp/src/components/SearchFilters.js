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
                        id="panel2a-header"
                    >
                        <Typography>Location</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="row">
                            <div className="d-flex justify-content-around">
                                <Input
                                label='District'
                                    name='districtInput' />
                                <Input
                                    label='County'
                                    name='countyInput' />
                                <Input
                                label='Route'
                                name='routeInput' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-around">
                                <Input
                                label='Begin Post Mile'
                                    name='postmileBeginInput' />
                                <Input
                                    label='End Post Mile'
                                    name='postmileEndInput' />
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