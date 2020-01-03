const React = require("react")
const ThemeProvider = require('./src/providers/theme-provider').default

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      {element}
    </ThemeProvider>
  )
}