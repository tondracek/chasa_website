<script setup>
import {computed, defineProps, ref} from 'vue'
import PhotoGallery from '@/components/photogallery/PhotoGallery.vue'
import ShowMorePhotosButton from "@/components/photogallery/ShowMorePhotosButton.vue";

const props = defineProps({
  photos: {
    type: Array,
    default: () => []
  },
  collapsedCount: {
    type: Number,
    default: 6
  }
})

const isCollapsed = ref(true)

const visiblePhotos = computed(() => {
  return isCollapsed.value
      ? props.photos.slice(0, props.collapsedCount)
      : props.photos
})
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <PhotoGallery :photos="visiblePhotos"/>
    </div>
    <ShowMorePhotosButton
        class="show-more-photos-button"
        @click="isCollapsed = !isCollapsed"
    />
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  max-width: 1200px;
}
</style>
