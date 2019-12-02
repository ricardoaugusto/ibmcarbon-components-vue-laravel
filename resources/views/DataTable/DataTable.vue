<template>
  <div class="bx--grid bx--grid--full-width">
    <div class="bx--row">
      <div class="bx--col">
        <h1>
          Users
        </h1>
        <hr />
        <cv-tag kind="filter" :label="`2019`" />
        <cv-tag kind="filter" :label="`Filter`" />
        <cv-tag kind="filter" :label="`Another`" />
        <CarbonDataTable
          :headers="headers"
          :rows="pagedRows"
          :totalRows="rows.length"
          @pagination="onPagination"
          :page="this.page"
          title=""
          helperText=""
          :loading="loading"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CarbonDataTable from "../../components/CarbonDataTable";

const headers = [
  {
    key: "name",
    header: "Name"
  },
  {
    key: "address",
    header: "Address"
  },
  {
    key: "status",
    header: "Status"
  },
  {
    key: "",
    header: ""
  }
];

export default {
  components: { CarbonDataTable },
  data: function() {
    return {
      carbons: [],
      headers,
      pageSize: 10,
      pageStart: this.nanPage(),
      page: this.nanPage(),
      loading: true,
      helperText: "Filters: 2019"
    };
  },
  props: {},
  methods: {
    listCarbons() {
      window.axios
        .get("/api/carbon")
        .then(({ data: returnedData }) => {
          returnedData.forEach(carbon => {
            this.carbons.push(carbon);
          });
        })
        .then(() => (this.loading = false));
    },
    onPagination(val) {
      this.pageSize = val.length;
      this.pageStart = val.start;
      this.page = val.page;
      this.$router
        .push({ name: "datatable", params: { pageStart: val.page } })
        .catch(err => console.log(err));
    },
    nanPage() {
      return Number(this.$route.params.pageStart);
    },
    cvTagKind(status) {
      switch (status) {
        case "Status 1":
          return "red";
        case "Status 2":
          return "green";
        default:
          return "gray";
      }
    }
  },
  computed: {
    rows() {
      return this.carbons.map(row => ({
        ...row,
        key: row.id,
        name: row.name,
        address: row.address,
        kind: this.cvTagKind(row.status),
        status: row.status,
        links: { editURL: 123, destroyURL: 456 },
        description: row.items + row.info
      }));
    },
    pagedRows() {
      return this.rows.slice(this.pageStart, this.pageStart + this.pageSize);
    }
  },
  created() {
    this.listCarbons();
  }
};
</script>

<style lang="scss">
@import "../../sass/carbon-utils";
</style>
