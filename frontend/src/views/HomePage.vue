<template>
  <div class="home-page">
    <IntroBanner/>

    <div class="horizontal-center">
      <div class="divider"/>
    </div>

    <CalendarEventsRow :events="events"/>

    <div class="horizontal-center">
      <div class="divider"/>
    </div>

    <div class="photo-gallery-wrapper">
      <CollapsiblePhotoGallery
          class="photo-gallery"
          :photos="photos"/>
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

<script lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import IntroBanner from "@/components/Introbanner/IntroBanner.vue";
import CalendarEventsRow from "@/components/calendarevents/CalendarEventsRow.vue";
import CollapsiblePhotoGallery from "@/components/photogallery/CollapsiblePhotoGallery.vue";
import ShowMorePhotosButton from "@/components/photogallery/ShowMorePhotosButton.vue";
import MyRepository from "@/data/MyRepository";

export default {
  name: "HomePage",
  components: {
    ShowMorePhotosButton,
    IntroBanner,
    CalendarEventsRow,
    CollapsiblePhotoGallery,
  },
  setup() {
    const showBanner = ref(true);

    // Example data
    const events = ref([
      {name: "Dětský den", date: "31. 5. 2025"},
      {name: "Pouť", date: "9. 8. 2025"},
      {name: "Hody", date: "18.-19. 10. 2025"},
    ]);

    const photos = ref<string[]>([]);

    const photosCollapsed = ref(true);

    // Hide banner on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        showBanner.value = false;
      }
    };

    onMounted(async () => {
      window.addEventListener("scroll", handleScroll, {passive: true});

      photos.value = await MyRepository.getGalleryImagesUrls();
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      showBanner,
      events,
      photos,
      photosCollapsed,
    };
  },
};
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
  margin-top: 20px;
  margin-bottom: 20px;
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
</style>
