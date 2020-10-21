<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Layout,
  },
  setup() {
    return {};
  },
});
</script>
