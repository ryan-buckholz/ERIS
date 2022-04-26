import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { createAPIEndpoint, ENDPOINTS } from '../api';



const columns = [
    { field: 'ProjectID', headerName: 'ProjectID', width: 100 },
    {
      field: 'LName',
      headerName: 'LName',
      width: 100,
      editable: true,
    },
    {
      field: 'EmployeeID',
      headerName: 'EmployeeID',
      width: 110,
      editable: true,
    },
    {
      field: 'DateOfIncident',
      headerName: 'DateOfIncident',
      width: 130,
      editable: true,
    },
    {
      field: 'County',
      headerName: 'County',
      sortable: false,
      width: 100,
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${
    //       params.getValue(params.id, 'lastName') || ''
    //     }`,
    },
    {
        field: 'District',
        headerName: 'District',
        width: 100,
        editable: true,
    },
    {
        field: 'Route',
        headerName: 'Route',
        width: 100,
        editable: true,
    },
    {
        field: 'HighwayStatus',
        headerName: 'HighwayStatus',
        width: 130,
        editable: true,
    }
    
  ];

  const rows = [
    {id:0, ProjectID: 1, LName: 'test', EmployeeID: 14, DateOfIncident: '10/12/2021', County : 'Sacramento', District : 12, Route : 99,
        HighwayStatus: 'closed'}
  ];

function SearchResultsGrid() {
    
    const [x, setX] = useState();

    const [assessmentsList, setAssessmentList] = useState([]);
    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.ASSESSMENTPROFILE).fetchAll()
        .then(res => {
            let assessmentsList = res.data.map( item => ({
                id : item.AssessmentID,
                title : item.ProjectID
            }));
            assessmentsList = [{id:0, title: 0}].concat(assessmentsList);
            assessmentsList.map( data => {
                rows.concat({id:data.id, ProjectID:data.ProjectID, LName:data.LastName});
            })
            console.log(res.data)
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
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick />
                </div>
            </div>
        </div>
        
    )
}

export default SearchResultsGrid
