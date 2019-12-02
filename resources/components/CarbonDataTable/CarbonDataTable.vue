<template>
  <cv-data-table-skeleton
    v-if="loading"
    :columns="columns"
    :title="title"
    :helper-text="helperText"
    :rows="10"
  />
  <cv-data-table
    v-else
    :columns="columns"
    :title="title"
    :helper-text="helperText"
    :pagination="{
      numberOfItems: this.totalRows,
      page: this.page
    }"
    @pagination="$emit('pagination', $event)"
  >
    <template slot="data">
      <cv-data-table-row v-for="row in data" :key="`${row.key}`">
        <cv-data-table-cell
          v-for="(cell, cellIndex) in row.data"
          :key="`${cellIndex}`"
        >
          <template v-if="cellIndex === 4">
            <cv-tag :label="`27/10/2019`" :kind="`${row.kind}`" />
          </template>
          <template v-if="!cell.editURL">{{ cell }}</template>
          <carbon-link-list
            v-else
            :edit-url="cell.editURL"
            :destroy-url="cell.destroyURL"
          />
        </cv-data-table-cell>
        <template slot="expandedContent">{{ row.description }}</template>
      </cv-data-table-row>
    </template>
  </cv-data-table>
</template>

<script>
import CarbonLinkList from "./CarbonLinkList";

export default {
  name: "CarbonDataTable",
  components: { CarbonLinkList },
  props: {
    headers: Array,
    rows: Array,
    title: String,
    helperText: String,
    loading: Boolean,
    totalRows: Number,
    page: Number
  },
  computed: {
    columns() {
      return this.headers.map(header => header.header);
    },
    data() {
      return this.rows.map(row => ({
        data: [
          row.name,
          row.address,
          row.status,
          row.links
        ],
        description: row.description,
        kind: row.kind,
        key: row.key
      }));
    }
  },
  methods: {}
};
</script>

<style lang="scss"></style>
