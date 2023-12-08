<template>
  <h3 class="text-xl my-10">Mejores Ofertas de Cambio</h3>
  <table>
    <tr
      v-for="m in markets"
      :key="`${m.exchangeId}-${m.priceUsd}`"
      class="border-b"
    >
      <td>
        <b>{{ m.exchangeId }}</b>
      </td>
      <td>{{ dollarFilter(m.priceUsd) }}</td>
      <td>{{ m.baseSymbol }} / {{ m.quoteSymbol }}</td>
      <td>
        <px-button
          :isLoading="m.isLoading || false"
          v-if="!m.url"
          @custom-click="getWebsite(m)"
        >
          <slot> Obtener Link</slot>
        </px-button>
        <a v-else class="hover:underline text-green-600" target="_blanck">
          {{ m.url }}
        </a>
      </td>
    </tr>
  </table>
</template>

<script>
import api from '@/api'
import { dollarFilter, percentFilter } from '@/filters'
import PxButton from '@/components/PxButton.vue'

export default {
  name: 'PxBestOffertsTable',

  props: {
    markets: {
      type: Array,
      default: () => [],
    },
  },

  components: { PxButton },

  methods: {
    getWebsite(market) {
      market.isLoading = true
      return api
        .getExchange(market.exchangeId)
        .then((res) => (market.url = res.exchangeUrl))
        .finally(() => (market.isLoading = false))
        .catch(() => (market.url = 'Website del exchange no disponible'))
    },
  },

  setup() {
    return {
      dollarFilter,
      percentFilter,
    }
  },
}
</script>
