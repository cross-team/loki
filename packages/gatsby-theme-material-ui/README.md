# @cross.team/gatsby-theme-material-ui

The `@cross.team/gatsby-theme-material-ui` package installs `@material-ui/core` and `gatsby-plugin-material-ui` and wraps your application in a Material-UI ThemeProvider, which is available to be shadowed by the example site or any other application that installs this package.

## Installation

```
// with npm
npm install @cross.team/gatsby-theme-material-ui

// with yarn
yarn add @cross.team/gatsby-theme-material-ui
```

## How to use

Make sure to add `@cross.team/gatsby-theme-material-ui` to the `plugins` array in your `gatsby-config.js` file:

```javascript
module.exports = {
  plugins: [
    '@cross.team/gatsby-theme-material-ui',
  ],
}
```

### Adding Custom Themes

You can optionally edit the default theme provider settings with your own theming through a process called [shadowing](https://www.gatsbyjs.org/docs/themes/shadowing/). You can do this by adding new directories to the `src/` directory of your project called `@cross.team/gatsby-theme-material-ui/` and inside them create a file called `theme-provider.js`. Paste the following code inside your `src/@cross.team/gatsby-theme-material-ui/theme-provider.js`:

```javascript
import React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  // Your custom theming here
})

  const Theme = ({ path, children }) => {
    return (
      <ThemeProvider theme={theme}>
          {children}
      </ThemeProvider>
    )
  }
  export default Theme
  ```

Where the comment says "Your custom theming here" you can delete the comment and start writing in your own custom styling using the Material-UI [Default Theme](https://material-ui.com/customization/default-theme/) as a guideline. You can find more examples of theming with Material-UI [here](https://material-ui.com/customization/theming/).