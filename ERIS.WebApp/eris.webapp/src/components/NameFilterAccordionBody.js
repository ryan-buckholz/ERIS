import { TextField } from "@mui/material"

function NameFilterAccordionBody() {
    return (
        <form>
            <div class="row">
                <div class="d-flex justify-content-around">
                    <div class="col-xl-3">
                        <div class="input-group mb-3">
                            <TextField id="filled-basic" label="First Name" variant="filled" />
                        </div>
                    </div>

                    <div class="col-xl-3">
                        <div class="input-group mb-3">
                        <TextField id="filled-basic" label="Last Name" variant="filled" />

                        </div>
                    </div>

                    <div class="col-xl-3">
                        <div class="input-group mb-3">
                            <TextField id="filled-basic" label="Employee ID" variant="filled" />
                        </div>
                    </div>

                </div>
            </div>
        </form>
    )
}

export default NameFilterAccordionBody
