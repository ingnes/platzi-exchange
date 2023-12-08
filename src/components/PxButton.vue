<template>
  <button
    @click="buttonClick"
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
  >
    <pulse-loader
      :loading="isLoading"
      :color="color"
      :size="size"
    ></pulse-loader>
    <slot></slot>
  </button>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: 'PxButton',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  components: { PulseLoader },

  methods: {
    buttonClick() {
      this.$emit('custom-click')
    },
  },
}
</script>
