<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import AdditionalInfoButton from "@/components/Introbanner/AdditionalInfoButton.vue";

const bannerOpacity = ref(1);
const imageScale = ref(1);

const imageUrl = ref("banner_photo.jpg");
const logoUrl = ref("logo_chasa.svg")

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  const bannerHeight = getBannerHeight();
  bannerOpacity.value = 1 - Math.min(window.scrollY / bannerHeight, 1);
  imageScale.value = 1 + (window.scrollY / bannerHeight) * 0.05;
}

function scrollBelowBanner(bannerHeight: number = getBannerHeight()) {
  document.body.style.overflow = "hidden";
  window.scrollTo({top: bannerHeight, behavior: "smooth"});
  document.body.style.overflow = "";
}

function getBannerHeight() {
  const banner = document.querySelector(".fullscreen-banner");
  return banner ? banner.clientHeight : 0;
}
</script>

<template>
  <div class="fullscreen-banner">
    <img
        class="banner-image"
        :src="imageUrl"
        :style="{ transform: `scale(${imageScale})`, opacity: bannerOpacity }"
        alt="banner-image"
    />

    <div class="banner-overlay">
      <img :src="logoUrl" alt="Chasa Logo" class="chasa-logo"/>
      <AdditionalInfoButton class="additional-info-button" @click="scrollBelowBanner"/>
    </div>
  </div>
</template>

<style scoped>
.fullscreen-banner {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.banner-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.chasa-logo {
  margin-top: 10px;
  width: 400px;
  max-width: 80%;
}

.additional-info-button {
  color: #dddddd;
}

@media (max-width: 600px) {
  .banner-image {
    object-fit: scale-down;
    background: linear-gradient(
        white 50%,
        transparent 80%
    );
  }

  .additional-info-button {
    margin-bottom: 50px;
    color: #2c2c2c;
  }
}
</style>
