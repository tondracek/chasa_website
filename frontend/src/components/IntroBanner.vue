<template>
  <div class="fullscreen-banner">

    <img :src="src" :alt="alt"/>

    <div
        class="white-overlay"
        :style="{ opacity: overlayOpacity }"
    >
    </div>

    <div class="banner-text" v-if="showText">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>

  </div>
</template>


<script>

export default {
  name: "FullScreenBanner",
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "Banner Image",
    },
    showText: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      overlayOpacity: 0,
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
      const scrollY = window.scrollY || window.pageYOffset;

      const bannerHeight = document.querySelector(".fullscreen-banner").clientHeight;

      if (scrollY === 0) {
        window.scrollTo({top: bannerHeight, behavior: "smooth"});
      }

      this.overlayOpacity = Math.min(scrollY / bannerHeight, 1);
    },
  },
};
</script>

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

.white-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 0;
}
</style>
