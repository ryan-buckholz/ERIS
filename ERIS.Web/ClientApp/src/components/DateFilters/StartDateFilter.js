import React from 'react'
import '@date-io/date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker 
} from '@material-ui/pickers'



function StartDateFilter() {

    const [ selectedDate, setSelectedDate ] = React.useState(null)

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    initialFocusedDate={null}
                    variant='outline'
                    format='MM/dd/yyy'
                    id='start-date-picker'
                    label='Start Date'
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{ 'aria-label': 'change date'}} />
            </MuiPickersUtilsProvider>
        </div>
    )
}


export default StartDateFilter