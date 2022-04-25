import React from 'react'
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
                <KeyboardDatePicker
                    variant='outlined' 
                    format='MM/dd/yyy' 
                    id='End-date-picker' 
                    label='End Date' 
                    value={selectedDate} 
                    onChange={handleDateChange} 
                    KeyboardButtonProps={{ 'aria-label': 'change date' }} />
            </MuiPickersUtilsProvider>
        </div>
    )
}


export default EndDateFilter