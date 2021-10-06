<template>
<div class="overflow-x-hidden">
  <TheCv></TheCv>

</div>
</template>
<script>
import TheCv from '@/components/TheCv.vue';
import { useMeta } from 'vue-meta'
export default {
  name: "App",
  components: {
    TheCv
  },

  setup () {
    const { meta } = useMeta({
      title: 'The Son is Up!',
      // meta: [
      //   {
      //     'http-equiv': "Permissions-Policy",
      //     'content': "interest-cohort=()"
      //   }
      // ]
    });
    return {
      meta
    };
  }

};
</script>

<style lang="css">
@import "./App.css";
</style>