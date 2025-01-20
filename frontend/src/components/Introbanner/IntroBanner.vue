<script lang="ts">

import {useScroll} from '@vueuse/core'
import {toRefs} from "vue";
import AdditionalInfoButton from "@/components/Introbanner/AdditionalInfoButton.vue";

const {y, directions} = useScroll(window)
const scrollingDirection = toRefs(directions)

export default {
  name: "FullScreenBanner",
  components: {AdditionalInfoButton},
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "Banner Image",
    },
  },

  data() {
    return {
      overlayOpacity: 0,
      imageScale: 1,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const bannerHeight = this.getBannerHeight()

      if (y.value <= 50 && scrollingDirection.bottom.value) {
        this.scrollBelowBanner(bannerHeight)
      }

      this.overlayOpacity = Math.min(scrollY / bannerHeight, 1);
      this.imageScale = 1 + (scrollY / bannerHeight) * 0.05;
    },

    scrollBelowBanner(bannerHeight: number = this.getBannerHeight()) {
      document.body.style.overflow = "hidden";
      window.scrollTo({top: bannerHeight, behavior: "smooth"});
      document.body.style.overflow = "";
    },

    getBannerHeight() {
      return document.querySelector(".fullscreen-banner").clientHeight;
    },
  },
};
</script>

<template>
  <div class="fullscreen-banner">

    <img
        :src="src"
        :alt="alt"
        :style="{ transform: `scale(${imageScale})` }"
    />

    <AdditionalInfoButton class="additional-info-button"/>

    <div class="white-overlay" :style="{ opacity: overlayOpacity }"></div>

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

.fullscreen-banner img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-text {
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.additional-info-button {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.white-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 0;
}
</style>
