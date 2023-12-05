<template>
  <div>
    <px-assets-table />
  </div>
</template>

<script>
import api from "@/api.js";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "HomeView",
  components: { PxAssetsTable },
};
</script>
