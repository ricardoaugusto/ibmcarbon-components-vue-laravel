<template>
  <div class="bx--grid bx--grid--full-width">
    <div class="bx--row">
      <div class="bx--col-lg-16">
        <h1>Components</h1>
        <cv-inline-loading
          v-if="loading"
          :active="loading"
          :loading-text="loadingText"
          :loaded-text="loadedText"
        ></cv-inline-loading>
        <cv-accordion v-else>
          <cv-accordion-item :open="accordions.open1">
            <template slot="title"
              >Section 1 title
            </template>
            <template slot="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <cv-button
                :small="false"
                :disabled="false"
                @click="say('hello')"
                :icon="PersonFavorite32"
              >
                Say hello.
              </cv-button>
            </template>
          </cv-accordion-item>
          <cv-accordion-item :open="accordions.open2">
            <template slot="title"
              >Section 2 title</template
            >
            <template slot="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h2>Elements</h2>
              <h3>Elements</h3>
              <h4>Elements</h4>
              <h5>Elements</h5>
              <h6>Elements</h6>
            </template>
          </cv-accordion-item>
          <cv-accordion-item :open="accordions.open3">
            <template slot="title"
              >Section 3 title</template
            >
            <template slot="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </template>
          </cv-accordion-item>
          <cv-accordion-item :open="accordions.open4">
            <template slot="title"
              >Section 4 title</template
            >
            <template slot="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </template>
          </cv-accordion-item>
        </cv-accordion>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          consectetur eius et nemo obcaecati optio provident quae quas
          reiciendis voluptates! Asperiores deserunt excepturi harum impedit
          labore laborum, maxime nam nisi perferendis perspiciatis quam, rem
          similique suscipit temporibus veniam. Debitis, dignissimos ducimus
          earum eveniet ipsum natus nemo officia pariatur quod ullam?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PersonFavorite32 from "@carbon/icons-vue/lib/person--favorite/32";

export default {
  data: function() {
    return {
      accordions: [],
      loadingText: "Loading data...",
      loadedText: "Data loaded.",
      loading: true
    };
  },
  props: {},
  methods: {
    say: function(message) {
      console.log(message);
    },
    listAccordions() {
      window.axios.get("/api/accordion").then(({ data: returnedData }) => {
        this.accordions = returnedData;
        this.loading = false;
      });
    }
  },
  created() {
    this.listAccordions();

    Object.assign(this, {
      PersonFavorite32
    });
  }
};
</script>

<style lang="scss">
@import "../../sass/carbon-utils";
/*@import "./carbon-overrides";*/
/*@import "./mixins";*/
</style>
