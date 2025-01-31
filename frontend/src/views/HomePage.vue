<template>
  <div class="home-page">
    <!-- BannerIntro -->
    <IntroBanner
        src="/banner_photo.jpg"
        title="MOHELENSKÁ CHASA"
    />

    <!-- CalendarEventsRow -->
    <CalendarEventsRow :events="events"/>

    <CollapsiblePhotoGallery :photos="photos"/>

    <footer>
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

export default {
  name: "HomePage",
  components: {
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

    const photos = [
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
      'https://picsum.photos/800/600?random=1',
      'https://picsum.photos/800/600?random=2',
      'https://picsum.photos/800/600?random=3',
    ]


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
