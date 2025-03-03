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

    <div class="horizontal-center">
      <div class="divider"/>
    </div>

    <div class="highlighted-row">
      <footer>
        <a href="https://www.instagram.com/mohelenska_chasa/" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram social-icon"></i>
          <span>Instagram</span>
        </a>
        <a href="https://www.facebook.com/MohelenskaChasa" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-facebook social-icon"></i>
          <span>Facebook</span>
        </a>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import IntroBanner from "@/components/Introbanner/IntroBanner.vue";
import CalendarEventsRow from "@/components/calendarevents/CalendarEventsRow.vue";
import CollapsiblePhotoGallery from "@/components/photogallery/CollapsiblePhotoGallery.vue";
import MyRepository from "@/data/MyRepository";
import * as strings from "@/paraglide/messages.js";

const photos = ref<string[]>([]);
const thumbnailPhotos = ref<string[]>([]);

onMounted(async () => {
  photos.value = await MyRepository.getGalleryImagesUrls();
  thumbnailPhotos.value = await MyRepository.getGalleryThumbnailImagesUrls();
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

/* Ensures headings have consistent styling */
h2 {
  color: #373127;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

/* Footer takes full width and distributes its content */
footer {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
}

/* Styling for each link inside the footer */
footer a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #373127;
  font-size: 1rem;
  transition: color 0.3s ease;
}

footer a:hover {
  color: #555;
}

/* Icon styling */
.social-icon {
  font-size: 24px;
}
</style>
