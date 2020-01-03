# Loki

Loki is cross.team's Gatsby Theme workspace.
- The `packages` directory contains all of the various themes that will be held in this repo. Right now it only contains the `gatsby-theme-material-ui` theme.
- The `example` directory contains an example of a site that would install our Gatsby themes.

## Yarn Workspaces

Loki utilizes yarn workspaces to facilitate developing our themes. Yarn workspaces allow us to make changes to our themes in the `packages` directory and immediately be able to access those changes from the `example` site, all without having to republish our packages and reinstall them. I am going to go over how yarn workspaces changes our development workflow in loki, but other than that I won't be going over it any more. If you want to learn more about yarn workspaces you can go [here](https://yarnpkg.com/lang/en/docs/workspaces/).

### Adding New Themes

When adding a new theme to the `packages` directory you must begin the name of its directory with "gatsby-theme" so that your packages will be recognized as themes by Gatsby. Once you create your theme directory you must enter that directory in your terminal and run:

```yarn init```

You will get a series of prompts which you can accept the default options for all of by pressing "enter", except for author or maybe description if you want to set those, but you don't have to.

### Installing Dependencies

When you are installing anything with yarn to any of your packages or the `example` site, there is a specific way you need to run the command. When doing a `yarn add package` you must prefix the "add" with "workspace" and the name of the directory you're installing it to. So if, for instance, you were installing `@material-ui/core` to the `gatsby-theme-material-ui` package, you would go to the `packages/gatsby-theme-material-ui` directory in the terminal and run:

```yarn workspace gatsby-theme-material-ui add @material-ui/core```

#### Installing Local Themes

If you want to add one of the themes you've created in the `packages` directory to the `example` site, then your `yarn add` command will be slightly different. You need to wrap the theme you're installing with quotes and append them with `@*` to let yarn know that it's being installed from a local package. So if you were installing the `gatsby-theme-material-ui` package to the `example` site, you would go to the `example` directory in the terminal and run:

```yarn workspace example add "gatsby-theme-material-ui@*"```

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

### `example`

This is an example usage of your themes.

- `example/`
  - `gatsby-config.js`: Specifies which themes to use and any other one-off config a site might need.
  - `src/`: Source code such as one-off pages or components that might live in
    a user's site.
    - `pages/index.js`: The home page of our example. It renders a MUI header using the assets from gatsby-theme-material-ui
    - `gatsby-theme-material-ui/theme-provider.js`: The `src/gatsby-theme-material-ui/` directory allows us to override the `theme-provider.js` file in the original theme with one of our own through a process called shadowing. You can learn more about shadowing [here](https://www.gatsbyjs.org/docs/themes/shadowing/).

You can run the example with:

```shell
yarn workspace example develop
```

### `gatsby-theme-material-ui`

The `gatsby-theme-material-ui` package installs `@material-ui/core` and `gatsby-plugin-material-ui` and wraps your application in a material-ui ThemeProvider, which is available to be shadowed by the `example` site or any other application that installs this package.
