<template>
  <div class="home">
    <h1>This is the container app</h1>
    <p>Container app expects all micro frontends to expose their top level component as a plugin.</p>
    <p><code>registerMFE</code> function is passed to every plugin's <code>install</code> function which takes the store data, routes and the top level component as its parameters.</p>
    <p>Using these parameters, container app performs some validations and registers the routes and store module appropriately without directly exposing the original instances of the store or router to the MFEs.</p>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>
