<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Loki: cross.team's Gatsby Theme workspace
</h1>

```shell
gatsby new my-theme https://github.com/gatsbyjs/gatsby-starter-theme-workspace
cd my-theme
yarn workspace example develop
```

## Layout

```shell
.
├── README.md
├── packages
│   └── gatsby-theme-material-ui
│       ├── src
│       │   └── theme-provider.js
│       ├── gatsby-config.js
│       ├── gatsby-browser.js
│       ├── gatsby-ssr.js
│       ├── index.js
│       ├── wrap-root.js
│       └── package.json
├── example
│   ├── README.md
│   ├── gatsby-config.js
│   ├── package.json
│   └── src
│       ├── gatsby-theme-material-ui
│       │   └── theme-provider.js
│       └── pages
│           └── index.js
├── package.json
└── yarn.lock
```

### `gatsby-theme-material-ui`

### `example`

This is an example usage of your themes.

- `example/`
  - `gatsby-config.js`: Specifies which theme to use and any other one-off config a site might need.
  - `src/`: Source code such as one-off pages or components that might live in
    a user's site.
    - `pages/index.js`: The home page of our example. It renders a MUI header using the assets from gatsby-theme-material-ui
    - `gatsby-theme-material-ui/theme-provider.js`: The `src/gatsby-theme-material-ui/` directory allows us to override the `theme-provider.js` file in the original theme with one of our own through a process called shadowing. You can learn more about shadowing [here](https://www.gatsbyjs.org/docs/themes/shadowing/).

You can run the example with:

```shell
yarn workspace example develop
```
