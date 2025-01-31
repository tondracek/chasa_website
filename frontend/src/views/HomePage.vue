<template>
  <div class="home-page">
    <!-- BannerIntro -->
    <IntroBanner
        src="/banner_photo.jpg"
        title="MOHELENSKÁ CHASA"
    />

    <!-- CalendarEventsRow -->
    <CalendarEvents :events="events"/>

    <!-- LatestPoster -->
    <LatestPoster :poster="latestPoster"/>

    <!-- PhotoGrid -->
    <PhotoGrid
        :photos="photos"
        :collapsed="photosCollapsed"
        :collapsedCount="collapsedCount"
        @toggle-grid="togglePhotoGrid"
    />

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
  </div>
</template>

<script lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import IntroBanner from "@/components/Introbanner/IntroBanner.vue";
import CalendarEventsRow from "@/components/calendarevents/CalendarEventsRow.vue";
import Poster from "@/components/Poster.vue";
import PhotoGrid from "@/components/photogrid/PhotoGrid.vue";

export default {
  name: "HomePage",
  components: {
    IntroBanner,
    CalendarEvents: CalendarEventsRow,
    Poster,
    PhotoGrid,
  },
  setup() {
    const showBanner = ref(true);

    // Example data
    const events = ref([
      {name: "Dětský den", date: "31. 5. 2025"},
      {name: "Pouť", date: "9. 8. 2025"},
      {name: "Hody", date: "18.-19. 10. 2025"},
    ]);

    const latestPoster = ref({
      src: "https://via.placeholder.com/600x800?text=Latest+Poster",
      alt: "Most Recent Poster",
    });

    const photos = ref([
      {src: "https://via.placeholder.com/400?text=Photo+1", alt: "Photo 1"},
      {src: "https://via.placeholder.com/400?text=Photo+2", alt: "Photo 2"},
      {src: "https://via.placeholder.com/400?text=Photo+3", alt: "Photo 3"},
      {src: "https://via.placeholder.com/400?text=Photo+4", alt: "Photo 4"},
      {src: "https://via.placeholder.com/400?text=Photo+5", alt: "Photo 5"},
    ]);

    const photosCollapsed = ref(true);
    const collapsedCount = ref(3);

    // Hide banner on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        showBanner.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll, {passive: true});
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    // Hide banner on click
    const hideBanner = () => {
      showBanner.value = false;
    };

    // Toggle photo grid
    const togglePhotoGrid = () => {
      photosCollapsed.value = !photosCollapsed.value;
    };

    return {
      showBanner,
      hideBanner,

      events,
      latestPoster,

      photos,
      photosCollapsed,
      collapsedCount,
      togglePhotoGrid,
    };
  },
};
</script>

<style scoped>
.home-page {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
