<template>
  <section class="photo-grid-container">
    <h2>Photo Gallery</h2>
    <div class="photo-grid">
      <!-- Show either some or all photos based on "collapsed" -->
      <div
          class="photo-cell"
          v-for="(photo, index) in displayedPhotos"
          :key="index"
      >
        <img :src="photo.src" :alt="photo.alt" />
      </div>
    </div>
    <!-- Toggle button only appears if there's more than collapsedCount photos -->
    <button
        v-if="photos.length > collapsedCount"
        @click="$emit('toggle-grid')"
        class="toggle-button"
    >
      {{ collapsed ? "Show More" : "Show Less" }}
    </button>
  </section>
</template>

<script>
export default {
  name: "PhotoGrid",
  props: {
    photos: {
      type: Array,
      default: () => [],
    },
    collapsed: {
      type: Boolean,
      default: true,
    },
    collapsedCount: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    displayedPhotos() {
      return this.collapsed
          ? this.photos.slice(0, this.collapsedCount)
          : this.photos;
    },
  },
  emits: ["toggle-grid"],
};
</script>

<style scoped>
.photo-grid-container {
  margin: 2rem 1rem;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.photo-cell img {
  width: 100%;
  height: auto;
  display: block;
}

.toggle-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
