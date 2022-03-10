import React from 'react'
import { TextField } from '@material-ui/core'

function Input(props) {

    const {name, type, label, value, variant, onChange, error = null, ...other} = props;

    return (
        <TextField 
            variant={variant || "outlined"}
            type= {type}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error : true, helperText: error })}
            />
    )
}

export default Input