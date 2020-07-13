# Decorators

These files are to be used to compose or enhance pages or components via acting as a higher-order component (HOC).

See [the React docs](https://reactjs.org/docs/higher-order-components.html) for more on HOCs.

## ⚠️ Rule specific to HOCs in Next.js ⚠️

ALWAYS supply `getInitialProps` as a static property of the wrapped component. If not, we'll break
the entire app.

- Source of information: https://github.com/vercel/next.js/issues/3899
