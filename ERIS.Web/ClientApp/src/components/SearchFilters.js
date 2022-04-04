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
                        <Typography>Location</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div class="row">
                                <div class="d-flex justify-content-around">
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
                            <div class="row">
                                <div class="d-flex justify-content-around">

                                    <Input
                                    label='Begin Post Mile'
                                        name='beginPostmileInput' />
                                    <Input
                                        label='End Post Mile'
                                        name='endPostmileInput' />
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