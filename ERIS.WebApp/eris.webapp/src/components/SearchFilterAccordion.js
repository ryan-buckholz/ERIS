import NameFilterAccordionBody from './NameFilterAccordionBody';
import LocationFilterAccordionBody from './LocationFilterAccordionBody';
import DateFilterAccordionBody from './DateFilterAccordionBody'
import { Accordion } from 'react-bootstrap';
import HighwayStatusAccordionBody from './HighwayStatusAccordionBody';

function SearchFilterAccordion() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Date Filters</Accordion.Header>
                    <Accordion.Body>
                        <DateFilterAccordionBody />                            
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Name Filters</Accordion.Header>
                    <Accordion.Body>
                        <NameFilterAccordionBody />
                    </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Location Filters</Accordion.Header>
                    <Accordion.Body>
                        <LocationFilterAccordionBody />
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Highway Status</Accordion.Header>
                    <Accordion.Body>
                        <HighwayStatusAccordionBody />
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default SearchFilterAccordion
