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

### POC

![2019-07-09 23 21 25](https://user-images.githubusercontent.com/16368429/60911318-8157e900-a2a0-11e9-9fde-921276196425.gif)
