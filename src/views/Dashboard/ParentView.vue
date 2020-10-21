<template>
<DashboardLayout>
   <router-view/>
   </DashboardLayout>
</template>

<script>
import DashboardLayout from '../../components/DashboardLayout.vue';
import { defineComponent } from "vue";
export default defineComponent({
   components: {
      DashboardLayout
   },
  setup() {
    return {
    
    };
  },
});
</script>
