<template>
  <!-- The Lightbox -->
  <VueEasyLightbox
      :visible="visible"
      :imgs="photos"
      :index="currentIndex"
      @hide="onHide"
  />

  <img
      v-for="(img, index) in photos"
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
  photos: {
    type: Array,
    default: () => []
  }
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
  width: 150px;
  margin: 10px;
  cursor: pointer;
}
</style>
