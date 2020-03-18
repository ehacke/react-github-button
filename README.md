# react-github-login-button

## Getting Started

`react-github-login-button` is universal, so it can be used client-side or server-side.

1. Install through: `npm install --save react-github-login-button`

2. Import `GithubButton` from `react-github-login-button`:

    ```javascript
    import GithubButton from 'react-github-login-button'
    ```

3. Use `GithubButton` component:

    ```javascript
    <GithubButton
      onClick={() => { console.log('Github button clicked') }}
    />
    ```

## Props

### type
##### PropType
```js
oneOf([ 'light', 'dark' ])
```

##### Default
```js
'dark'
```

##### Example

```js
<GithubButton
  type="light" // can be light or dark
  onClick={() => { console.log('Github button clicked') }}
/>
```

##### Description
`'light'` or `'dark'` for the different github styles (defaults to `dark`)


### disabled
`disabled` - whether or not button is disabled

##### PropType
```js
Boolean
```

##### Default
```js
false
```

##### Example

```javascript
<GithubButton
  disabled // can also be written as disabled={true} for clarity
  onClick={() => { console.log('this will not run on click since it is disabled') }}
/>
```

### label
##### PropType
```js
String
```
##### Default
```js
'Sign in with Github'
```

##### Example

```javascript
<GithubButton
  label='Be Cool'
  onClick={() => { console.log('Github button clicked') }}
/>
```

##### Description
Override the 'Sign in with Github' words with another string.

## Builds

Most commonly people consume `react-github-login-button` as a [CommonJS module](http://webpack.github.io/docs/commonjs.html). This module is what you get when you import redux in a Webpack, Browserify, or a Node environment.

If you don't use a module bundler, it's also fine. The `react-github-login-button` npm package includes precompiled production and development [UMD builds](https://github.com/umdjs/umd) in the [dist folder](https://unpkg.com/react-github-login-button@latest/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. For example, you can drop a UMD build as a `<script>` tag on the page. The UMD builds make Redux Firestore available as a `window.ReduxFirestore` global variable.

It can be imported like so:

```html
<script src="../node_modules/react-github-login-button/dist/react-github-login-button.min.js"></script>
<!-- or through cdn: <script src="https://unpkg.com/react-github-login-button@latest/dist/react-github-login-button.min.js"></script> -->
<script>console.log('redux firestore:', window.ReactGithubButton)</script>
```

Note: In an effort to keep things simple, the wording from this explanation was modeled after [the installation section of the Redux Docs](https://redux.js.org/#installation).
