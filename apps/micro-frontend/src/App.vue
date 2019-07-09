<template>
  <div id="mfe- app">
    <div id="nav">
      <router-link :to="{ name: 'MFEHome' }">MFE Home</router-link> |
      <router-link :to="{ name: 'MFEAbout' }">MFE About</router-link>
    </div>
    <hr>
    <router-view/>
  </div>
</template>
