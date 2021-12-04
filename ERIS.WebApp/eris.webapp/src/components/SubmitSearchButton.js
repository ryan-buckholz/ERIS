import Button from '@mui/material/Button'

function SubmitSearchButton() {
    return (
        <div>
            <Button variant="contained" disableElevation style={ButtonStyle}>
                Submit Search
            </Button>
        </div>
    )
}

const ButtonStyle = {
    top:10,
    width: '45%',
}
export default SubmitSearchButton
