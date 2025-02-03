<script setup>
import {computed, defineProps, onBeforeUnmount, onMounted, ref, useTemplateRef} from 'vue'
import PhotoGallery from '@/components/photogallery/PhotoGallery.vue'
import ShowMorePhotosButton from "@/components/photogallery/ShowMorePhotosButton.vue";
import {vAutoAnimate} from "@formkit/auto-animate";

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

const galleryVisible = ref(false)
const galleryContainer = useTemplateRef('galleryContainer')

function checkGalleryVisibility() {
  if (!galleryContainer.value) return
  const rect = galleryContainer.value.getBoundingClientRect()

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

.show-more-photos-button {
  margin-top: 20px;
}

.floating-show-more-photos-button {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}

.slide-up-enter-to,
.slide-up-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>
