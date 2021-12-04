import { TextField } from "@mui/material"
import { padding } from "@mui/system"
import * as React from 'react';


function LocationFilterAccordionBody() {
    return (
        <form>
            <div class="row">
            <div class="d-flex justify-content-around" >
                <div class="col-xl-2">
                    <div class="input-group mb-3">
                        <TextField style={{width:'70%'}} size="small" id="filled-basic" label="County" variant="filled" />
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="input-group mb-3">
                        <TextField style={{width:'70%'}} size="small" id="filled-basic" label="District" variant="filled" />
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="input-group mb-3">
                        <TextField style={{width:'50%'}} size="small" id="filled-basic" label="Lattitude" variant="filled" />
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="input-group mb-3">
                        <TextField style={{width:'50%'}} size="small" id="filled-basic" label="Longitude" variant="filled" />
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="input-group mb-3">
                        <TextField style={{width:'70%'}} size="small" id="filled-basic" label="Route" variant="filled" />
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="input-group mb-3">
                        <TextField style={{width:'50%'}} size="small" id="filled-basic" label="Post Mile" variant="filled" />
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default LocationFilterAccordionBody
