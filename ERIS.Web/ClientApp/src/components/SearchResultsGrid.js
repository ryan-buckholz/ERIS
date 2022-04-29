import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { createAPIEndpoint, ENDPOINTS } from '../api';

const columns = [
    { field: 'ProjectID', headerName: 'ProjectID', flex : 1 },
    { field: 'LName', headerName: 'LName', flex : 1 },
    { field: 'EmployeeName', headerName: 'EmployeeName', flex : 1 },
    { field: 'DateOfIncident', headerName: 'DateOfIncident', flex : 1 },
    { field: 'County',headerName: 'County',sortable: false, flex : 1},
    { field: 'District', headerName: 'District', flex : 1 },
    { field: 'Route', headerName: 'Route', flex : 1 },
    { field: 'HighwayStatus', headerName: 'Highway Status', flex : 1 },
    // { field: 'idButton', headerName: '', width: 130 }    
  ];

function SearchResultsGrid() {
    const [ tableData, setTableData ] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.ASSESSMENTPROFILE).fetchAll()
        .then(res => {
            let assessmentsList = res.data.map( item => ({
                id : item['assessmentID'], ProjectID:item['projectID'], LName:item['lastName'],
                EmployeeName: item['firstName'], DateOfIncident: item['dateIncidentReported'], County : item['county'],
                District : item['district'], Route : 99, HighwayStatus: item['assessmentStatus']
            }));

            setTableData(assessmentsList)
        })
        .catch(err => console.log(err))
    }, [])

    const options = {
        filterType: 'checkbox',
    };
    
    return (
        <div className="card col-xl">
            <div className="card-body">
            <div style={{ height: 400, width: '100%' }} className="col-xl-9">
                <DataGrid
                    rows={tableData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    onRowClick={ rowData => {
                        navigate('/Details/' + rowData['row']['id'], rowData['row'])
                    }}
                    />
                </div>
            </div>
        </div>
        
    )
}

export default SearchResultsGrid
