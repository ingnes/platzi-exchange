<template>
  <div>
    <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
    <px-assets-table v-if="!loading" :assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: 'HomeView',

  components: { PxAssetsTable, PulseLoader },

  data() {
    return {
      loading: false,
      assets: [],
    }
  },

  created() {
    this.loading = true
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.loading = false))
  },
}
</script>
