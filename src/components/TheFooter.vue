<template>
  <footer class="absolute w-full pt-5 bg-black bg-opacity-20">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full px-4 p-3">
          <div class="py-1 text-center text-sm text-white font-semibold">
            Copyright © {{ date }}
            <a
              href="/"
              class="py-1 text-sm font-semibold text-white hover:text-blue-500 "
              >Son D. Nguyen</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
  components: {},
};
</script>

<style scoped>
</style>