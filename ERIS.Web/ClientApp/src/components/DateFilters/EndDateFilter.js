import React from 'react'
import { Grid } from '@mui/material'
import '@date-io/date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker 
} from '@material-ui/pickers'



function EndDateFilter() {

    const [ selectedDate, setSelectedDate ] = React.useState(null)

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify='space-around'>
                    <KeyboardDatePicker
                    //disableToolbar
                    variant='inline'
                    format='MM/dd/yyy'
                    margin='normal'
                    id='End-date-picker'
                    label='End Date'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={(
                        'aria-label':'change date'
                    )} />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    )
}


export default EndDateFilter