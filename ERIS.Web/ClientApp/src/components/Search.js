import React, { Component } from 'react';
import { SearchResultsGrid } from './SearchResultsGrid';
import { SearchFilters } from './SearchFilters';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export class Search extends Component {
    static displayName = Search.name;

    render () {
        return (
            <div>
                <div className="alert alert-primary text-center">Hello, Please enter the search criteria below </div>
                <div className="col-md">
                    <div className="card bg-light">
                        <div className="card-header">
                            <ul class="nav nav-tabs" id="searchTabs" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="map-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Map</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="searchTabsContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="card-body">

                                        <SearchFilters />
                                        
                                    </div>
                                </div>
                                <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="card-body">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Disabled Accordion</Typography>
                    </AccordionSummary>
                </Accordion>
                <SearchResultsGrid />
            </div>
        );
    }
}
