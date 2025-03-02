<template>
  <div class="home-page">
    <IntroBanner/>

    <div class="horizontal-center">
      <div class="divider"/>
    </div>

    <div class="highlighted-row">
      <h2>{{ strings.upcoming_events() }}</h2>
      <CalendarEventsRow/>
    </div>

    <div class="horizontal-center">
      <div class="divider"/>
    </div>

    <div class="highlighted-row">
      <h2>{{ strings.gallery() }}</h2>
      <div class="photo-gallery-wrapper">
        <CollapsiblePhotoGallery
            class="photo-gallery"
            :thumbnail-photos="thumbnailPhotos"
            :photos="photos"/>
      </div>
    </div>

    <footer>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
      <p>...</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import IntroBanner from "@/components/Introbanner/IntroBanner.vue";
import CalendarEventsRow from "@/components/calendarevents/CalendarEventsRow.vue";
import CollapsiblePhotoGallery from "@/components/photogallery/CollapsiblePhotoGallery.vue";
import MyRepository from "@/data/MyRepository";
import * as strings from "@/paraglide/messages.js";

const showBanner = ref(true);

const photos = ref<string[]>([]);
const thumbnailPhotos = ref<string[]>([]);

const handleScroll = () => {
  if (window.scrollY > 50) {
    showBanner.value = false;
  }
};

onMounted(async () => {
  window.addEventListener("scroll", handleScroll, {passive: true});

  photos.value = await MyRepository.getGalleryImagesUrls();
  thumbnailPhotos.value = await MyRepository.getGalleryThumbnailImagesUrls();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

</script>

<style scoped>

.home-page {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #fff2d8;
}

.divider {
  width: 80%;
  height: 2px;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #a8a8a8;
}

.horizontal-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo-gallery {
  padding-top: 20px;
  padding-bottom: 20px;
}

.highlighted-row {
  background: #f8e6c0;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  color: #373127;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

</style>
