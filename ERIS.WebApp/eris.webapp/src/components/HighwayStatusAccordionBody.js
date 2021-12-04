function HighwayStatusAccordionBody() {
    return (
        <div class="row">
            <div class="d-flex justify-content-around">
                <div class="col-xl-2"></div>
                <div class="col-xl-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Open
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Shoulder closed
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            One-Way closed
                        </label>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Two-Way closed
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Lane(s) closed
                        </label>
                    </div>
                </div>
                <div class="col-xl">

                </div>
            </div>
        </div>
    )
}

export default HighwayStatusAccordionBody
