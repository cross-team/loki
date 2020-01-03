import React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme(/** You can customize your theme here! */)

  const Theme = ({ path, children }) => {
    return (
      <ThemeProvider theme={theme}>
          {children}
      </ThemeProvider>
    )
  }
  export default Theme