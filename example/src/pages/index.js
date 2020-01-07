import React from 'react'
import { Typography, AppBar, Toolbar } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/pro-solid-svg-icons'

export default () => (
  <AppBar>
    <Toolbar>
      <FontAwesomeIcon icon={faPizzaSlice} />
      <Typography variant='h5'>Example Page</Typography>
    </Toolbar>
  </AppBar>
)
