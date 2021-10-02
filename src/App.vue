<template>
<div class="w-screen">
  <TheCv></TheCv>

</div>
</template>
<script>
import TheCv from './components/TheCv.vue';

export default {
  name: "App",
  components: {
    TheCv
  },
};
</script>

<style lang="css">
@import "./App.css";
</style>