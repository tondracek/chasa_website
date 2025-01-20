<template>
  <section class="poster">
    <h2>Most Recent Poster</h2>
    <img
        :src="poster.src"
        :alt="poster.alt"
        class="poster-image"
    />
  </section>
</template>

<script>
export default {
  name: "LatestPoster",
  props: {
    poster: {
      type: Object,
      default: () => ({ src: "", alt: "" }),
    },
  },
};
</script>

<style scoped>
.poster {
  margin: 2rem 1rem;
}

.poster-image {
  width: 100%;
  max-width: 400px;
  display: block;
  margin-top: 1rem;
}
</style>
