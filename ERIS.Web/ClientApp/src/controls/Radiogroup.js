import React from 'react'
import {Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core'

function Radiogroup() {

    const [value, setValue] = React.useState(null)

    const handleChange = (event) => {
        setValue(event.target.value);
    }

  return (
      <FormControl component='fieldset'>
          <RadioGroup
            name='status-radiogroup'
            defaultValue={value}
            onChange={handleChange} >
                <FormControlLabel value='openInput' control={<Radio /> } label='Open' />
                <FormControlLabel value='shoulderInput' control={<Radio /> } label='Shoulder Closed' />
                <FormControlLabel value='onewayInput' control={<Radio /> } label='One-Way Closed' />
                <FormControlLabel value='twowayInput' control={<Radio /> } label='Two-Way Closed' />
                <FormControlLabel value='shoulderclosedInput' control={<Radio /> } label='Lane(s) closed' />
            </RadioGroup>
      </FormControl>


  )
}


export default Radiogroup