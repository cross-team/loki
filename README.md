# Loki

Loki is cross.team's [Gatsby Theme](https://www.gatsbyjs.org/docs/themes/) workspace.
- The `packages` directory contains all of the various themes that will be held in this repo.
- The `example` directory contains an example of a site that would install our Gatsby themes.

## Yarn Workspaces

Loki utilizes yarn workspaces to facilitate developing our themes. Yarn workspaces allow us to make changes to our themes in the `packages` directory and immediately be able to access those changes from the `example` site, all without having to republish our packages and reinstall them. I am going to go over how yarn workspaces changes our development workflow in loki, but other than that I won't be going over it any more. If you want to learn more about yarn workspaces you can go [here](https://yarnpkg.com/lang/en/docs/workspaces/).

### Adding New Themes

When adding a new theme to the `packages` directory you must begin the name of its directory with "gatsby-theme" so that your packages will be recognized as themes by Gatsby. Once you create your theme directory you must enter that directory in your terminal and run:

```yarn init```

The first prompt you get in a series of prompts will be the name for the `package.json`. For our themes, they will be published to the cross.team npm organization so the name in the `package.json` will be prepended with "@cross.team/". So if your theme is `gatsby-theme-my-theme` then you would write `@cross.team/gatsby-theme-my-theme` as the name for your `package.json`.
 
For the rest of the prompts you can accept the default options by pressing "enter", except for author or maybe description if you want to set those, but you don't have to.

### Installing Dependencies

When you are installing anything with yarn to any of your packages or the `example` site, there is a specific way you need to run the command. When doing a `yarn add package` you must prefix the "add" with "workspace" and the name of the directory you're installing it to. So if, for instance, you were installing `@material-ui/core` to the `gatsby-theme-material-ui` package, you would go to the `packages/gatsby-theme-material-ui` directory in the terminal and run:

```yarn workspace @cross.team/gatsby-theme-material-ui add @material-ui/core```

#### Installing Local Themes

If you want to add one of the themes you've created in the `packages` directory to the `example` site, then your `yarn add` command will be slightly different. You need to wrap the theme you're installing with quotes and append them with `@*` to let yarn know that it's being installed from a local package. So if you were installing the `gatsby-theme-material-ui` package to the `example` site, you would go to the `example` directory in the terminal and run:

```yarn workspace example add "@cross.team/gatsby-theme-material-ui@*"```

Whenever you install a Gatsby theme, you need to make sure to also add that theme to the `plugins` array in your app's `gatsby-config.js`, making sure not forget the `@cross.team/` namespace.

### Publishing Themes

Before you can publish a theme, you must make sure you are logged into npm in your terminal. You can check this by running the command:

```npm whoami```

If you are logged in, npm will return your username, if not it will return an error telling you that you must be logged in, which you can do with the command:

```npm adduser```

This command will ask you for your npm username, password, and the email associated with the account. Once you do that you can run `npm whoami` again to make sure that your login was successful.

Once you're logged in, go to your theme's directory in the terminal and publish the package by running:

```npm publish --access public```

If you have the right permissions to the cross.team npm organization, your package will be successfully published. If not, you should encounter a 403 error.

## Layout

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

### [`gatsby-theme-material-ui`](https://github.com/cross-team/loki/tree/master/packages/gatsby-theme-material-ui)

### [`gatsby-theme-eslint`](https://github.com/cross-team/loki/tree/master/packages/gatsby-theme-eslint)

### [`gatsby-theme-fontawesome`](https://github.com/cross-team/loki/tree/master/packages/gatsby-theme-fontawesome)
