<script setup>
import {defineProps, ref} from 'vue'
import PhotoGallery from '@/components/photogallery/PhotoGallery.vue'

const props = defineProps({
  photos: {
    type: Array,
    default: () => []
  },
  collapsedCount: {
    type: Number,
    default: 20
  }
})

// 2. Manage collapse state
const isCollapsed = ref(true)

// 3. Show only a subset of photos if collapsed
const visiblePhotos = ref(props.photos)
updateVisiblePhotos()

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value
  updateVisiblePhotos()
}

function updateVisiblePhotos() {
  if (isCollapsed.value) {
    visiblePhotos.value = props.photos.slice(0, props.collapsedCount)
  } else {
    visiblePhotos.value = props.photos
  }
}
</script>

<template>
  <div>
    <!-- Toggle Button -->
    <button @click="toggleCollapse">
      {{ isCollapsed ? 'Show More' : 'Show Less' }}
    </button>

    <!-- Pass computed visiblePhotos to the gallery -->
    <PhotoGallery :photos="visiblePhotos"/>
  </div>
</template>

<style scoped>
/* Optional styling */
button {
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>
