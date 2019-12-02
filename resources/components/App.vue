<template>
  <div id="app">
    <global-header-navigation />
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
  </div>
</template>

<script>
import GlobalHeaderNavigation from "../components/GlobalHeaderNavigation";

export default {
  name: "App",
  components: {
    GlobalHeaderNavigation
  }
};
</script>

<style lang="scss"></style>
