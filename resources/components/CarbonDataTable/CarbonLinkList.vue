<template>
  <ul class="link-list">
    <li>
      <cv-link :href="editURL">Edit</cv-link>
    </li>

    <li v-if="destroyURL">
      <span>&nbsp;|&nbsp;</span>
      <cv-link :href="destroyURL">Destroy</cv-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CarbonLinkList",
  props: {
    editURL: String,
    destroyURL: String
  }
};
</script>

<style lang="scss">
.link-list {
  display: flex;
}
</style>
