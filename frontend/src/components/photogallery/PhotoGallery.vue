<template>
  <!-- The Lightbox -->
  <VueEasyLightbox
      :visible="visible"
      :imgs="photos"
      :index="currentIndex"
      @hide="onHide"
  />

<!--  <div class="photo-grid">-->
    <img
        v-for="(img, index) in photos"
        :key="index"
        :src="img"
        alt=""
        @click="openLightbox(index)"
    />
<!--  </div>-->
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

.photo-grid {
  display: grid;
}

img {
  width: 150px;
  margin: 10px;
  cursor: pointer;
}
</style>
