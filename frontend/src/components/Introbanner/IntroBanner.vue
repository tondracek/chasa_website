<script setup lang="ts">
import AdditionalInfoButton from "@/components/Introbanner/AdditionalInfoButton.vue";
import {useScroll} from '@vueuse/core'
import {onBeforeUnmount, onMounted, ref, toRefs} from "vue";
import {getBannerImageUrl} from "@/usecase/getBannerImageUrl";

const {y, directions} = useScroll(window)
const scrollingDirection = toRefs(directions)

const bannerOpacity = ref(1)
const imageScale = ref(1)
const imageUrl = ref(null)

onMounted(async () => {
  window.addEventListener("scroll", handleScroll);

  imageUrl.value = await getBannerImageUrl()
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
})

function handleScroll() {
  const bannerHeight = getBannerHeight()

  if (y.value <= 50 && scrollingDirection.bottom.value) {
    scrollBelowBanner(bannerHeight)
  }

  bannerOpacity.value = 1 - Math.min(scrollY / bannerHeight, 1);
  imageScale.value = 1 + (scrollY / bannerHeight) * 0.1;
}

function scrollBelowBanner(bannerHeight: number = getBannerHeight()) {
  document.body.style.overflow = "hidden";
  window.scrollTo({top: bannerHeight, behavior: "smooth"});
  document.body.style.overflow = "";
}

function getBannerHeight() {
  return document.querySelector(".fullscreen-banner").clientHeight;
}

function logImageUrl() {
  console.log(imageUrl.value);
}
</script>

<template>
  <div class="fullscreen-banner">
    <img
        class="banner-image"
        :src="imageUrl"
        :style="{
          transform: `scale(${imageScale})`,
          opacity: bannerOpacity,
        }"
        @click="logImageUrl"
    />

    <img src="/logo_chasa.svg" alt="Chasa Logo" class="chasa-logo"/>

    <AdditionalInfoButton class="additional-info-button" @click="scrollBelowBanner"/>
  </div>
</template>

<style scoped>
.fullscreen-banner {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
}

.banner-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.chasa-logo {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  max-width: 80%;
}

.additional-info-button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
