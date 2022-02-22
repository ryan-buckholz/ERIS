import React from 'react'
import Input from '../controls/Input'
import MapComponent from './MapComponent'
import { Card } from '@mui/material'

function MapSearch() {
  return (
    <div >
        <Input 
          name='mapInput'
          label='Search Highways' />
          <Card variant='outlined'>
              <MapComponent />
          </Card>
    </div>
        
  )
}

export default MapSearch