<script setup>
import {computed, defineProps, onBeforeUnmount, onMounted, ref, useTemplateRef} from 'vue'
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

// To decide when to show the floating button, we check if the photo gallery spans the viewport.
const galleryVisible = ref(false)
// Using a template ref to target the gallery container (make sure it's attached to a native element)
const galleryContainer = useTemplateRef('galleryContainer')

function checkGalleryVisibility() {
  if (!galleryContainer.value) return
  const rect = galleryContainer.value.getBoundingClientRect()
  // Button shows when the gallery's top is above the viewport
  // and the gallery's bottom is below the viewport.
  galleryVisible.value = rect.top < 0 && rect.bottom > window.innerHeight
}

onMounted(() => {
  window.addEventListener('scroll', checkGalleryVisibility, {passive: true})
  window.addEventListener('resize', checkGalleryVisibility)
  checkGalleryVisibility()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkGalleryVisibility)
  window.removeEventListener('resize', checkGalleryVisibility)
})
</script>

<template>
  <div class="container">
    <div class="photo-gallery-wrapper" ref="galleryContainer">
      <PhotoGallery :photos="visiblePhotos"/>
    </div>

    <ShowMorePhotosButton
        class="show-more-photos-button"
        @click="isCollapsed = !isCollapsed"
    />

    <transition name="slide-up">
      <ShowMorePhotosButton
          class="floating-show-more-photos-button"
          @click="isCollapsed = !isCollapsed"
          v-if="galleryVisible"
      />
    </transition>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo-gallery-wrapper {
  max-width: 1200px;
}

/* Regular show more button styling if needed */
.show-more-photos-button {
  margin-top: 20px;
}

/* Floating button fixed to the bottom center */
.floating-show-more-photos-button {
  position: fixed;
  bottom: 10px;
  left: 50%;
  /* Set default transform to center horizontally */
  transform: translate(-50%, 0);
  z-index: 1000;
}

/* Transition classes for the floating button */

.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  /* Start 20px lower than the final position while still centered */
  transform: translate(-50%, 20px);
}

.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>
