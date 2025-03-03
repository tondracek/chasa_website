<template>
  <!-- The Lightbox -->
  <VueEasyLightbox
      :visible="visible"
      :imgs="photos"
      :index="currentIndex"
      @hide="onHide"
  />

  <img
      v-for="(img, index) in thumbnailPhotos"
      :key="index"
      :src="img"
      alt=""
      loading="lazy"
      @click="openLightbox(index)"
  />
</template>

<script setup>
import {defineProps, ref} from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const props = defineProps({
  thumbnailPhotos: {
    type: Array,
    default: () => []
  },
  photos: {
    type: Array,
    default: () => []
  },
})

const visible = ref(false)
const currentIndex = ref(0)

function openLightbox(index) {
  currentIndex.value = index
  visible.value = true
}

function onHide() {
  visible.value = false
}

</script>

<style scoped>

img {
  height: 150px;
  margin: 10px;
  cursor: pointer;
}

@media (max-width: 550px) {
  img {
    height: 100px;
  }
}

@media (max-width: 410px) {
  img {
    height: 80px;
  }
}
</style>
