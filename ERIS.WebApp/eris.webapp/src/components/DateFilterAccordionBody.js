import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import * as React from 'react';
import { TextField } from '@mui/material';


function DateFilterAccordionBody() {
    const [value, setValue] = React.useState(new Date() );
    
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div class="row">
                <div class="d-flex justify-content-around">
                    <DatePicker
                        disableFuture
                        label="Responsive"
                        openTo="year"
                        views={['year', 'month', 'day']}
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />

                    <DatePicker
                        disableFuture
                        label="Responsive"
                        openTo="year"
                        views={['year', 'month', 'day']}
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />
                </div>
            </div>
        </LocalizationProvider>
    )
}

export default DateFilterAccordionBody
