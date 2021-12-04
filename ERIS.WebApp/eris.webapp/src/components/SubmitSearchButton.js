import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';


function SubmitSearchButton() {
    let navigate = useNavigate();
    return (
        <div>
                <Button onClick={() => {
                    navigate("/Home");
                }} variant="contained" disableElevation style={ButtonStyle}>
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
