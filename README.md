# loadable-components-seo

This is a Gatsby project that demonstrates how to implement loadable components with an SEO approach.

## How to use this Gatsby project

### Install dependencies

1. Clone the repository.
2. Install all the dependencies with `yarn install`

### Import Contentful Space

The Gatsby project makes use of Contentful so you'll need to create a free account on Contentful and import an existing Contentful space which is the `contentful-export-b6rq7rsykgs7-master-2020-04-08T20-01-01.json` file.

1. Create an account at contentful.com
2. Follow the instructions [here](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/)

When that's done you can start the Gatsby project with `yarn dev` and the site should be up and running.

### Viewing Page Source

To view the page source of the site, you'll need to build it for production and then serve it as a static site. You can do that with the command below.

```bash
yarn build && serve public
```

[Serve](https://www.npmjs.com/package/serve) is a package used to serve static sites and can be installed with the command `yarn global add serve`.
