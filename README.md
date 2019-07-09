# MFE Container App

This is the MFE container app.


This app assumes that all the micro frontends expose themselves as a plugin.
Every plugin's `install` function is provided with the `registerMFE` function so the MFE could register its store and routes in the container app.

### Instructions

Install dependencies

```
yarn install
```

Run development server

```
yarn serve
```
