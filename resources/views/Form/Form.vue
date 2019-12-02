<template>
  <div class="bx--grid bx--grid--full-width">
    <div class="bx--row">
      <div class="bx--col-lg-16">
        <h1>Forms</h1>
        <form class="debug" @submit.prevent="formSubmitted">
          <span v-if="loading">
            <cv-inline-loading
              :active="loading"
              :loading-text="loadingText"
              :loaded-text="loadedText"
            ></cv-inline-loading>
          </span>
          <span v-else>
            <cv-form-item>
              <cv-text-input
                label="Name"
                helper-text="Type your full name"
                placeholder="Full name"
                v-model="content.name"
              >
              </cv-text-input>
            </cv-form-item>
            <cv-text-area
              label="Address"
              helper-text="Type your address"
              placeholder="Address"
              v-model="content.address"
            >
            </cv-text-area>
            <cv-dropdown
              class="cv-dropdown"
              placeholder="Select your gender"
              v-model="content.gender"
            >
              <cv-dropdown-item value="f">F</cv-dropdown-item>
              <cv-dropdown-item value="m">M</cv-dropdown-item>
            </cv-dropdown>
            <button class="bx--btn bx--btn--primary" type="submit">
              Save
            </button>
          </span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      accordions: [],
      loadingText: "Loading data...",
      loadedText: "Data loaded.",
      loading: true,
      content: {}
    };
  },
  props: {},
  methods: {
    formSubmitted() {
      this.loading = true;
      window.axios
        .post("/api/form", this.content)
        .then(({ data: returnedData }) => {
          console.log(returnedData);
          this.loading = false;
        });
    }
  },
  created() {
    this.loading = false;
  }
};
</script>

<style lang="scss" scoped></style>
